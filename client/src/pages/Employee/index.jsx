import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Employee() {
  const translate = useLanguage();
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['firstname'],
    searchFields: 'firstname',
  };

  const deleteModalLabels = [' ', 'firstname'];

  const Labels = {
    PANEL_TITLE: 'Employee Management',
    DATATABLE_TITLE: 'Employee Module',
    ADD_NEW_ENTITY: 'Add New Employee',
    ENTITY_NAME: 'Employee',
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
