import Icon from '../../../components/AppIcon';

const SecurityIndicators = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'SSL Encrypted',
      description: '256-bit encryption'
    },
    {
      icon: 'Lock',
      title: 'Secure Access',
      description: 'JWT authentication'
    },
    {
      icon: 'Clock',
      title: 'Session Timeout',
      description: '30 minutes idle'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {securityFeatures?.map((feature, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg border border-border"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon name={feature?.icon} size={20} color="var(--color-primary)" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{feature?.title}</p>
            <p className="text-xs text-muted-foreground">{feature?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecurityIndicators;