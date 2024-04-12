import useLanguage from '@/locale/useLanguage';
import CrudModule from '@/modules/CrudModule/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
import { useDate } from '@/settings';
export default function Employee() {
  const translate = useLanguage();
  const { dateFormat } = useDate();
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname',
    outputValue: '_id',
  };

  const deleteModalLabels = ['firstname', 'lastname'];

  const dataTableColumns = [
    {
      title: 'First name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      render: (date) => {
        return dayjs(date).format(dateFormat);
      },
    },
    {
      title: 'Position',
      dataIndex: 'position',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const readColumns = [
    {
      title: 'First name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: translate('Birthday'),
      dataIndex: 'birthday',
      isDate: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('employee'),
    DATATABLE_TITLE: translate('employee_list'),
    ADD_NEW_ENTITY: translate('add_new_employee'),
    ENTITY_NAME: translate('employee'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
