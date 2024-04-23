import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

export default function Requestor() {
  const entity = 'requestor';
  const searchConfig = {
    displayLabels: ['firstname', 'lastname'],
    searchFields: ['firstname', 'lastname'],
  };

  const deleteModalLabels = [' ', 'firstname', 'lastname'];

  const Labels = {
    PANEL_TITLE: 'Requestor Module',
    DATATABLE_TITLE: 'Requestor Management',
    ADD_NEW_ENTITY: 'Add New Requestor',
    ENTITY_NAME: 'Requestor',
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
