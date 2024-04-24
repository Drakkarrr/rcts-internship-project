export const fields = {
  requestor: {
    required: true,
    type: 'search',
    label: 'requestor',
    entity: 'requestor',
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname',
    dataIndex: ['requestor', 'firstname'],
    feedback: 'requestor',
  },
  name: {
    type: 'string',
    required: true,
  },
  created: {
    type: 'date',
    required: true,
    disableForForm: true,
  },
};
