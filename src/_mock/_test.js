import _mock from './_mock';

// ----------------------------------------------------------------------
// expenseCategorie : (index) => expenseCategorie[index],
// expenseCategorieValues : (index) => expenseCategorieValues[index]

export const _test = {
  enablingTitles: [...Array(3)].map((_, index) => ({
    title: _mock.enablingTitles.name(index),
    totalAmount: _mock.enablingTitles.totalAmount(index),
    totalSurface: _mock.enablingTitles.totalSurface(index),
    expenseCategorie: [...Array(6)].map((_, i) => ({
      label: _mock.enablingTitles.expenseCategorie(i),
      value: _mock.enablingTitles.expenseCategorieValues(i + index * 6),
    })),
    pieChartTitle: _mock.enablingTitles.pieChartTitles(index),
    departments: [...Array(5)].map((_, i) => ({
      id: _mock.id(i),
      department: _mock.enablingTitles.departments.department(i),
      amount: _mock.enablingTitles.departments.amount(i),
      surface: _mock.enablingTitles.departments.surface(i),
    })),
  })),
  ecommerceAnalyst: {
    timberProducts: [
      { label: 'MADERA ASERRADA', value: 316.08446 },
      { label: 'MADERA ROLLIZA', value: 292.16157 },
      { label: 'PAQUETERIA', value: 37.32124 },
      { label: 'TABLILLAS', value: 10.36027 },
    ],
    productsOtherThanWood: [
      { label: 'CASTANA EN CAS...', value: 1305232.06 },
      { label: 'CARRIZO', value: 1288556.0 },
      { label: 'CASTANA PELADA', value: 1352000.16 },
      { label: 'BARBASCO', value: 1205190.0 },
      { label: 'TOLA', value: 1057000.0 },
      { label: 'ALGARROBA EN VAL...', value: 238371.88 },
      { label: 'UNA DE GATO', value: 151514.31 },
      { label: 'MUSGO', value: 149368.0 },
      { label: 'CUNUJA', value: 142740.0 },
      { label: 'PRODUCTOS DE US...', value: 137907.4 },
      { label: 'CORTEZA...', value: 55998.41 },
      { label: 'SEMILLA...', value: 34102.0 },
      { label: 'LATEX...', value: 33026.25 },
    ],
  },
  wildlife: {
    sportHuntingLicenses: [
      { label: 'ATFFS LIMA', value: 1269 },
      { label: 'ATFFS AREQUIPA', value: 303 },
      { label: 'ATFFS CUSCO', value: 237 },
      { label: 'ATFFS LAMBAYEQUE', value: 210 },
      { label: 'GORE LA LIBERTAD', value: 172 },
      { label: 'ATFFS ICA', value: 126 },
      { label: 'ATFFS PIURA', value: 125 },
      { label: 'ATFFS CAJAMARCA', value: 70 },
      { label: 'ATFFS ANCASH', value: 63 },
      { label: 'ATFFS APURIMAC', value: 57 },
      { label: 'GORE MADRE DE...', value: 53 },
      { label: 'ATFFS SIERRA CEN...', value: 40 },
      { label: 'ATFFS PUNO', value: 33 },
      { label: 'ATFFS MOQUEGUA..', value: 24 },
      { label: 'GORE HUANUCO', value: 10 },
      { label: 'GORE TUMBES', value: 10 },
      { label: 'GORE AMAZONAS', value: 7 },
    ],
    managementAndBreedingCenters: [
      { title: 'Centro de Manejo / Cria', value: 134 },
      { title: 'Centro de Conservacion', value: 4 },
      { title: 'Centro de Custodia Temporal', value: 7 },
      { title: 'Centro de Rescate', value: 12 },
      { title: 'Zoocriadero', value: 53 },
      { title: 'Zoologico', value: 57 },
      { title: 'Zoocriadero-Zoologico-Centro de Rescate', value: 1 },
    ],
  },
  wildSouthAmericanCamelids: {
    chakkus: {
      percent: 2.6,
      total: 765,
      data: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
    },
    managementHolders: {
      percent: -0.1,
      total: 18765,
      data: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
    },
    fiber: {
      percent: 0.6,
      total: 4876,
      data: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
    },
    estimatedPopulation: {
      percent: 2.6,
      total: 765,
      data: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
    },
    area: {
      percent: -0.1,
      total: 18765,
      data: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
    },
    handlingStatements: {
      percent: 0.6,
      total: 4876,
      data: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
    },
  },
  nationalRegistries: {
    forestPlantations: {
      title: 'Total 2020',
      percent: 8.2,
      total: 9999,
      data: [111, 136, 76, 108, 74, 54, 57, 84],
    },
    installAreaOfForestPlantations: {
      chartLabels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      chartData: [
        {
          year: 'Year',
          data: [{ name: 'Income', data: [38000, 35000, 24000, 22000, 21000, 11000, 9900, 9500, 8222, 7111, 6333] }],
        },
      ],
    },
    forestAndWildlifeRegents: {
      title: 'Regentes forestales y de fauna silvestre (2022)',
      data: [
        { title: 'Regentes con licencias vigentes', value: 260 },
        { title: 'Regentes con licencias suspendidas a solicitud de parte', value: 1 },
        { title: 'Regentes con licencias inhabilitada', value: 7 },
      ],
    },
    countOfFilesBySanctioningBody: {
      title: 'Recuento de Expedientes por ??rgano Sancionador',
      chartData: [
        { label: 'SERFOR', value: 2012 },
        { label: 'OSINFOR', value: 1446 },
        { label: 'ARFFS', value: 744 },
        { label: 'SERNANP-WS', value: 215 },
        { label: 'INRENA', value: 1 },
      ],
    },
  },
  comercioExterior: {
    exportsAndImports: {
      title:"EXPORTACIONES E IMPORTACIONES",
      chartLabels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      chartData: [
        {
          data: [
            {
              name: 'EXPORTACIONES (VALOR FOB)',
              data: [10000, 14051, 12535, 17851, 24549, 45862, 12369, 15691, 78148, 78148, 78148],
            },
            {
              name: 'IMPORTACIONES (VALOR CIF)',
              data: [1587, 25851, 54535, 25851, 16549, 55862, 22369, 33691, 54148, 45148, 74148],
            },
          ],
        },
      ],
    },
    topTariffItemsChart: {
      tableHead: [
        { id: 'name', label: 'Partida', align: 'left' },
        { id: 'value', label: 'Valor FOB($)', align: 'right' },
      ],
      tableData: [
        { name: '4409 - Madera perfilada', value: 36687.49606 },
        { name: '4407 - Madera aserrada', value: 25488.19918 },
        { name: '4403 - Madera en bruto', value: 2054.80896 },
        { name: '9403 - Los demas muebles y sus partes', value: 1790.56959 },
        { name: '4412 - Madera contrachapada', value: 1342.68073 },
        { name: '4418 - Obras y piezas de carpinteria', value: 1160.71083 },
        { name: '4408 - Hojas para chapado', value: 837.09394 },
        { name: '4420 - Marqueteria y taracea', value: 696.03126 },
        { name: '9401 - Asientos', value: 505.36497 },
        { name: '4419 - Articulos de mesa o de concina', value: 144.46724 },
      ]
    }, 
    topExportedWoodsChart: {
      tableHead: [
        { id: 'name', label: 'Pa??s', align: 'left' },
        { id: 'value', label: 'Valor FOB($)', align: 'right' },
      ],
      tableData: [
        { name: 'ALEMANIA', value: 1786.85996 },
        { name: 'BELGICA', value: 5305.15876 },
        { name: 'CHINA', value: 147337.47436 },
        { name: 'DINAMARCA', value: 3845.86084 },
        { name: 'ECUADOR', value: 1251.60452 },
        { name: 'ESTADOS UNIDOS', value: 4946.00659 },
        { name: 'FRANCIA', value: 12974.02204 },
        { name: 'MEXICO', value: 4793.21227 },
        { name: 'REPUBLICA DOMINICANA', value: 9399.49521 },
        { name: 'VETNAM', value: 6307.51809 },
      ],
    },
    comercioExteriorLastTable: {
      tableHead: [
        { id: 'name', label: 'Descripcion De Partida', align: 'left' },
        { id: 'value', label: 'Valor FOB($)', align: 'right' },
      ],
      tableData: [
        { name: 'Papel y carton; manufacturas de pasta de celulosa, de papel o carton', value: 8983995200 },
        {
          name: 'madera incluidas tablillas y frisos para parques, perfilada longitudinalmente',
          value: 6686591365,
        },
        { name: 'Madera aserrada', value: 3074416980 },
        { name: 'Madera manufacturada', value: 739282203 },
        { name: 'Muelbles de madera', value: 388367813 },
        { name: 'Madera contrachapada (Triplay) chapada y madera estratificada similar', value: 293304122 },
        { name: 'Otros', value: 400181483 },
      ],
    }
  },
};
