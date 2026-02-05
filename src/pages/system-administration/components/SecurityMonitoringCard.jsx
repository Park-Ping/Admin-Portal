import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityMonitoringCard = () => {
  const securityMetrics = [
    {
      label: 'Failed Login Attempts',
      value: '12',
      change: '+3',
      trend: 'up',
      status: 'warning',
      icon: 'ShieldAlert',
      period: 'Last 24 hours'
    },
    {
      label: 'Active Sessions',
      value: '8',
      change: '-2',
      trend: 'down',
      status: 'success',
      icon: 'Users',
      period: 'Currently active'
    },
    {
      label: 'Suspicious Activities',
      value: '2',
      change: '+1',
      trend: 'up',
      status: 'error',
      icon: 'AlertTriangle',
      period: 'Last 7 days'
    },
    {
      label: 'Security Score',
      value: '94%',
      change: '+2%',
      trend: 'up',
      status: 'success',
      icon: 'Shield',
      period: 'Overall rating'
    }
  ];

  const securityAlerts = [
    {
      id: 1,
      severity: 'high',
      title: 'Multiple Failed Login Attempts',
      description: 'IP address 192.168.1.100 attempted 5 failed logins in 10 minutes',
      timestamp: '2026-01-19 11:30:00',
      status: 'active',
      action: 'IP temporarily blocked'
    },
    {
      id: 2,
      severity: 'medium',
      title: 'Unusual API Access Pattern',
      description: 'API endpoint accessed 150 times in 5 minutes from user vikram.singh@parkping.com',
      timestamp: '2026-01-19 10:45:00',
      status: 'investigating',
      action: 'Rate limiting applied'
    },
    {
      id: 3,
      severity: 'low',
      title: 'Password Expiry Warning',
      description: '3 admin accounts have passwords expiring within 7 days',
      timestamp: '2026-01-19 09:00:00',
      status: 'acknowledged',
      action: 'Email notifications sent'
    }
  ];

  const recentSecurityEvents = [
    {
      timestamp: '2026-01-19 11:45:00',
      event: 'Two-Factor Authentication Enabled',
      user: 'Amit Patel',
      ipAddress: '103.25.45.71',
      status: 'success'
    },
    {
      timestamp: '2026-01-19 11:30:00',
      event: 'Failed Login Attempt',
      user: 'Unknown',
      ipAddress: '192.168.1.100',
      status: 'blocked'
    },
    {
      timestamp: '2026-01-19 11:15:00',
      event: 'Password Changed',
      user: 'Priya Sharma',
      ipAddress: '103.25.45.68',
      status: 'success'
    },
    {
      timestamp: '2026-01-19 10:58:00',
      event: 'Session Timeout',
      user: 'Sneha Reddy',
      ipAddress: '103.25.45.69',
      status: 'expired'
    },
    {
      timestamp: '2026-01-19 10:45:00',
      event: 'API Rate Limit Exceeded',
      user: 'Vikram Singh',
      ipAddress: '103.25.45.70',
      status: 'throttled'
    }
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      high: 'text-error',
      medium: 'text-warning',
      low: 'text-info'
    };
    return colors?.[severity] || 'text-muted-foreground';
  };

  const getSeverityBg = (severity) => {
    const colors = {
      high: 'bg-error/10',
      medium: 'bg-warning/10',
      low: 'bg-info/10'
    };
    return colors?.[severity] || 'bg-muted';
  };

  const getStatusBadge = (status) => {
    const badges = {
      success: 'success',
      blocked: 'error',
      expired: 'warning',
      throttled: 'warning'
    };
    return badges?.[status] || 'default';
  };

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">Security Monitoring</h2>
          <p className="text-sm text-muted-foreground mt-1">Real-time security alerts and threat detection</p>
        </div>
        <Button variant="outline" iconName="RefreshCw" iconPosition="left">
          Refresh Data
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {securityMetrics?.map((metric, idx) => (
          <div key={idx} className="metric-card">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getSeverityBg(metric?.status)}`}>
                <Icon name={metric?.icon} size={24} className={getSeverityColor(metric?.status)} />
              </div>
              <span className={`status-badge ${metric?.status}`}>
                {metric?.change}
              </span>
            </div>
            <div className="metric-value">{metric?.value}</div>
            <div className="metric-label">{metric?.label}</div>
            <p className="text-xs text-muted-foreground mt-2">{metric?.period}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Active Security Alerts</h3>
        <div className="space-y-3">
          {securityAlerts?.map((alert) => (
            <div
              key={alert?.id}
              className={`border rounded-lg p-4 ${getSeverityBg(alert?.severity)} border-${alert?.severity === 'high' ? 'error' : alert?.severity === 'medium' ? 'warning' : 'info'}/20`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getSeverityBg(alert?.severity)}`}>
                    <Icon name="AlertTriangle" size={20} className={getSeverityColor(alert?.severity)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{alert?.title}</h4>
                      <span className={`text-xs font-medium uppercase ${getSeverityColor(alert?.severity)}`}>
                        {alert?.severity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert?.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        <span>{alert?.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="CheckCircle" size={12} />
                        <span>{alert?.action}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Investigate
                  </Button>
                  <Button variant="ghost" size="sm" iconName="X" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Security Events</h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Event</th>
                <th>User</th>
                <th>IP Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentSecurityEvents?.map((event, idx) => (
                <tr key={idx}>
                  <td className="text-sm text-muted-foreground whitespace-nowrap">
                    {event?.timestamp}
                  </td>
                  <td className="font-medium text-foreground">{event?.event}</td>
                  <td className="text-sm text-muted-foreground">{event?.user}</td>
                  <td className="text-sm text-muted-foreground whitespace-nowrap">
                    {event?.ipAddress}
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusBadge(event?.status)}`}>
                      {event?.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecurityMonitoringCard;