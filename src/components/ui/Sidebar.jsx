import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Sidebar = ({ isCollapsed = false, onToggleCollapse }) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationItems = [
    {
      path: '/executive-dashboard',
      label: 'Executive Dashboard',
      icon: 'LayoutDashboard',
    },
    {
      path: '/card-management-console',
      label: 'Card Management',
      icon: 'CreditCard',
    },
    {
      path: '/payment-processing-hub',
      label: 'Payment Processing',
      icon: 'DollarSign',
    },
    {
      path: '/analytics-intelligence',
      label: 'Analytics Intelligence',
      icon: 'BarChart3',
    },
    {
      path: '/system-administration',
      label: 'System Administration',
      icon: 'Settings',
    },
  ];

  const isActive = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border shadow-card"
        aria-label="Toggle mobile menu"
      >
        <Icon name={isMobileOpen ? 'X' : 'Menu'} size={24} />
      </button>
      <aside
        className={`
          fixed lg:fixed top-0 left-0 h-full bg-card border-r border-border z-40
          transition-all duration-300 ease-smooth
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className={`sidebar-header ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
          <div className="sidebar-logo">
            <Icon name="ParkingCircle" size={24} color="var(--color-primary)" />
          </div>
          {!isCollapsed && (
            <span className="sidebar-logo-text">ParkPing Admin</span>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              onClick={() => setIsMobileOpen(false)}
              className={`
                nav-item
                ${isActive(item?.path) ? 'active' : ''}
                ${isCollapsed ? 'justify-center' : ''}
              `}
            >
              <Icon name={item?.icon} size={20} />
              {!isCollapsed && (
                <span className="ml-3">{item?.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="p-4 border-t border-border">
            <button
              onClick={onToggleCollapse}
              className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="ChevronsLeft" size={20} />
              <span className="ml-2">Collapse</span>
            </button>
          </div>
        )}

        {isCollapsed && (
          <div className="p-4 border-t border-border flex justify-center">
            <button
              onClick={onToggleCollapse}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Expand sidebar"
            >
              <Icon name="ChevronsRight" size={20} />
            </button>
          </div>
        )}
      </aside>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background z-30 lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;