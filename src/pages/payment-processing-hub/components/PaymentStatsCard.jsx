import Icon from '../../../components/AppIcon';

const PaymentStatsCard = ({ title, value, change, changeType, icon, iconBg }) => {
  return (
    <div className="dashboard-widget">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <h3 className="metric-value">{value}</h3>
          {change && (
            <div className={`metric-trend ${changeType}`}>
              <Icon 
                name={changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
                className="mr-1"
              />
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon name={icon} size={24} color="var(--color-primary)" />
        </div>
      </div>
    </div>
  );
};

export default PaymentStatsCard;