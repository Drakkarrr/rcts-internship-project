import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function People() {
  const translate = useLanguage();
  const entity = 'people';
  const searchConfig = {
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname,email',
  };

  const deleteModalLabels = [' ', 'firstname', 'lastname'];

  const Labels = {
    PANEL_TITLE: 'Employee Management',
    DATATABLE_TITLE: 'Employee Module',
    ADD_NEW_ENTITY: 'Add New Employee',
    ENTITY_NAME: translate('person'),
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
