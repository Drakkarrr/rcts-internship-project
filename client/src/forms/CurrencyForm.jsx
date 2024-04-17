import React from 'react';
import { Switch, Form, Input } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function CurrencyForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label={translate('Manager Last Name')}
        name="managerSurname"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your First name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Middle Name"
        name="middlename"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Decimal Separator"
        name="decimal_separator"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Thousand Separator"
        name="thousand_separator"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Is Default Currency"
        name="isDefault"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
        valuePropName="checked"
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
    </>
  );
}
