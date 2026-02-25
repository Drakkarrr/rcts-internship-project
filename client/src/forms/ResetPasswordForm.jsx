import React, { useMemo } from 'react';
import { Form, Input, Progress, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

const { Text } = Typography;

const getPasswordStrength = (password = '') => {
  let score = 0;
  if (password.length >= 8) score += 25;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 25;
  if (/\d/.test(password)) score += 25;
  if (/[^A-Za-z0-9]/.test(password)) score += 25;
  return score;
};

export default function ResetPasswordForm() {
  const translate = useLanguage();
  const passwordValue = Form.useWatch('password');

  const strength = useMemo(() => getPasswordStrength(passwordValue), [passwordValue]);

  return (
    <>
      <Form.Item
        label={translate('password')}
        name="password"
        rules={[
          {
            required: true,
          },
          {
            min: 8,
            message: 'Password must be at least 8 characters.',
          },
        ]}
      >
        <Input.Password
          autoComplete="new-password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={translate('password')}
          size="large"
        />
      </Form.Item>

      <div className="password-strength-meter">
        <Progress
          percent={strength}
          size="small"
          showInfo={false}
          status={strength < 50 ? 'exception' : strength < 100 ? 'active' : 'success'}
        />
        <Text type="secondary">Use 8+ characters with uppercase, number, and symbol.</Text>
      </div>

      <Form.Item
        label={translate('confirm password')}
        name="confirm_password"
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password
          autoComplete="new-password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={translate('confirm password')}
          size="large"
        />
      </Form.Item>
    </>
  );
}
