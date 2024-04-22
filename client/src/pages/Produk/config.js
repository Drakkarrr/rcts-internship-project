export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  produkDog: {
    type: 'async',
    label: 'ProdukDog',
    displayLabels: ['ProdukDog', 'name'],
    dataIndex: ['produkDog', 'name'],
    entity: 'produkDog',
    required: true,
  },
  company: {
    type: 'async',
    label: 'Company',
    displayLabels: ['Company', 'name'],
    dataIndex: ['company', 'name'],
    entity: 'company',
    required: true,
  },
  // currency: {
  //   type: 'selectCurrency',
  // },

  // description: {
  //   type: 'textarea',
  // },
  // ref: {
  //   type: 'string',
  // },
};
