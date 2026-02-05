import Icon from '../../../components/AppIcon';

const PerformanceMetrics = ({ metrics, title }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'text-success bg-success/10';
      case 'good':
        return 'text-primary bg-primary/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'critical':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return 'CheckCircle2';
      case 'good':
        return 'CheckCircle';
      case 'warning':
        return 'AlertTriangle';
      case 'critical':
        return 'AlertCircle';
      default:
        return 'Info';
    }
  };

  return (
    <div className="dashboard-widget">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
          <Icon name="RefreshCw" size={18} />
        </button>
      </div>
      <div className="space-y-4">
        {metrics?.map((metric, index) => (
          <div key={index} className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getStatusColor(metric?.status)}`}>
                  <Icon name={getStatusIcon(metric?.status)} size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{metric?.name}</p>
                  <p className="text-xs text-muted-foreground">{metric?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">{metric?.value}</p>
                <p className="text-xs text-muted-foreground">{metric?.target}</p>
              </div>
            </div>

            <div className="relative w-full h-2 bg-border rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                  metric?.status === 'excellent' ? 'bg-success' :
                  metric?.status === 'good' ? 'bg-primary' :
                  metric?.status === 'warning'? 'bg-warning' : 'bg-error'
                }`}
                style={{ width: `${metric?.percentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">{metric?.percentage}% of target</span>
              <span className={`text-xs font-medium ${
                metric?.trend === 'up' ? 'text-success' : 
                metric?.trend === 'down'? 'text-error' : 'text-muted-foreground'
              }`}>
                {metric?.trend === 'up' ? '↑' : metric?.trend === 'down' ? '↓' : '→'} {metric?.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;