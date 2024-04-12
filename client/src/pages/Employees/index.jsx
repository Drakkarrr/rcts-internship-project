import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Employees() {
  const translate = useLanguage();
  const entity = 'employees';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name,phone,eamil',
  };
  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('employees'),
    DATATABLE_TITLE: translate('employees_list'),
    ADD_NEW_ENTITY: translate('add_new_employees'),
    ENTITY_NAME: translate('employees'),
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
