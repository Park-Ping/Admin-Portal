import Icon from '../../../components/AppIcon';

const SystemHealth = () => {
  const healthMetrics = [
    {
      id: 1,
      name: 'API Response Time',
      value: '145ms',
      status: 'healthy',
      percentage: 95,
      icon: 'Zap',
      description: 'Average response time'
    },
    {
      id: 2,
      name: 'Database Performance',
      value: '99.8%',
      status: 'healthy',
      percentage: 99.8,
      icon: 'Database',
      description: 'Query success rate'
    },
    {
      id: 3,
      name: 'Payment Gateway',
      value: 'Operational',
      status: 'healthy',
      percentage: 100,
      icon: 'CreditCard',
      description: 'PhonePe integration status'
    },
    {
      id: 4,
      name: 'System Uptime',
      value: '99.95%',
      status: 'healthy',
      percentage: 99.95,
      icon: 'Activity',
      description: 'Last 30 days'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'var(--color-success)';
      case 'warning':
        return 'var(--color-warning)';
      case 'critical':
        return 'var(--color-error)';
      default:
        return 'var(--color-muted-foreground)';
    }
  };

  return (
    <div className="dashboard-widget">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">System Health Monitor</h3>
          <p className="text-sm text-muted-foreground">Real-time infrastructure status</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-success">All Systems Operational</span>
        </div>
      </div>
      <div className="space-y-4">
        {healthMetrics?.map((metric) => (
          <div key={metric?.id} className="p-4 bg-muted rounded-lg border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${getStatusColor(metric?.status)}15` }}
                >
                  <Icon name={metric?.icon} size={20} color={getStatusColor(metric?.status)} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{metric?.name}</p>
                  <p className="text-xs text-muted-foreground">{metric?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">{metric?.value}</p>
                <span className={`status-badge ${metric?.status === 'healthy' ? 'success' : 'warning'} text-xs`}>
                  {metric?.status}
                </span>
              </div>
            </div>
            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${metric?.percentage}%`,
                  backgroundColor: getStatusColor(metric?.status)
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} color="var(--color-success)" />
          <div>
            <p className="text-sm font-semibold text-success">Security Status: Protected</p>
            <p className="text-xs text-muted-foreground mt-1">
              Last security scan: 19 Jan 2026, 11:30 AM • No vulnerabilities detected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;