import color from '@/utils/color';

export const fields = {
  name: {
    type: 'stringWithColor',
    required: true,
  },
  description: {
    type: 'textarea',
    required: true,
  },
  color: {
    type: 'color',
    options: [...color],
    required: true,
  },
  paymentMode: {
    type: 'async',
    label: 'Payment Mode',
    displayLabels: ['paymentMode', 'name'],
    dataIndex: ['paymentMode', 'name'],
    entity: 'paymentmode',
  },
  company: {
    type: 'search',
    entity: 'company',
    renderAsTag: true,
    redirectLabel: 'Add New Company',
    withRedirect: true,
    urlToRedirect: '/company',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['company', 'name'],
  },
  enabled: {
    type: 'boolean',
    required: true,
  },
};
