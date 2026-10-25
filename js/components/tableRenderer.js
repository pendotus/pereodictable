import { ELEMENTS_BY_Z } from '../data/elements.js';
import { MAIN_TABLE_ROWS, LANTHANIDES_ROW, ACTINIDES_ROW } from '../data/tableLayout.js';
import { store } from '../state/store.js';

const COL_WIDTH = 13;      // Ширина групп I - VII
const GROUP8_SINGLE = 16;  // Ширина группы VIII без триады (общая ширина таблицы = 124 символа)
const TRIAD_WIDTH = 6;     // Ширина каждой из 3 ячеек триады в группе VIII

function padRight(str, len) {
  return String(str).padEnd(len, ' ').slice(0, len);
}

function padCenter(str, len) {
  const s = String(str);
  if (s.length >= len) return s.slice(0, len);
  const left = Math.floor((len - s.length) / 2);
  return ' '.repeat(left) + s + ' '.repeat(len - s.length - left);
}

function borderSpan(text, adjacentZList = []) {
  const cleanZ = adjacentZList.filter((z) => typeof z === 'number');
  if (cleanZ.length === 0) {
    return `<span>${text}</span>`;
  }
  return `<span class="b-tok" data-adj="${cleanZ.join(',')}">${text}</span>`;
}

function formatStandardCellLines(cellSpec, width) {
  if (cellSpec === null) {
    const empty = ' '.repeat(width);
    return [`<span>${empty}</span>`, `<span>${empty}</span>`, `<span>${empty}</span>`];
  }

  if (cellSpec === 'H_REF') {
    const l1 = ' '.repeat(width);
    const l2 = padCenter('( H )', width);
    const l3 = ' '.repeat(width);
    const attrs = `type="button" class="el-slice" data-z="1" data-ref="true" aria-label="Водород"`;
    return [`<button ${attrs}>${l1}</button>`, `<button ${attrs}>${l2}</button>`, `<button ${attrs}>${l3}</button>`];
  }

  const el = ELEMENTS_BY_Z.get(cellSpec);
  const line1Text = padRight(` ${el.z}`, width);
  const symMass = `${el.symbol.padEnd(3, ' ')}${el.mass}`;
  const line2Text = padRight(`  ${symMass}`, width);
  const line3Text = padRight(`   ${el.name}`, width);

  const attrs = `type="button" class="el-slice" data-z="${el.z}" aria-label="${el.z} ${el.fullName}"`;
  return [
    `<button ${attrs}>${line1Text}</button>`,
    `<button ${attrs}>${line2Text}</button>`,
    `<button ${attrs}>${line3Text}</button>`
  ];
}

function formatTriadCellLines(z) {
  const el = ELEMENTS_BY_Z.get(z);
  const l1 = padRight(` ${el.z}`, TRIAD_WIDTH);
  const l2 = padRight(`${el.symbol}${el.mass}`, TRIAD_WIDTH);
  const l3 = padRight(`${el.name}`, TRIAD_WIDTH);

  const attrs = `type="button" class="el-slice" data-z="${el.z}" aria-label="${el.z} ${el.fullName}"`;
  return [
    `<button ${attrs}>${l1}</button>`,
    `<button ${attrs}>${l2}</button>`,
    `<button ${attrs}>${l3}</button>`
  ];
}

function getCellZList(cellSpec) {
  if (typeof cellSpec === 'number') return [cellSpec];
  if (Array.isArray(cellSpec)) return cellSpec;
  return [];
}

/**
 * Горизонтальная разделительная линия между рядами (ровно 124 символа в обычных рядах и 128 в триадах)
 */
function buildHorizontalDivider(upperRow, lowerRow) {
  const periodChar = upperRow && upperRow.periodOnDividerAfter ? upperRow.periodOnDividerAfter : null;
  const leftPrefix = periodChar ? `| ${periodChar} +---+` : '+---+---+';

  let html = `<span>${leftPrefix}</span>`;

  for (let c = 0; c < 7; c++) {
    const upZ = upperRow ? getCellZList(upperRow.cells[c]) : [];
    const lowZ = lowerRow ? getCellZList(lowerRow.cells[c]) : [];
    const segZ = [...upZ, ...lowZ];

    html += borderSpan('-'.repeat(COL_WIDTH), segZ);

    const nextUpZ = upperRow ? getCellZList(upperRow.cells[c + 1]) : [];
    const nextLowZ = lowerRow ? getCellZList(lowerRow.cells[c + 1]) : [];
    const cornerZ = [...segZ, ...nextUpZ, ...nextLowZ];
    html += borderSpan('+', cornerZ);
  }

  const upG8 = upperRow ? upperRow.cells[7] : null;
  const lowG8 = lowerRow ? lowerRow.cells[7] : null;
  const hasTriad = Array.isArray(upG8) || Array.isArray(lowG8);

  if (!hasTriad) {
    const z8 = [...getCellZList(upG8), ...getCellZList(lowG8)];
    html += borderSpan('-'.repeat(GROUP8_SINGLE), z8);
    html += borderSpan('+', z8);
  } else {
    const triadArr = Array.isArray(upG8) ? upG8 : lowG8;
    const singleZ = !Array.isArray(upG8) ? getCellZList(upG8) : getCellZList(lowG8);

    // 1-я подколонка триады (6 симв.) + '+'
    const zT0 = [triadArr[0], ...singleZ];
    html += borderSpan('-'.repeat(TRIAD_WIDTH), zT0);
    html += borderSpan('+', [...zT0, triadArr[1]]);

    // 2-я подколонка триады (6 симв.) + '+'
    const zT1 = [triadArr[1], ...singleZ];
    html += borderSpan('-'.repeat(TRIAD_WIDTH), zT1);
    html += borderSpan('+', [...zT1, triadArr[2]]);

    // 3-я подколонка триады (6 симв.): 2 дефиса до оси VIII группы + '+' + 3 дефиса + '+'
    const zT2 = [triadArr[2], ...singleZ];
    html += borderSpan('--', zT2);
    html += borderSpan('+', zT2);
    html += borderSpan('---+', [triadArr[2]]);
  }

  return `<div class="ascii-row">${html}</div>`;
}

