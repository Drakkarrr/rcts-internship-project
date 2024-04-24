import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

export default function Appointments() {
  const entity = 'appointments';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: ['name'],
  };

  const deleteModalLabels = [' ', 'name'];

  const Labels = {
    PANEL_TITLE: 'Appointments Management',
    DATATABLE_TITLE: 'Appointments Module',
    ADD_NEW_ENTITY: 'Add New Appointments',
    ENTITY_NAME: 'Appointments',
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
