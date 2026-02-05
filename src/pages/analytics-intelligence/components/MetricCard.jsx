import Icon from '../../../components/AppIcon';

const MetricCard = ({ title, value, change, changeType, icon, iconColor, trend }) => {
  const isPositive = changeType === 'positive';
  const isNegative = changeType === 'negative';

  return (
    <div className="dashboard-widget">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <p className="metric-value">{value}</p>
          {change && (
            <div className={`metric-trend ${isPositive ? 'positive' : isNegative ? 'negative' : ''}`}>
              <Icon 
                name={isPositive ? 'TrendingUp' : isNegative ? 'TrendingDown' : 'Minus'} 
                size={16} 
                className="mr-1"
              />
              <span>{change}</span>
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
      {trend && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Last 7 days</span>
            <span className="font-medium">{trend}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricCard;