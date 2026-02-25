import { Layout, Row, Col } from 'antd';
import { selectLangDirection } from '@/redux/translate/selectors';
import { useSelector } from 'react-redux';

export default function AuthLayout({ sideContent, children }) {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Layout
      className="authLayout"
      style={{ textAlign: langDirection === 'rtl' ? 'right' : 'left', direction: langDirection }}
    >
      <Row className="authLayoutRow">
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 11, order: 1 }}
          lg={{ span: 12, order: 1 }}
          className="authSidePane"
          style={{ minHeight: '100vh' }}
        >
          {sideContent}
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 13, order: 2 }}
          lg={{ span: 12, order: 2 }}
          className="authFormPane"
          style={{ background: '#fff', minHeight: '100vh' }}
        >
          {children}
        </Col>
      </Row>
    </Layout>
  );
}
