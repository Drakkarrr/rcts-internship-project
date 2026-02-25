import { Space, Layout, Divider, Typography, Row, Col, Tag } from 'antd';
import {
  CalendarOutlined,
  TeamOutlined,
  UserSwitchOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

const CORE_MODULES = [
  {
    label: 'Appointment Management',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Requestor Information',
    icon: <TeamOutlined />,
  },
  {
    label: 'User Management',
    icon: <UserSwitchOutlined />,
  },
  {
    label: 'Secure Authentication',
    icon: <SafetyCertificateOutlined />,
  },
  {
    label: 'General Settings',
    icon: <SettingOutlined />,
  },
];

export default function SideContent() {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Content
      style={{
        padding: '72px 30px 30px',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <Tag color="blue" style={{ marginBottom: 16 }}>
          Brgy Operational Management System
        </Tag>

        <Title level={2} style={{ marginBottom: 8 }}>
          Manage appointments, records, and staff in one place.
        </Title>
        <Text type="secondary">
          Built for barangay operations with modules shown in the project README and designed for
          daily administrative workflows.
        </Text>

        <div className="space30"></div>
        <Row gutter={[12, 12]}>
          {CORE_MODULES.map((module) => (
            <Col xs={24} sm={12} key={module.label}>
              <div className="auth-module-chip">
                <Space>
                  {module.icon}
                  <Text strong>{module.label}</Text>
                </Space>
              </div>
            </Col>
          ))}
        </Row>

        <div className="space30"></div>
        <Title level={4}>Platform highlights</Title>
        <ul className="list-checked" style={{ paddingRight: 0 }}>
          {[
            'Fully responsive authentication screens',
            'Role-based access for staff and admins',
            'Calendar-ready scheduling and event support',
            'Secure account recovery (forgot/reset password)',
          ].map((item) => (
            <li
              key={item}
              className={`list-checked-item ${
                langDirection === 'rtl' ? 'list-checked-item-right' : 'list-checked-item-left'
              }`}
            >
              <Space direction="vertical">
                <Text strong>{item}</Text>
              </Space>
            </li>
          ))}
        </ul>
        <Divider />
      </div>
    </Content>
  );
}
