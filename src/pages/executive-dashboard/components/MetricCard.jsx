import Icon from '../../../components/AppIcon';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  iconColor,
  description,
  loading = false 
}) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-success';
    if (changeType === 'negative') return 'text-error';
    return 'text-muted-foreground';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return 'TrendingUp';
    if (changeType === 'negative') return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="dashboard-widget">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          {loading ? (
            <div className="h-8 w-32 bg-muted animate-pulse rounded" />
          ) : (
            <p className="metric-value">{value}</p>
          )}
          {change && (
            <div className={`metric-trend ${changeType === 'positive' ? 'positive' : changeType === 'negative' ? 'negative' : ''}`}>
              <Icon name={getChangeIcon()} size={16} className="mr-1" />
              <span>{change}</span>
              {description && <span className="ml-1 text-muted-foreground">vs last month</span>}
            </div>
          )}
        </div>
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon name={icon} size={24} color={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;