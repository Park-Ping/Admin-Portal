import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      title: 'Activate New Card',
      description: 'Process card activation request',
      icon: 'Plus',
      iconColor: 'var(--color-primary)',
      route: '/card-management-console',
      badge: '12 pending'
    },
    {
      id: 2,
      title: 'Review Payments',
      description: 'Check pending transactions',
      icon: 'DollarSign',
      iconColor: 'var(--color-success)',
      route: '/payment-processing-hub',
      badge: '8 new'
    },
    {
      id: 3,
      title: 'View Analytics',
      description: 'Access detailed reports',
      icon: 'BarChart3',
      iconColor: 'var(--color-info)',
      route: '/analytics-intelligence',
      badge: null
    },
    {
      id: 4,
      title: 'System Settings',
      description: 'Configure admin preferences',
      icon: 'Settings',
      iconColor: 'var(--color-accent)',
      route: '/system-administration',
      badge: null
    }
  ];

  return (
    <div className="dashboard-widget">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Common administrative tasks</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={() => navigate(action?.route)}
            className="flex items-start p-4 bg-muted hover:bg-muted/80 rounded-lg border border-border transition-all hover:shadow-interactive group"
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: `${action?.iconColor}15` }}
            >
              <Icon name={action?.icon} size={24} color={action?.iconColor} />
            </div>
            <div className="flex-1 ml-4 text-left">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{action?.title}</p>
                {action?.badge && (
                  <span className="status-badge warning text-xs">{action?.badge}</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{action?.description}</p>
            </div>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;