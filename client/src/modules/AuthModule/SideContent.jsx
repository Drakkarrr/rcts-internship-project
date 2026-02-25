import { Space, Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

const featureItems = [
  'Appointment and event scheduling',
  'Requestor and resident record management',
  'Employee and access control tools',
  'Analytics and reporting at a glance',
];

export default function SideContent() {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Content className="sideContent auth-hero-content">
      <div className="auth-hero-copy">
        <span className="auth-hero-dots" aria-hidden="true" />
        <Title className="auth-hero-title">Appointment Scheduling</Title>
        <Text className="auth-hero-subtitle">Barangay Operational Management System</Text>

        <ul className="list-checked" style={{ paddingRight: 0 }}>
          {featureItems.map((item) => (
            <li
              key={item}
              className={`list-checked-item ${
                langDirection === 'rtl' ? 'list-checked-item-right' : 'list-checked-item-left'
              }`}
            >
              <Space direction="vertical" size={0}>
                <Text strong>{item}</Text>
              </Space>
            </li>
          ))}
        </ul>
      </div>

      <div className="auth-hero-illustration" aria-hidden="true">
        <div className="hero-screen" />
        <div className="hero-avatar" />
        <div className="hero-lock" />
      </div>
    </Content>
  );
}
