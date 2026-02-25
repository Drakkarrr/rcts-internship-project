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
        className="authContent"
        style={{
          padding: isForRegistre ? '40px 30px 30px' : '80px 30px 30px',
          maxWidth: '440px',
          margin: '0 auto',
        }}
      >
        <Title level={1}>{translate(AUTH_TITLE)}</Title>

        <Divider />
        <div className="site-layout-content">{authContent}</div>
      </Content>
    </AuthLayout>
  );
};

export default AuthModule;
