import color from '@/utils/color';
import create from '@ant-design/icons/lib/components/IconFont';

export const fields = {
  name: {
    type: 'stringWithColor',
    required: true,
  },
  description: {
    type: 'textarea',
    required: true,
  },
  // color: {
  //   type: 'color',
  //   options: [...color],
  //   required: true,
  // },
  enabled: {
    type: 'boolean',
    required: true,
  },
  created_on: {
    type: 'date',
    // disableForTable: true,
    disableForForm: true,
  },
};
