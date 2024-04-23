import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function ProdukDog() {
  const translate = useLanguage();
  const entity = 'produkDog';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };

  const deleteModalLabels = [' ', 'name'];

  const Labels = {
    PANEL_TITLE: 'ProdukDog',
    DATATABLE_TITLE: 'ProdukDog_list',
    ADD_NEW_ENTITY: 'add_new_ProdukDog',
    ENTITY_NAME: 'ProdukDog',
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
