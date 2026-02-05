import Icon from '../../../components/AppIcon';

const CardStatsOverview = ({ stats }) => {
  const statCards = [
    {
      id: 1,
      label: 'Total Cards',
      value: stats?.totalCards,
      icon: 'CreditCard',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      trend: '+12.5%',
      trendPositive: true
    },
    {
      id: 2,
      label: 'Active Cards',
      value: stats?.activeCards,
      icon: 'CheckCircle',
      color: 'text-success',
      bgColor: 'bg-success/10',
      trend: '+8.3%',
      trendPositive: true
    },
    {
      id: 3,
      label: 'Pending Activation',
      value: stats?.pendingCards,
      icon: 'Clock',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      trend: '-3.2%',
      trendPositive: false
    },
    {
      id: 4,
      label: 'Expired Cards',
      value: stats?.expiredCards,
      icon: 'AlertTriangle',
      color: 'text-error',
      bgColor: 'bg-error/10',
      trend: '+5.1%',
      trendPositive: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
      {statCards?.map((stat) => (
        <div
          key={stat?.id}
          className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-card hover:shadow-interactive transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className={`${stat?.bgColor} ${stat?.color} p-2 md:p-3 rounded-lg`}>
              <Icon name={stat?.icon} size={20} className="md:w-6 md:h-6" />
            </div>
            <div className={`flex items-center text-xs md:text-sm font-medium ${stat?.trendPositive ? 'text-success' : 'text-error'}`}>
              <Icon
                name={stat?.trendPositive ? 'TrendingUp' : 'TrendingDown'}
                size={14}
                className="mr-1"
              />
              {stat?.trend}
            </div>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {stat?.value?.toLocaleString('en-IN')}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">{stat?.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStatsOverview;