import { ELEMENTS_BY_Z } from '../data/elements.js';
import { store } from '../state/store.js';

/**
 * Модуль оверлея элемента (базовый рендер по макету Оверлей.png для тестирования кликов в Спринте 1)
 */
export function initOverlayController(overlayRoot) {
  if (!overlayRoot) return;

  function renderOverlay(z) {
    if (!z || !ELEMENTS_BY_Z.has(z)) {
      overlayRoot.classList.remove('is-open');
      overlayRoot.setAttribute('aria-hidden', 'true');
      overlayRoot.innerHTML = '';
      return;
    }

    const el = ELEMENTS_BY_Z.get(z);

    overlayRoot.innerHTML = `
      <div class="overlay-card">
        <button type="button" class="overlay-close-btn" data-close-overlay="true" aria-label="Закрыть оверлей">[ ESC / X ]</button>
        <div class="overlay-preview-grid">
          <div class="overlay-left-col">
            <div class="overlay-top-meta">
              <div class="overlay-symbol-block">
                <div class="overlay-z">${el.z}</div>
                <div class="overlay-sym-row">
                  <span class="overlay-sym">${el.symbol.replace(/\*/g, '')}</span>
                  <span class="overlay-mass">${el.mass}</span>
                </div>
                <div class="overlay-subshell">${el.subshell || '1S'}</div>
              </div>
              <div class="overlay-names">
                <div>${el.fullName}</div>
                <div>${el.latin}</div>
              </div>
            </div>
            <pre class="overlay-orbital-ascii">            ( - )&lt;-- e⁻ (${(el.subshell || '1s').toLowerCase()}¹)
         . - '   ' - .
      . '             ' .
    /                     \\
   |                       |
  ;                         ;
  |         ( + )&lt;-- p⁺ (Z = ${el.z})|
  ;                         ;
   |                       |
    \\                     /
      . '             ' .
         ' - . _ . - '</pre>
          </div>
          <div class="overlay-right-col">
            <div class="overlay-isotopes-title">Изотопы</div>
            <div class="overlay-isotopes-grid">
              <div class="isotope-item">
                <span class="isotope-sup">${el.z}</span>
                <span class="isotope-main">${el.symbol.replace(/\*/g, '')}</span><span class="isotope-mass">${el.mass}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    overlayRoot.classList.add('is-open');
    overlayRoot.setAttribute('aria-hidden', 'false');
  }

  overlayRoot.addEventListener('click', (event) => {
    if (event.target === overlayRoot || event.target.closest('[data-close-overlay]')) {
      store.setState({ selectedZ: null });
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && store.getState().selectedZ !== null) {
      store.setState({ selectedZ: null });
    }
  });

  store.subscribe((state, prevState) => {
    if (state.selectedZ !== prevState.selectedZ) {
      renderOverlay(state.selectedZ);
    }
  });
}