/**
 * Схема короткопериодной таблицы Менделеева (11 рядов, 8 групп + триады VIII группы)
 */
export const MAIN_TABLE_ROWS = [
  {
    rowNum: '1',
    periodInline: '1',
    periodOnDividerAfter: null,
    cells: [1, null, null, null, null, null, 'H_REF', 2]
  },
  {
    rowNum: '2',
    periodInline: '2',
    periodOnDividerAfter: null,
    cells: [3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    rowNum: '3',
    periodInline: '3',
    periodOnDividerAfter: null,
    cells: [11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    rowNum: '4',
    periodInline: ' ',
    periodOnDividerAfter: '4',
    cells: [19, 20, 21, 22, 23, 24, 25, [26, 27, 28]]
  },
  {
    rowNum: '5',
    periodInline: ' ',
    periodOnDividerAfter: null,
    cells: [29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    rowNum: '6',
    periodInline: ' ',
    periodOnDividerAfter: '5',
    cells: [37, 38, 39, 40, 41, 42, 43, [44, 45, 46]]
  },
  {
    rowNum: '7',
    periodInline: ' ',
    periodOnDividerAfter: null,
    cells: [47, 48, 49, 50, 51, 52, 53, 54]
  },
  {
    rowNum: '8',
    periodInline: ' ',
    periodOnDividerAfter: '6',
    cells: [55, 56, 57, 72, 73, 74, 75, [76, 77, 78]]
  },
  {
    rowNum: '9',
    periodInline: ' ',
    periodOnDividerAfter: null,
    cells: [79, 80, 81, 82, 83, 84, 85, 86]
  },
  {
    rowNum: '10',
    periodInline: ' ',
    periodOnDividerAfter: '7',
    cells: [87, 88, 89, 104, 105, 106, 107, [108, 109, 110]]
  },
  {
    rowNum: '11',
    periodInline: ' ',
    periodOnDividerAfter: null,
    cells: [111, 112, 113, 114, 115, 116, 117, 118]
  }
];

export const LANTHANIDES_ROW = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
export const ACTINIDES_ROW = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];