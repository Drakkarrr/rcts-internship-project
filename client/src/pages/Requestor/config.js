import color from '@/utils/color';

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
};
