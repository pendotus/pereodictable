/**
 * Полная база всех 118 элементов Д.И. Менделеева
 */
export const ELEMENTS_LIST = [
  // ПЕРИОД 1 (Ряд 1)
  { z: 1, symbol: 'H', mass: '1,008', name: 'Водород', fullName: 'водород', latin: 'hydrogenium', category: 'nonmetal', subshell: '1S' },
  { z: 2, symbol: 'He', mass: '4,00', name: 'Гелий', fullName: 'гелий', latin: 'helium', category: 'nonmetal', subshell: '1S' },

  // ПЕРИОД 2 (Ряд 2)
  { z: 3, symbol: 'Li', mass: '6,94', name: 'Литий', fullName: 'литий', latin: 'lithium', category: 'metal', subshell: '2S' },
  { z: 4, symbol: 'Be', mass: '9,01', name: 'Бериллий', fullName: 'бериллий', latin: 'beryllium', category: 'metal', subshell: '2S' },
  { z: 5, symbol: 'B', mass: '10,81', name: 'Бор', fullName: 'бор', latin: 'borum', category: 'metalloid', subshell: '2P' },
  { z: 6, symbol: 'C', mass: '12,01', name: 'Углерод', fullName: 'углерод', latin: 'carboneum', category: 'nonmetal', subshell: '2P' },
  { z: 7, symbol: 'N', mass: '14,00', name: 'Азот', fullName: 'азот', latin: 'nitrogenium', category: 'nonmetal', subshell: '2P' },
  { z: 8, symbol: 'O', mass: '16,00', name: 'Кислород', fullName: 'кислород', latin: 'oxygenium', category: 'nonmetal', subshell: '2P' },
  { z: 9, symbol: 'F', mass: '19,00', name: 'Фтор', fullName: 'фтор', latin: 'fluorum', category: 'nonmetal', subshell: '2P' },
  { z: 10, symbol: 'Ne', mass: '20,18', name: 'Неон', fullName: 'неон', latin: 'neon', category: 'nonmetal', subshell: '2P' },

  // ПЕРИОД 3 (Ряд 3)
  { z: 11, symbol: 'Na', mass: '22,99', name: 'Натрий', fullName: 'натрий', latin: 'natrium', category: 'metal', subshell: '3S' },
  { z: 12, symbol: 'Mg', mass: '24,31', name: 'Магний', fullName: 'магний', latin: 'magnesium', category: 'metal', subshell: '3S' },
  { z: 13, symbol: 'Al', mass: '26,98', name: 'Алюминий', fullName: 'алюминий', latin: 'aluminium', category: 'metal', subshell: '3P' },
  { z: 14, symbol: 'Si', mass: '28,09', name: 'Кремний', fullName: 'кремний', latin: 'silicium', category: 'metalloid', subshell: '3P' },
  { z: 15, symbol: 'P', mass: '30,97', name: 'Фосфор', fullName: 'фосфор', latin: 'phosphorus', category: 'nonmetal', subshell: '3P' },
  { z: 16, symbol: 'S', mass: '32,06', name: 'Сера', fullName: 'сера', latin: 'sulfur', category: 'nonmetal', subshell: '3P' },
  { z: 17, symbol: 'Cl', mass: '35,45', name: 'Хлор', fullName: 'хлор', latin: 'chlorum', category: 'nonmetal', subshell: '3P' },
  { z: 18, symbol: 'Ar', mass: '39,95', name: 'Аргон', fullName: 'аргон', latin: 'argon', category: 'nonmetal', subshell: '3P' },

  // ПЕРИОД 4 (Ряд 4)
  { z: 19, symbol: 'K', mass: '39,10', name: 'Калий', fullName: 'калий', latin: 'kalium', category: 'metal', subshell: '4S' },
  { z: 20, symbol: 'Ca', mass: '40,08', name: 'Кальций', fullName: 'кальций', latin: 'calcium', category: 'metal', subshell: '4S' },
  { z: 21, symbol: 'Sc', mass: '44,96', name: 'Скандий', fullName: 'скандий', latin: 'scandium', category: 'metal', subshell: '3D' },
  { z: 22, symbol: 'Ti', mass: '47,90', name: 'Титан', fullName: 'титан', latin: 'titanium', category: 'metal', subshell: '3D' },
  { z: 23, symbol: 'V', mass: '50,94', name: 'Ванадий', fullName: 'ванадий', latin: 'vanadium', category: 'metal', subshell: '3D' },
  { z: 24, symbol: 'Cr', mass: '52,00', name: 'Хром', fullName: 'хром', latin: 'chromium', category: 'metal', subshell: '3D' },
  { z: 25, symbol: 'Mn', mass: '54,94', name: 'Марганец', fullName: 'марганец', latin: 'manganum', category: 'metal', subshell: '3D' },
  { z: 26, symbol: 'Fe', mass: '55,8', name: 'Железо', fullName: 'железо', latin: 'ferrum', category: 'metal', subshell: '3D' },
  { z: 27, symbol: 'Co', mass: '58,9', name: 'Кобальт', fullName: 'кобальт', latin: 'cobaltum', category: 'metal', subshell: '3D' },
  { z: 28, symbol: 'Ni', mass: '58,6', name: 'Никель', fullName: 'никель', latin: 'niccolum', category: 'metal', subshell: '3D' },

  // ПЕРИОД 4 (Ряд 5)
  { z: 29, symbol: 'Cu', mass: '63,55', name: 'Медь', fullName: 'медь', latin: 'cuprum', category: 'metal', subshell: '3D' },
  { z: 30, symbol: 'Zn', mass: '65,39', name: 'Цинк', fullName: 'цинк', latin: 'zincum', category: 'metal', subshell: '3D' },
  { z: 31, symbol: 'Ga', mass: '69,72', name: 'Галлий', fullName: 'галлий', latin: 'gallium', category: 'metal', subshell: '4P' },
  { z: 32, symbol: 'Ge', mass: '72,59', name: 'Германий', fullName: 'германий', latin: 'germanium', category: 'metalloid', subshell: '4P' },
  { z: 33, symbol: 'As', mass: '74,92', name: 'Мышьяк', fullName: 'мышьяк', latin: 'arsenicum', category: 'metalloid', subshell: '4P' },
  { z: 34, symbol: 'Se', mass: '78,96', name: 'Селен', fullName: 'селен', latin: 'selenium', category: 'nonmetal', figmaSkipHighlight: true, subshell: '4P' },
  { z: 35, symbol: 'Br', mass: '79,90', name: 'Бром', fullName: 'бром', latin: 'bromum', category: 'nonmetal', subshell: '4P' },
  { z: 36, symbol: 'Kr', mass: '83,80', name: 'Криптон', fullName: 'криптон', latin: 'krypton', category: 'nonmetal', subshell: '4P' },

  // ПЕРИОД 5 (Ряд 6)
  { z: 37, symbol: 'Rb', mass: '85,47', name: 'Рубидий', fullName: 'рубидий', latin: 'rubidium', category: 'metal', subshell: '5S' },
  { z: 38, symbol: 'Sr', mass: '87,62', name: 'Стронций', fullName: 'стронций', latin: 'strontium', category: 'metal', subshell: '5S' },
  { z: 39, symbol: 'Y', mass: '88,91', name: 'Иттрий', fullName: 'иттрий', latin: 'yttrium', category: 'metal', subshell: '4D' },
  { z: 40, symbol: 'Zr', mass: '91,22', name: 'Цирконий', fullName: 'цирконий', latin: 'zirconium', category: 'metal', subshell: '4D' },
  { z: 41, symbol: 'Nb', mass: '92,91', name: 'Ниобий', fullName: 'ниобий', latin: 'niobium', category: 'metal', subshell: '4D' },
  { z: 42, symbol: 'Mo', mass: '95,94', name: 'Молибден', fullName: 'молибден', latin: 'molybdaenum', category: 'metal', subshell: '4D' },
  { z: 43, symbol: 'Tc', mass: '98,91', name: 'Технеций', fullName: 'технеций', latin: 'technetium', category: 'metal', subshell: '4D' },
  { z: 44, symbol: 'Ru', mass: '101', name: 'Рутений', fullName: 'рутений', latin: 'ruthenium', category: 'metal', subshell: '4D' },
  { z: 45, symbol: 'Rh', mass: '102', name: 'Родий', fullName: 'родий', latin: 'rhodium', category: 'metal', subshell: '4D' },
  { z: 46, symbol: 'Pd', mass: '106', name: 'Паллад.', fullName: 'палладий', latin: 'palladium', category: 'metal', subshell: '4D' },

  // ПЕРИОД 5 (Ряд 7)
  { z: 47, symbol: 'Ag', mass: '107,87', name: 'Серебро', fullName: 'серебро', latin: 'argentum', category: 'metal', subshell: '4D' },
  { z: 48, symbol: 'Cd', mass: '112,41', name: 'Кадмий', fullName: 'кадмий', latin: 'cadmium', category: 'metal', subshell: '4D' },
  { z: 49, symbol: 'In', mass: '114,82', name: 'Индий', fullName: 'индий', latin: 'indium', category: 'metal', subshell: '5P' },
  { z: 50, symbol: 'Sn', mass: '118,69', name: 'Олово', fullName: 'олово', latin: 'stannum', category: 'metal', subshell: '5P' },
  { z: 51, symbol: 'Sb', mass: '121,75', name: 'Сурьма', fullName: 'сурьма', latin: 'stibium', category: 'metalloid', subshell: '5P' },
  { z: 52, symbol: 'Te', mass: '127,60', name: 'Теллур', fullName: 'теллур', latin: 'tellurium', category: 'metalloid', subshell: '5P' },
  { z: 53, symbol: 'I', mass: '126,90', name: 'Иод', fullName: 'иод', latin: 'iodium', category: 'nonmetal', subshell: '5P' },
  { z: 54, symbol: 'Xe', mass: '131,29', name: 'Ксенон', fullName: 'ксенон', latin: 'xenon', category: 'nonmetal', subshell: '5P' },

  // ПЕРИОД 6 (Ряд 8)
  { z: 55, symbol: 'Cs', mass: '132,91', name: 'Цезий', fullName: 'цезий', latin: 'caesium', category: 'metal', subshell: '6S' },
  { z: 56, symbol: 'Ba', mass: '137,33', name: 'Барий', fullName: 'барий', latin: 'barium', category: 'metal', subshell: '6S' },
  { z: 57, symbol: 'La*', mass: '138,91', name: 'Лантан', fullName: 'лантан', latin: 'lanthanum', category: 'metal', subshell: '5D' },
  { z: 72, symbol: 'Hf', mass: '178,49', name: 'Гафний', fullName: 'гафний', latin: 'hafnium', category: 'metal', subshell: '5D' },
  { z: 73, symbol: 'Ta', mass: '180,95', name: 'Тантал', fullName: 'тантал', latin: 'tantalum', category: 'metal', subshell: '5D' },
  { z: 74, symbol: 'W', mass: '183,85', name: 'Вольфрам', fullName: 'вольфрам', latin: 'wolframium', category: 'metal', subshell: '5D' },
  { z: 75, symbol: 'Re', mass: '186,21', name: 'Рений', fullName: 'рений', latin: 'rhenium', category: 'metal', subshell: '5D' },
  { z: 76, symbol: 'Os', mass: '190', name: 'Осмий', fullName: 'осмий', latin: 'osmium', category: 'metal', subshell: '5D' },
  { z: 77, symbol: 'Ir', mass: '192', name: 'Иридий', fullName: 'иридий', latin: 'iridium', category: 'metal', subshell: '5D' },
  { z: 78, symbol: 'Pt', mass: '195', name: 'Платина', fullName: 'платина', latin: 'platinum', category: 'metal', subshell: '5D' },

  // ПЕРИОД 6 (Ряд 9)
  { z: 79, symbol: 'Au', mass: '196,97', name: 'Золото', fullName: 'золото', latin: 'aurum', category: 'metal', subshell: '5D' },
  { z: 80, symbol: 'Hg', mass: '200,59', name: 'Ртуть', fullName: 'ртуть', latin: 'hydrargyrum', category: 'metal', subshell: '5D' },
  { z: 81, symbol: 'Tl', mass: '204,38', name: 'Таллий', fullName: 'таллий', latin: 'thallium', category: 'metal', subshell: '6P' },
  { z: 82, symbol: 'Pb', mass: '207,2', name: 'Свинец', fullName: 'свинец', latin: 'plumbum', category: 'metal', subshell: '6P' },
  { z: 83, symbol: 'Bi', mass: '208,98', name: 'Висмут', fullName: 'висмут', latin: 'bismuthum', category: 'metal', subshell: '6P' },
  { z: 84, symbol: 'Po', mass: '[209]', name: 'Полоний', fullName: 'полоний', latin: 'polonium', category: 'metalloid', subshell: '6P' },
  { z: 85, symbol: 'At', mass: '[210]', name: 'Астат', fullName: 'астат', latin: 'astatum', category: 'nonmetal', subshell: '6P' },
  { z: 86, symbol: 'Rn', mass: '[222]', name: 'Радон', fullName: 'радон', latin: 'radon', category: 'nonmetal', subshell: '6P' },

  // ПЕРИОД 7 (Ряд 10)
  { z: 87, symbol: 'Fr', mass: '[223]', name: 'Франций', fullName: 'франций', latin: 'francium', category: 'metal', subshell: '7S' },
  { z: 88, symbol: 'Ra', mass: '226', name: 'Радий', fullName: 'радий', latin: 'radium', category: 'metal', subshell: '7S' },
  { z: 89, symbol: 'Ac**', mass: '[227]', name: 'Актиний', fullName: 'актиний', latin: 'actinium', category: 'metal', subshell: '6D' },
  { z: 104, symbol: 'Rf', mass: '[261]', name: 'Резерфордий', fullName: 'резерфордий', latin: 'rutherfordium', category: 'metal', subshell: '6D' },
  { z: 105, symbol: 'Db', mass: '[262]', name: 'Дубний', fullName: 'дубний', latin: 'dubnium', category: 'metal', subshell: '6D' },
  { z: 106, symbol: 'Sg', mass: '[266]', name: 'Сиборгий', fullName: 'сиборгий', latin: 'seaborgium', category: 'metal', subshell: '6D' },
  { z: 107, symbol: 'Bh', mass: '[264]', name: 'Борий', fullName: 'борий', latin: 'bohrium', category: 'metal', subshell: '6D' },
  { z: 108, symbol: 'Hs', mass: '[269]', name: 'Хассий', fullName: 'хассий', latin: 'hassium', category: 'metal', subshell: '6D' },
  { z: 109, symbol: 'Mt', mass: '[268]', name: 'Мейтнер', fullName: 'мейтнерий', latin: 'meitnerium', category: 'metal', subshell: '6D' },
  { z: 110, symbol: 'Ds', mass: '[271]', name: 'Дармшт.', fullName: 'дармштадтий', latin: 'darmstadtium', category: 'metal', subshell: '6D' },

  // ПЕРИОД 7 (Ряд 11)
  { z: 111, symbol: 'Rg', mass: '[280]', name: 'Рентгений', fullName: 'рентгений', latin: 'roentgenium', category: 'metal', subshell: '6D' },
  { z: 112, symbol: 'Cn', mass: '[285]', name: 'Коперниций', fullName: 'коперниций', latin: 'copernicium', category: 'metal', subshell: '6D' },
  { z: 113, symbol: 'Nh', mass: '[286]', name: 'Нихоний', fullName: 'нихоний', latin: 'nihonium', category: 'metal', subshell: '7P' },
  { z: 114, symbol: 'Fl', mass: '[289]', name: 'Флеровий', fullName: 'флеровий', latin: 'flerovium', category: 'metal', subshell: '7P' },
  { z: 115, symbol: 'Mc', mass: '[289]', name: 'Московий', fullName: 'московий', latin: 'moscovium', category: 'metal', subshell: '7P' },
  { z: 116, symbol: 'Lv', mass: '[293]', name: 'Ливерморий', fullName: 'ливерморий', latin: 'livermorium', category: 'metal', subshell: '7P' },
  { z: 117, symbol: 'Ts', mass: '[294]', name: 'Теннесин', fullName: 'теннесин', latin: 'tennessine', category: 'metal', subshell: '7P' },
  { z: 118, symbol: 'Og', mass: '[294]', name: 'Оганесон', fullName: 'оганесон', latin: 'oganesson', category: 'metal', subshell: '7P' },

  // * ЛАНТАНОИДЫ (58 - 71)
  { z: 58, symbol: 'Ce', mass: '140', name: 'Церий', fullName: 'церий', latin: 'cerium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 59, symbol: 'Pr', mass: '141', name: 'Празеод', fullName: 'празеодим', latin: 'praseodymium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 60, symbol: 'Nd', mass: '144', name: 'Неодим', fullName: 'неодим', latin: 'neodymium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 61, symbol: 'Pm', mass: '[145]', name: 'Прометий', fullName: 'прометий', latin: 'promethium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 62, symbol: 'Sm', mass: '150', name: 'Самарий', fullName: 'самарий', latin: 'samarium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 63, symbol: 'Eu', mass: '152', name: 'Европий', fullName: 'европий', latin: 'europium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 64, symbol: 'Gd', mass: '157', name: 'Гадолин', fullName: 'гадолиний', latin: 'gadolinium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 65, symbol: 'Tb', mass: '159', name: 'Тербий', fullName: 'тербий', latin: 'terbium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 66, symbol: 'Dy', mass: '162,5', name: 'Диспроз', fullName: 'диспрозий', latin: 'dysprosium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 67, symbol: 'Ho', mass: '165', name: 'Гольмий', fullName: 'гольмий', latin: 'holmium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 68, symbol: 'Er', mass: '167', name: 'Эрбий', fullName: 'эрбий', latin: 'erbium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 69, symbol: 'Tm', mass: '169', name: 'Тулий', fullName: 'тулий', latin: 'thulium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 70, symbol: 'Yb', mass: '173', name: 'Иттербий', fullName: 'иттербий', latin: 'ytterbium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },
  { z: 71, symbol: 'Lu', mass: '175', name: 'Лютеций', fullName: 'лютеций', latin: 'lutetium', category: 'metal', figmaSkipHighlight: true, subshell: '4F' },

  // ** АКТИНОИДЫ (90 - 103)
  { z: 90, symbol: 'Th', mass: '232', name: 'Торий', fullName: 'торий', latin: 'thorium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 91, symbol: 'Pa', mass: '231', name: 'Протакт', fullName: 'протактиний', latin: 'protactinium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 92, symbol: 'U', mass: '238', name: 'Уран', fullName: 'уран', latin: 'uranium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 93, symbol: 'Np', mass: '237', name: 'Нептуний', fullName: 'нептуний', latin: 'neptunium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 94, symbol: 'Pu', mass: '[244]', name: 'Плутоний', fullName: 'плутоний', latin: 'plutonium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 95, symbol: 'Am', mass: '[243]', name: 'Америций', fullName: 'америций', latin: 'americium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 96, symbol: 'Cm', mass: '[247]', name: 'Кюрий', fullName: 'кюрий', latin: 'curium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 97, symbol: 'Bk', mass: '[247]', name: 'Берклий', fullName: 'берклий', latin: 'berkelium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 98, symbol: 'Cf', mass: '[251]', name: 'Калифор', fullName: 'калифорний', latin: 'californium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 99, symbol: 'Es', mass: '[252]', name: 'Эйнштйн', fullName: 'эйнштейний', latin: 'einsteinium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 100, symbol: 'Fm', mass: '[257]', name: 'Фермий', fullName: 'фермий', latin: 'fermium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 101, symbol: 'Md', mass: '[258]', name: 'Мендел.', fullName: 'менделевий', latin: 'mendelevium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 102, symbol: 'No', mass: '[259]', name: 'Нобелий', fullName: 'нобелий', latin: 'nobelium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' },
  { z: 103, symbol: 'Lr', mass: '[262]', name: 'Лоуренс', fullName: 'лоуренсий', latin: 'lawrencium', category: 'metal', figmaSkipHighlight: true, subshell: '5F' }
];

export const ELEMENTS_BY_Z = new Map(
  ELEMENTS_LIST.map((el) => [el.z, el])
);