function buildDataRowLines(rowSpec) {
  const lines = ['', '', ''];
  const rLabel = rowSpec.rowNum.length === 1 ? ` ${rowSpec.rowNum} ` : ` ${rowSpec.rowNum}`;
  const pLabel = ` ${rowSpec.periodInline} `;

  const prefixes = [`|   |   `, `|${pLabel}|${rLabel}`, `|   |   `];

  const colSlices = [];
  for (let c = 0; c < 7; c++) {
    colSlices.push(formatStandardCellLines(rowSpec.cells[c], COL_WIDTH));
  }

  const g8 = rowSpec.cells[7];
  const isTriad = Array.isArray(g8);
  const triadSlices = isTriad ? g8.map((z) => formatTriadCellLines(z)) : null;
  const singleG8Slices = !isTriad ? formatStandardCellLines(g8, GROUP8_SINGLE) : null;

  for (let lineIdx = 0; lineIdx < 3; lineIdx++) {
    let rowHtml = `<span>${prefixes[lineIdx]}</span>`;
    rowHtml += borderSpan('|', getCellZList(rowSpec.cells[0]));

    for (let c = 0; c < 7; c++) {
      rowHtml += colSlices[c][lineIdx];
      const leftZ = getCellZList(rowSpec.cells[c]);
      const rightZ =
        c < 6
          ? getCellZList(rowSpec.cells[c + 1])
          : isTriad
          ? [g8[0]]
          : getCellZList(g8);
      rowHtml += borderSpan('|', [...leftZ, ...rightZ]);
    }

    if (!isTriad) {
      rowHtml += singleG8Slices[lineIdx];
      rowHtml += borderSpan('|', getCellZList(g8));
    } else {
      rowHtml += triadSlices[0][lineIdx];
      rowHtml += borderSpan('|', [g8[0], g8[1]]);
      rowHtml += triadSlices[1][lineIdx];
      rowHtml += borderSpan('|', [g8[1], g8[2]]);
      rowHtml += triadSlices[2][lineIdx];
      rowHtml += borderSpan('|', [g8[2]]);
    }

    lines[lineIdx] = `<div class="ascii-row">${rowHtml}</div>`;
  }

  return lines.join('');
}

function buildFBlockSection(title, zList) {
  const cellW = 7;
  let topBorder = '+';
  for (let i = 0; i < zList.length; i++) {
    const z = zList[i];
    const nextZ = zList[i + 1];
    topBorder += borderSpan('-'.repeat(cellW), [z]);
    topBorder += borderSpan('+', nextZ ? [z, nextZ] : [z]);
  }

  const rowsHtml = ['', '', ''];
  for (let lineIdx = 0; lineIdx < 3; lineIdx++) {
    let r = borderSpan('|', [zList[0]]);
    for (let i = 0; i < zList.length; i++) {
      const el = ELEMENTS_BY_Z.get(zList[i]);
      let text = '';
      if (lineIdx === 0) text = padRight(` ${el.z}`, cellW);
      if (lineIdx === 1) {
        const rawMass = el.mass.startsWith('[') ? el.mass : ` ${el.mass}`;
        text = padCenter(`${el.symbol}${rawMass}`, cellW);
      }
      if (lineIdx === 2) text = padCenter(el.name, cellW);

      r += `<button type="button" class="el-slice" data-z="${el.z}" aria-label="${el.z} ${el.fullName}">${text}</button>`;
      const nextZ = zList[i + 1];
      r += borderSpan('|', nextZ ? [el.z, nextZ] : [el.z]);
    }
    rowsHtml[lineIdx] = `<div class="ascii-row">${r}</div>`;
  }

  return [
    `<div class="ascii-row"><span>${title}</span></div>`,
    `<div class="ascii-row">${topBorder}</div>`,
    ...rowsHtml,
    `<div class="ascii-row">${topBorder}</div>`
  ].join('');
}

