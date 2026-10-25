import { ELEMENTS_BY_Z } from '../data/elements.js';
import {
  ELECTRON_SHELLS,
  getOrbitalAsciiArt,
  getElementIsotopes
} from '../data/orbitalsAndIsotopes.js';
import { store } from '../state/store.js';

/**
 * Контроллер полноэкранного оверлея элемента с реальной базой изотопов
 * и индивидуальной планетарной ASCII-моделью атома Бора
 */
export function initOverlayController(overlayRoot) {
  if (!overlayRoot) return;

  function renderOverlay(z) {
    if (!z || !ELEMENTS_BY_Z.has(z)) {
      overlayRoot.classList.remove('is-open');
      overlayRoot.setAttribute('aria-hidden', 'true');
      overlayRoot.innerHTML = '';
      document.body.style.overflow = '';
      return;
    }

    const el = ELEMENTS_BY_Z.get(z);
    const cleanSymbol = el.symbol.replace(/\*/g, '');
    const shells = ELECTRON_SHELLS[z] || [1];
    const shellCount = shells.length;

    // Выбираем модификатор масштаба для ASCII-орбитали, чтобы многослойные атомы (3..7 колец) помещались идеально
    let scaleClass = 'overlay-orbital-art--normal';
    if (shellCount >= 5) {
      scaleClass = 'overlay-orbital-art--dense';
    } else if (shellCount >= 3) {
      scaleClass = 'overlay-orbital-art--compact';
    }

    const orbitalArt = getOrbitalAsciiArt(el)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const isotopes = getElementIsotopes(el);

    const isotopesHtml = isotopes
      .map(
        (iso) => `
        <div class="isotope-card">
          <span class="isotope-mass-num">${iso.a}</span>
          <div class="isotope-bottom-line">
            <span class="isotope-sym">${cleanSymbol}</span><span class="isotope-exact-mass">${iso.mass}</span>
          </div>
        </div>`
      )
      .join('');

    overlayRoot.innerHTML = `
      <div class="overlay-frame">
        <div class="overlay-toolbar">
          <button type="button" class="overlay-nav-btn" data-nav-z="${z > 1 ? z - 1 : 118}" aria-label="Предыдущий элемент">[ &larr; Z=${z > 1 ? z - 1 : 118} ]</button>
          <button type="button" class="overlay-nav-btn" data-nav-z="${z < 118 ? z + 1 : 1}" aria-label="Следующий элемент">[ Z=${z < 118 ? z + 1 : 1} &rarr; ]</button>
          <button type="button" class="overlay-close-btn" data-close-overlay="true" aria-label="Закрыть оверлей">[ ESC / &times; ]</button>
        </div>

        <div class="overlay-layout">
          <div class="overlay-left-col">
            <div class="overlay-header-row">
              <div class="overlay-badge">
                <div class="overlay-z-num">${el.z}</div>
                <div class="overlay-symbol-line">
                  <span class="overlay-symbol-char">${cleanSymbol}</span>
                  <span class="overlay-symbol-mass">${el.mass}</span>
                </div>
                <div class="overlay-subshell-label" title="Энергетические уровни: ${shells.join(' ) ')}">${el.subshell || '1S'}</div>
              </div>

              <div class="overlay-titles">
                <div class="overlay-title-ru">${el.fullName}</div>
                <div class="overlay-title-lat">${el.latin}</div>
              </div>
            </div>

            <div class="overlay-orbital-wrap">
              <pre class="overlay-orbital-art ${scaleClass}">${orbitalArt}</pre>
              <div class="overlay-shells-caption">// Энергетические оболочки (K..Q): ${shells.join(' ) ')}</div>
            </div>
          </div>

          <div class="overlay-isotopes-col">
            <h2 class="overlay-isotopes-heading">Изотопы</h2>
            <div class="overlay-isotopes-columns">
              ${isotopesHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    overlayRoot.classList.add('is-open');
    overlayRoot.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  overlayRoot.addEventListener('click', (event) => {
    const navBtn = event.target.closest('[data-nav-z]');
    if (navBtn) {
      store.setState({ selectedZ: Number(navBtn.dataset.navZ) });
      return;
    }

    if (event.target === overlayRoot || event.target.closest('[data-close-overlay]')) {
      store.setState({ selectedZ: null });
    }
  });

  window.addEventListener('keydown', (event) => {
    const { selectedZ } = store.getState();
    if (selectedZ === null) return;

    if (event.key === 'Escape') {
      store.setState({ selectedZ: null });
    } else if (event.key === 'ArrowLeft') {
      store.setState({ selectedZ: selectedZ > 1 ? selectedZ - 1 : 118 });
    } else if (event.key === 'ArrowRight') {
      store.setState({ selectedZ: selectedZ < 118 ? selectedZ + 1 : 1 });
    }
  });

  store.subscribe((state, prevState) => {
    if (state.selectedZ !== prevState.selectedZ) {
      renderOverlay(state.selectedZ);
    }
  });
}