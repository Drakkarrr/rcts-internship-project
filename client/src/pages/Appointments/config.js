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
    type: 'search',
    renderAsTag: true,
    label: 'events',
    entity: 'events',
    redirectLabel: 'Add New Event',
    withRedirect: true,
    urlToRedirect: '/events',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['events', 'name'],
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
