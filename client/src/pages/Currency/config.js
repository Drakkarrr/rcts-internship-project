import color from '@/utils/color';
import { currencyList } from './currencyList';

const currencyOptions = currencyList.map((x) => ({ value: x, label: x }));

export const fields = {
  firstname: {
    type: 'string',
    required: true,
  },
  middlename: {
    type: 'string',
  },
  lastname: {
    type: 'string',
    required: true,
  },
  suffix: {
    type: 'string',
  },
  barangay: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'email',
  },
  phone: {
    type: 'phone',
    required: true,
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

  // color: {
  //   type: 'color',
  //   options: [...color],
  //   required: true,
  //   disableForTable: true,
  // },
  // currency_code: {
  //   type: 'select',
  //   showSearch: true,
  //   required: true,
  //   options: currencyOptions,
  // },
  // currency_symbol: {
  //   type: 'stringWithColor',
  //   required: true,
  //   color: 'gold',
  // },
  // currency_position: {
  //   type: 'selectWithTranslation',
  //   required: true,
  //   renderAsTag: true,
  //   defaultValue: 'before',
  //   options: [
  //     { value: 'before', label: 'before', color: 'magenta' },
  //     { value: 'after', label: 'after', color: 'purple' },
  //   ],
  // },
  // decimal_sep: {
  //   label: 'decimal_separator',
  //   type: 'string',
  //   required: true,
  //   defaultValue: '.',
  // },
  // thousand_sep: {
  //   label: 'thousand_separator',
  //   type: 'string',
  //   required: true,
  //   defaultValue: ' ',
  // },
  // cent_precision: {
  //   type: 'number',
  //   required: true,
  //   defaultValue: 2,
  // },
  // zero_format: {
  //   type: 'boolean',
  //   required: true,
  //   defaultValue: false,
  // },
  // enabled: {
  //   type: 'boolean',
  // },
};
