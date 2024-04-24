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
  events: {
    required: true,
    type: 'search',
    label: 'events',
    entity: 'events',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['events', 'name'],
    feedback: 'events',
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
