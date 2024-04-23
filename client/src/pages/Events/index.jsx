import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

export default function Events() {
  const entity = 'events';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };

  const deleteModalLabels = [' ', 'name'];

  const Labels = {
    PANEL_TITLE: 'Events Management',
    DATATABLE_TITLE: 'Events Module',
    ADD_NEW_ENTITY: 'Add New Event',
    ENTITY_NAME: 'Events',
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
