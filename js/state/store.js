/**
 * Реактивное хранилище состояния приложения
 */
class AppStore {
  constructor() {
    this.state = {
      activeFilter: 'all', // 'all' | 'nonmetal' | 'metal' | 'metalloid'
      selectedZ: null,     // null или Z (1..118) открытого в оверлее элемента
      strictFigmaHighlight: true // Совпадение подсветки один-в-один с макетами Лендинг 1-3
    };
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setState(partial) {
    const prev = { ...this.state };
    this.state = { ...this.state, ...partial };
    this.listeners.forEach((listener) => listener(this.state, prev));
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const store = new AppStore();