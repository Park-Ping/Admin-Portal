import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SystemStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemMetrics = [
    {
      label: 'System Status',
      value: 'Operational',
      status: 'success',
      icon: 'CheckCircle'
    },
    {
      label: 'API Response',
      value: '45ms',
      status: 'success',
      icon: 'Zap'
    },
    {
      label: 'Active Sessions',
      value: '12',
      status: 'info',
      icon: 'Users'
    }
  ];

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="p-4 md:p-6 bg-card border border-border rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">System Health</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>

        <div className="space-y-3">
          {systemMetrics?.map((metric, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon
                  name={metric?.icon}
                  size={16}
                  color={
                    metric?.status === 'success' ?'var(--color-success)' :'var(--color-info)'
                  }
                />
                <span className="text-sm text-muted-foreground">{metric?.label}</span>
              </div>
              <span className="text-sm font-medium text-foreground">{metric?.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-6 bg-card border border-border rounded-lg">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Clock" size={20} color="var(--color-primary)" />
          <h3 className="text-sm font-semibold text-foreground">Current Time</h3>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {formatTime(currentTime)}
          </p>
          <p className="text-sm text-muted-foreground">{formatDate(currentTime)}</p>
        </div>
      </div>
      <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-info)" className="flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-info mb-1">Session Security</p>
            <p className="text-xs text-info/80">
              Your session will automatically expire after 30 minutes of inactivity for security purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;