export function initPeriodicTable(rootContainer, onElementSelect) {
  if (!rootContainer) return;

  // Шапка таблицы ровно 124 символа в ширину — 100% совпадение со столбцом VIII
  const headerLines = [
    '+' + '-'.repeat(122) + '+',
    '|' + padCenter('ПЕРИОДИЧЕСКАЯ СИСТЕМА ХИМИЧЕСКИХ ЭЛЕМЕНТОВ Д.И. МЕНДЕЛЕЕВА', 122) + '|',
    '+---+---+' + '-'.repeat(114) + '+',
    '| П | Р |' + padCenter('Г Р У П П Ы', 114) + '|',
    '| Е | Я +' + '-------------+'.repeat(7) + '----------------+',
    '| Р | Д |      I      |     II      |     III     |     IV      |      V      |     VI      |     VII     |      VIII      |'
  ]
    .map((line) => `<div class="ascii-row"><span>${line}</span></div>`)
    .join('');

  let bodyHtml = '';
  bodyHtml += buildHorizontalDivider(null, MAIN_TABLE_ROWS[0]);

  for (let r = 0; r < MAIN_TABLE_ROWS.length; r++) {
    bodyHtml += buildDataRowLines(MAIN_TABLE_ROWS[r]);
    const nextRow = MAIN_TABLE_ROWS[r + 1] || null;
    bodyHtml += buildHorizontalDivider(MAIN_TABLE_ROWS[r], nextRow);
  }

  const lanthanidesHtml = buildFBlockSection('* Лантаноиды', LANTHANIDES_ROW);
  const actinidesHtml = buildFBlockSection('** Актиноиды', ACTINIDES_ROW);

  // Сборка без паразитных текстовых переносов: ровно 62 ASCII-строки (вписываются в строки 12..46 гуттера)
  rootContainer.innerHTML =
    `<div class="ascii-table-canvas" id="ascii-canvas">` +
    headerLines +
    bodyHtml +
    lanthanidesHtml +
    actinidesHtml +
    `</div>`;

  const slicesByZ = new Map();
  rootContainer.querySelectorAll('.el-slice[data-z]').forEach((node) => {
    const z = Number(node.dataset.z);
    if (!slicesByZ.has(z)) slicesByZ.set(z, []);
    slicesByZ.get(z).push(node);
  });

  const borderTokens = Array.from(rootContainer.querySelectorAll('.b-tok[data-adj]')).map((node) => ({
    node,
    adj: node.dataset.adj.split(',').map(Number)
  }));

  function applyCategoryHighlight(activeFilter, strictFigma) {
    const activeZSet = new Set();

    if (activeFilter !== 'all') {
      ELEMENTS_BY_Z.forEach((el) => {
        if (el.category === activeFilter) {
          if (strictFigma && el.figmaSkipHighlight) return;
          activeZSet.add(el.z);
        }
      });
    }

    slicesByZ.forEach((nodes, z) => {
      const isHighlighted = activeZSet.has(z);
      nodes.forEach((n) => {
        const shouldHighlight = n.dataset.ref === 'true' ? false : isHighlighted;
        n.classList.toggle('is-highlighted', shouldHighlight);
      });
    });

    borderTokens.forEach(({ node, adj }) => {
      const isBorderActive = adj.some((z) => activeZSet.has(z));
      node.classList.toggle('is-highlighted', isBorderActive);
    });
  }

  rootContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.el-slice[data-z]');
    if (!target) return;
    const z = Number(target.dataset.z);
    if (onElementSelect) onElementSelect(z);
  });

  let currentHoverZ = null;
  rootContainer.addEventListener('mouseover', (event) => {
    const target = event.target.closest('.el-slice[data-z]');
    const nextZ = target ? Number(target.dataset.z) : null;
    if (nextZ === currentHoverZ) return;

    if (currentHoverZ && slicesByZ.has(currentHoverZ)) {
      slicesByZ.get(currentHoverZ).forEach((n) => n.classList.remove('is-hovered'));
    }
    currentHoverZ = nextZ;
    if (currentHoverZ && slicesByZ.has(currentHoverZ)) {
      slicesByZ.get(currentHoverZ).forEach((n) => n.classList.add('is-hovered'));
    }
  });

  rootContainer.addEventListener('mouseleave', () => {
    if (currentHoverZ && slicesByZ.has(currentHoverZ)) {
      slicesByZ.get(currentHoverZ).forEach((n) => n.classList.remove('is-hovered'));
      currentHoverZ = null;
    }
  });

  store.subscribe((state, prevState) => {
    if (
      state.activeFilter !== prevState.activeFilter ||
      state.strictFigmaHighlight !== prevState.strictFigmaHighlight
    ) {
      applyCategoryHighlight(state.activeFilter, state.strictFigmaHighlight);
    }
  });
}