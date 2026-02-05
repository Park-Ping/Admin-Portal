import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location?.pathname?.split('/')?.filter((x) => x);

  const breadcrumbNameMap = {
    'authentication-gateway': 'Authentication',
    'executive-dashboard': 'Executive Dashboard',
    'card-management-console': 'Card Management',
    'payment-processing-hub': 'Payment Processing',
    'analytics-intelligence': 'Analytics Intelligence',
    'system-administration': 'System Administration',
  };

  if (pathnames?.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link
        to="/executive-dashboard"
        className="hover:text-foreground transition-colors flex items-center"
      >
        <Icon name="Home" size={16} className="mr-1" />
        Home
      </Link>
      {pathnames?.map((value, index) => {
        const to = `/${pathnames?.slice(0, index + 1)?.join('/')}`;
        const isLast = index === pathnames?.length - 1;
        const label = breadcrumbNameMap?.[value] || value;

        return (
          <div key={to} className="flex items-center space-x-2">
            <Icon name="ChevronRight" size={16} />
            {isLast ? (
              <span className="text-foreground font-medium">{label}</span>
            ) : (
              <Link to={to} className="hover:text-foreground transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;