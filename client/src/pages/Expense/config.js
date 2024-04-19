export const fields = {
  requestor: {
    type: 'selectCurrency',
    required: true,
  },
  paymentMode: {
    type: 'async',
    label: 'Payment Mode',
    displayLabels: ['paymentMode', 'name'],
    dataIndex: ['paymentMode', 'name'],
    entity: 'paymentmode',
  },
  name: {
    type: 'string',
    required: true,
  },
  expenseCategory: {
    type: 'async',
    label: 'Expense Category',
    displayLabels: ['expenseCategory', 'name'],
    dataIndex: ['expenseCategory', 'name'],
    entity: 'expensecategory',
    required: true,
  },
  // currency: {
  //   type: 'selectCurrency',
  // },
  total: {
    type: 'currency',
    required: true,
  },
  description: {
    type: 'textarea',
  },
  ref: {
    type: 'string',
  },
};
