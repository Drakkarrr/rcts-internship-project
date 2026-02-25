import React, { useState } from 'react';
import { Form, Input, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Text } = Typography;

export default function LoginForm() {
  const langDirection = useSelector(selectLangDirection);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const translate = useLanguage();

  const checkCapsLock = (event) => {
    setIsCapsLockOn(event.getModifierState && event.getModifierState('CapsLock'));
  };

  return (
    <div style={{ direction: langDirection }}>
      <Form.Item
        label={translate('email')}
        name="email"
        rules={[
          {
            required: true,
          },
          {
            type: 'email',
          },
        ]}
      >
        <Input
          autoComplete="email"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={translate('email')}
          type="email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        label={translate('password')}
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password
          autoComplete="current-password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={translate('password')}
          size="large"
          onKeyUp={checkCapsLock}
          onKeyDown={checkCapsLock}
        />
      </Form.Item>

      {isCapsLockOn && (
        <Text type="warning" className="auth-security-hint">
          Caps Lock is on.
        </Text>
      )}

      <Form.Item className="auth-form-options">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{translate('Remember me')}</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/forgetpassword">
          {translate('Forgot password')}
        </a>
      </Form.Item>
    </div>
  );
}
