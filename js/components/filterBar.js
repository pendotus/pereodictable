import { store } from '../state/store.js';

/**
 * Инициализирует 3 кнопки фильтрации ("Неметаллы", "Металлы", "Полуметаллы").
 * Повторный клик по активной кнопке снимает фильтр и возвращает таблицу в исходное состояние.
 */
export function initFilterBar(navContainer) {
  if (!navContainer) return;

  const buttons = Array.from(navContainer.querySelectorAll('.filter-btn[data-filter]'));

  navContainer.addEventListener('click', (event) => {
    const btn = event.target.closest('.filter-btn[data-filter]');
    if (!btn) return;

    const filterValue = btn.dataset.filter;
    const { activeFilter } = store.getState();

    const nextFilter = activeFilter === filterValue ? 'all' : filterValue;
    store.setState({ activeFilter: nextFilter });
  });

  store.subscribe((state, prevState) => {
    if (state.activeFilter === prevState.activeFilter) return;

    buttons.forEach((btn) => {
      const isMatch = btn.dataset.filter === state.activeFilter;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
    });
  });
}