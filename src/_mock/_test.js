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
  timberProducts: {},
  wildlife: {},
  wildSouthAmericanCamelids: {},
  nationalRegistries: {},
  foreignTrade: {},
};
