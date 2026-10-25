import { store } from './state/store.js';
import { initLineNumbers } from './components/lineNumbers.js';
import { initFilterBar } from './components/filterBar.js';
import { initPeriodicTable } from './components/tableRenderer.js';
import { initOverlayController } from './components/overlayController.js';

document.addEventListener('DOMContentLoaded', () => {
  const gutterContainer = document.getElementById('ide-gutter');
  const filterContainer = document.getElementById('filter-bar');
  const tableContainer = document.getElementById('periodic-table-root');
  const overlayContainer = document.getElementById('element-overlay');

  // 1. Рендерим нумерацию строк IDE (1..48)
  initLineNumbers(gutterContainer);

  // 2. Подключаем 3 кнопки категорий (Неметаллы, Металлы, Полуметаллы)
  initFilterBar(filterContainer);

  // 3. Рендерим выровненную ASCII-таблицу Менделеева
  initPeriodicTable(tableContainer, (selectedZ) => {
    store.setState({ selectedZ });
  });

  // 4. Подключаем полноэкранный оверлей с ASCII-орбиталями и изотопами
  initOverlayController(overlayContainer);
});