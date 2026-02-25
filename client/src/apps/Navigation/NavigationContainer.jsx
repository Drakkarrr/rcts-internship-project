import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu, Tag } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.png';

import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  DashboardOutlined,
  UserOutlined,
  MenuOutlined,
  TeamOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Sider } = Layout;

export default function Navigation() {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
  const location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1) || 'dashboard');
  const [openKeys, setOpenKeys] = useState(['settings']);

  const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to="/">{translate('dashboard')}</Link>,
    },
    {
      key: 'appointments',
      icon: <CalendarOutlined />,
      label: <Link to="/appointments">Appointments</Link>,
    },
    {
      key: 'events',
      icon: <ScheduleOutlined />,
      label: <Link to="/events">Events</Link>,
    },
    {
      key: 'requestors',
      icon: <TeamOutlined />,
      label: <Link to="/requestors">Requestor Information</Link>,
    },
    {
      key: 'employees',
      icon: <UserOutlined />,
      label: <Link to="/employees">Employee Module</Link>,
    },
    {
      key: 'user-management',
      icon: <SecurityScanOutlined />,
      label: <Link to="/user-management">User Management</Link>,
    },
    {
      label: 'General Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'settings',
          label: <Link to="/settings">{translate('settings')}</Link>,
        },
        {
          key: 'profile',
          label: <Link to="/profile">Profile</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    const routePath = location.pathname === '/' ? 'dashboard' : location.pathname.slice(1);
    setCurrentPath(routePath);
    setOpenKeys(routePath.startsWith('settings') || routePath === 'profile' ? ['settings'] : []);
  }, [location.pathname]);

  const onCollapse = () => {
    navMenu.collapse();
  };

  const langDirection = useSelector(selectLangDirection);
  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      width={isMobile ? 250 : 256}
      style={{
        height: '100vh',
        direction: langDirection,
        position: isMobile ? 'relative' : 'relative',
        bottom: isMobile ? 0 : '20px',
        ...(!isMobile && {
          background: 'none',
          border: 'none',
          [langDirection === 'rtl' ? 'right' : 'left']: '20px',
          top: '20px',
          borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logoIcon} alt="Logo" style={{ marginLeft: '-3px', height: '40px' }} />
        <div>
          <h2 style={{ marginBottom: 0, lineHeight: '1.1' }}>Brgy OMS</h2>
          <Tag color="blue" style={{ marginTop: 4 }}>
            Responsive UI
          </Tag>
        </div>
      </div>
      <Menu
        items={items}
        mode="inline"
        theme={'light'}
        selectedKeys={[currentPath]}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        style={{
          background: 'none',
          border: 'none',
          width: isMobile ? '100%' : 240,
        }}
      />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const langDirection = useSelector(selectLangDirection);
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ [langDirection === 'rtl' ? 'marginRight' : 'marginLeft']: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        contentWrapperStyle={{
          boxShadow: 'none',
        }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        placement={langDirection === 'rtl' ? 'right' : 'left'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
