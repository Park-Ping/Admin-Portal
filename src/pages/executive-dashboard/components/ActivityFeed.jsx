import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ActivityFeed = () => {
  const [filter, setFilter] = useState('all');

  const activities = [
    {
      id: 1,
      type: 'card_activation',
      title: 'New Card Activated',
      description: 'Premium card #PKP-2026-1234 activated by Rajesh Kumar',
      timestamp: '2 minutes ago',
      icon: 'CreditCard',
      iconColor: 'var(--color-success)',
      isNew: true
    },
    {
      id: 2,
      type: 'payment_success',
      title: 'Payment Received',
      description: 'PhonePe transaction ₹599 for card #PKP-2026-1233',
      timestamp: '15 minutes ago',
      icon: 'CheckCircle',
      iconColor: 'var(--color-success)',
      isNew: true
    },
    {
      id: 3,
      type: 'card_expiring',
      title: 'Card Expiring Soon',
      description: 'Basic card #PKP-2025-8765 expires in 7 days',
      timestamp: '1 hour ago',
      icon: 'AlertTriangle',
      iconColor: 'var(--color-warning)',
      isNew: false
    },
    {
      id: 4,
      type: 'support_ticket',
      title: 'Support Ticket Created',
      description: 'Customer inquiry about card replacement process',
      timestamp: '2 hours ago',
      icon: 'HelpCircle',
      iconColor: 'var(--color-info)',
      isNew: false
    },
    {
      id: 5,
      type: 'bulk_operation',
      title: 'Bulk Card Update',
      description: '25 cards status updated to active by admin',
      timestamp: '3 hours ago',
      icon: 'RefreshCw',
      iconColor: 'var(--color-accent)',
      isNew: false
    },
    {
      id: 6,
      type: 'payment_failed',
      title: 'Payment Failed',
      description: 'PhonePe transaction failed for card #PKP-2026-1232',
      timestamp: '4 hours ago',
      icon: 'XCircle',
      iconColor: 'var(--color-error)',
      isNew: false
    },
    {
      id: 7,
      type: 'card_activation',
      title: 'New Card Activated',
      description: 'Enterprise card #PKP-2026-1231 activated by Priya Sharma',
      timestamp: '5 hours ago',
      icon: 'CreditCard',
      iconColor: 'var(--color-success)',
      isNew: false
    },
    {
      id: 8,
      type: 'system_update',
      title: 'System Maintenance',
      description: 'Scheduled maintenance completed successfully',
      timestamp: '6 hours ago',
      icon: 'Settings',
      iconColor: 'var(--color-muted-foreground)',
      isNew: false
    }
  ];

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities?.filter(activity => activity?.type === filter);

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Real-Time Activity Feed</h3>
          <p className="text-sm text-muted-foreground">Live operational updates and system events</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <select
            value={filter}
            onChange={(e) => setFilter(e?.target?.value)}
            className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Activities</option>
            <option value="card_activation">Card Activations</option>
            <option value="payment_success">Payments</option>
            <option value="card_expiring">Expiring Cards</option>
            <option value="support_ticket">Support</option>
          </select>
        </div>
      </div>
      <div className="space-y-1 max-h-96 overflow-y-auto">
        {filteredActivities?.map((activity) => (
          <div
            key={activity?.id}
            className={`activity-feed-item ${activity?.isNew ? 'new' : ''}`}
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${activity?.iconColor}15` }}
            >
              <Icon name={activity?.icon} size={20} color={activity?.iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity?.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{activity?.description}</p>
                </div>
                {activity?.isNew && (
                  <span className="status-badge success ml-2 flex-shrink-0">New</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2">{activity?.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary/80 font-medium transition-colors flex items-center justify-center">
          <span>View All Activities</span>
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;