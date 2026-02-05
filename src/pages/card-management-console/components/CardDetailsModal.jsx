import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CardDetailsModal = ({ card, onClose, onStatusChange }) => {
  const [activeTab, setActiveTab] = useState('details');

  if (!card) return null;

  const tabs = [
    { id: 'details', label: 'Card Details', icon: 'Info' },
    { id: 'activity', label: 'Activity History', icon: 'Activity' },
    { id: 'payments', label: 'Payment History', icon: 'DollarSign' }
  ];

  const activityHistory = [
    {
      id: 1,
      action: 'Card Activated',
      timestamp: '19/01/2026 10:30 AM',
      user: 'System Auto',
      details: 'Card successfully activated after payment verification'
    },
    {
      id: 2,
      action: 'QR Code Scanned',
      timestamp: '18/01/2026 03:45 PM',
      user: 'Unknown User',
      details: 'QR code scanned at Connaught Place parking area'
    },
    {
      id: 3,
      action: 'Contact Request',
      timestamp: '17/01/2026 11:20 AM',
      user: 'Unknown User',
      details: 'Owner contacted via phone call'
    },
    {
      id: 4,
      action: 'Card Issued',
      timestamp: '15/01/2026 09:00 AM',
      user: 'Admin User',
      details: 'Physical card issued and shipped to customer'
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      transactionId: 'TXN789456123',
      amount: '₹599',
      date: '15/01/2026',
      status: 'success',
      method: 'PhonePe UPI'
    },
    {
      id: 2,
      transactionId: 'TXN789456122',
      amount: '₹599',
      date: '15/01/2025',
      status: 'success',
      method: 'PhonePe UPI'
    }
  ];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg border border-border shadow-modal w-full max-w-4xl max-h-[90vh] overflow-hidden animate-slide-up">
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="CreditCard" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                Card Details
              </h2>
              <p className="text-sm text-muted-foreground font-mono">{card?.cardId}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="border-b border-border">
          <div className="flex overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`
                  flex items-center space-x-2 px-4 md:px-6 py-3 md:py-4 text-sm font-medium transition-colors flex-shrink-0
                  ${activeTab === tab?.id
                    ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-4 md:p-6">
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Owner Information</h3>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={card?.ownerAvatar}
                      alt={card?.ownerAvatarAlt}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base md:text-lg font-medium text-foreground">{card?.ownerName}</p>
                      <p className="text-sm text-muted-foreground">{card?.ownerPhone}</p>
                      <p className="text-sm text-muted-foreground">{card?.ownerEmail}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Vehicle Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Vehicle Number:</span>
                      <span className="text-sm font-medium text-foreground">{card?.vehicleNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Model:</span>
                      <span className="text-sm font-medium text-foreground">{card?.vehicleModel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Color:</span>
                      <span className="text-sm font-medium text-foreground">{card?.vehicleColor}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Plan Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Plan Type:</span>
                      <span className="text-sm font-medium text-foreground">{card?.planType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Price:</span>
                      <span className="text-sm font-medium text-foreground">{card?.planPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="text-sm font-medium text-foreground">12 Months</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Card Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Status:</span>
                      <span className={`status-badge ${card?.status === 'active' ? 'success' : 'warning'}`}>
                        {card?.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Activation Date:</span>
                      <span className="text-sm font-medium text-foreground">{card?.activationDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Expiry Date:</span>
                      <span className="text-sm font-medium text-foreground">{card?.expiryDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Activity:</span>
                      <span className="text-sm font-medium text-foreground">{card?.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">Activity Timeline</h3>
              <div className="space-y-4">
                {activityHistory?.map((activity, index) => (
                  <div key={activity?.id} className="relative pl-8 pb-4">
                    {index !== activityHistory?.length - 1 && (
                      <div className="absolute left-3 top-8 bottom-0 w-px bg-border" />
                    )}
                    <div className="absolute left-0 top-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-semibold text-foreground">{activity?.action}</h4>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {activity?.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{activity?.details}</p>
                      <p className="text-xs text-muted-foreground">By: {activity?.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">Payment History</h3>
              <div className="space-y-3">
                {paymentHistory?.map((payment) => (
                  <div key={payment?.id} className="bg-muted rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                          <Icon name="CheckCircle" size={18} color="var(--color-success)" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{payment?.amount}</p>
                          <p className="text-xs text-muted-foreground">{payment?.method}</p>
                        </div>
                      </div>
                      <span className="status-badge success">Success</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-muted-foreground">Transaction ID:</span>
                        <p className="font-mono text-foreground">{payment?.transactionId}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-muted-foreground">Date:</span>
                        <p className="text-foreground">{payment?.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end space-x-3 px-4 md:px-6 py-4 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="default"
            iconName="Edit"
            iconPosition="left"
            onClick={() => onStatusChange(card)}
          >
            Change Status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsModal;