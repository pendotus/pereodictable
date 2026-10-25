/**
 * Рендерит левую колонку номеров строк IDE (1..48, с точной копией строки "67" на 37-й позиции из макета)
 */
export function initLineNumbers(container) {
  if (!container) return;

  const totalLines = 48;
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= totalLines; i++) {
    const lineEl = document.createElement('div');
    lineEl.className = 'gutter-line-num';
    lineEl.textContent = i === 37 ? '67' : String(i);
    fragment.appendChild(lineEl);
  }

  container.innerHTML = '';
  container.appendChild(fragment);
}