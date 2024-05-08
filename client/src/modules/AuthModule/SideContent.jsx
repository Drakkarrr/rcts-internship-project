import { Space, Layout, Divider, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        {/* <img
          src={logo}
          alt="ResponSivCode Technology Solutions"
          style={{ margin: '0 auto 40px', display: 'block' }}
          height={63}
          width={220}
        /> */}
        <h1>Your Logo Here!</h1>

        <div className="space40"></div>
        <Title level={3}>Brngy Management System</Title>

        <div className="space20"></div>
        <ul className="list-checked" style={{ paddingRight: 0 }}>
          <li
            className={`list-checked-item ${
              langDirection === 'rtl' ? 'list-checked-item-right' : 'list-checked-item-left'
            }`}
          >
            <Space direction="vertical">
              <Text strong>All-in-one tool</Text>
            </Space>
          </li>

          <li
            className={`list-checked-item ${
              langDirection === 'rtl' ? 'list-checked-item-right' : 'list-checked-item-left'
            }`}
          >
            <Space direction="vertical">
              <Text strong>Fully Automated</Text>
            </Space>
          </li>

          <li
            className={`list-checked-item ${
              langDirection === 'rtl' ? 'list-checked-item-right' : 'list-checked-item-left'
            }`}
          >
            <Space direction="vertical">
              <Text strong>Secures your data</Text>
            </Space>
          </li>

          <li
            className={`list-checked-item ${
              langDirection === 'rtl' ? 'list-checked-item-right' : 'list-checked-item-left'
            }`}
          >
            <Space direction="vertical">
              <Text strong>User friendly</Text>
            </Space>
          </li>
        </ul>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        ></div>
      </div>
    </Content>
  );
}
