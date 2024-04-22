import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Produk() {
  const translate = useLanguage();
  const entity = 'produk';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };

  const deleteModalLabels = [' ', 'name'];

  const Labels = {
    PANEL_TITLE: 'Produk',
    DATATABLE_TITLE: 'Produk List',
    ADD_NEW_ENTITY: 'Add new Produk',
    ENTITY_NAME: 'Produk',
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
