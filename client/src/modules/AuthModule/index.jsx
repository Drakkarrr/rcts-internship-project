import useLanguage from '@/locale/useLanguage';

import { Layout, Divider, Typography } from 'antd';

import AuthLayout from '@/layout/AuthLayout';
import SideContent from './SideContent';

const { Content } = Layout;
const { Title, Text } = Typography;

const AuthModule = ({
  authContent,
  AUTH_TITLE,
  AUTH_SUBTITLE = "Login to your account",
  isForRegistre = false,
}) => {
  const translate = useLanguage();

  return (
    <AuthLayout sideContent={<SideContent />}>
      <Content
        className="auth-form-content"
        style={{
          padding: isForRegistre ? '40px 30px 30px' : '90px 30px 30px',
          maxWidth: '460px',
          margin: '0 auto',
        }}
      >
        <Title level={2} className="auth-form-title">
          {translate(AUTH_TITLE)}
        </Title>
        <Text className="auth-form-subtitle">{translate(AUTH_SUBTITLE)}</Text>
        <Divider />
        <div className="site-layout-content">{authContent}</div>
      </Content>
    </AuthLayout>
  );
};

export default AuthModule;
