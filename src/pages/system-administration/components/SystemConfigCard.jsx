import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const SystemConfigCard = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General Settings', icon: 'Settings' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'integrations', label: 'Integrations', icon: 'Plug' }
  ];

  const generalSettings = [
    { id: 'company_name', label: 'Company Name', value: 'ParkPing Technologies', type: 'text' },
    { id: 'support_email', label: 'Support Email', value: 'support@parkping.com', type: 'email' },
    { id: 'timezone', label: 'System Timezone', value: 'Asia/Kolkata', type: 'select' },
    { id: 'date_format', label: 'Date Format', value: 'DD/MM/YYYY', type: 'select' },
    { id: 'currency', label: 'Currency', value: 'INR', type: 'select' }
  ];

  const securitySettings = [
    { id: 'session_timeout', label: 'Session Timeout (minutes)', value: '30', type: 'number' },
    { id: 'password_expiry', label: 'Password Expiry (days)', value: '90', type: 'number' },
    { id: 'max_login_attempts', label: 'Max Login Attempts', value: '5', type: 'number' },
    { id: 'two_factor_auth', label: 'Require Two-Factor Authentication', checked: true, type: 'checkbox' },
    { id: 'ip_whitelist', label: 'Enable IP Whitelisting', checked: false, type: 'checkbox' }
  ];

  const notificationSettings = [
    { id: 'email_notifications', label: 'Email Notifications', checked: true, type: 'checkbox' },
    { id: 'sms_notifications', label: 'SMS Notifications', checked: false, type: 'checkbox' },
    { id: 'payment_alerts', label: 'Payment Transaction Alerts', checked: true, type: 'checkbox' },
    { id: 'card_activation_alerts', label: 'Card Activation Alerts', checked: true, type: 'checkbox' },
    { id: 'system_alerts', label: 'System Error Alerts', checked: true, type: 'checkbox' }
  ];

  const integrations = [
    {
      name: 'PhonePe Payment Gateway',
      status: 'connected',
      icon: 'CreditCard',
      lastSync: '2026-01-19 11:30 AM',
      description: 'Payment processing integration'
    },
    {
      name: 'SMS Gateway',
      status: 'connected',
      icon: 'MessageSquare',
      lastSync: '2026-01-19 10:15 AM',
      description: 'Customer notification service'
    },
    {
      name: 'Email Service',
      status: 'connected',
      icon: 'Mail',
      lastSync: '2026-01-19 11:45 AM',
      description: 'Transactional email delivery'
    },
    {
      name: 'Analytics Platform',
      status: 'disconnected',
      icon: 'BarChart3',
      lastSync: 'Never',
      description: 'Business intelligence integration'
    }
  ];

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">System Configuration</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage operational parameters and integrations</p>
        </div>
        <Button variant="default" iconName="Save" iconPosition="left">
          Save All Changes
        </Button>
      </div>
      <div className="border-b border-border mb-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`
                flex items-center gap-2 px-4 md:px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap
                ${activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <Icon name={tab?.icon} size={16} />
              {tab?.label}
            </button>
          ))}
        </div>
      </div>
      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalSettings?.map((setting) => (
              <div key={setting?.id}>
                {setting?.type === 'text' || setting?.type === 'email' || setting?.type === 'number' ? (
                  <Input
                    label={setting?.label}
                    type={setting?.type}
                    value={setting?.value}
                    onChange={() => {}}
                  />
                ) : (
                  <Select
                    label={setting?.label}
                    value={setting?.value}
                    onChange={() => {}}
                    options={[
                      { value: setting?.value, label: setting?.value }
                    ]}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securitySettings?.map((setting) => (
              <div key={setting?.id}>
                {setting?.type === 'checkbox' ? (
                  <Checkbox
                    label={setting?.label}
                    checked={setting?.checked}
                    onChange={() => {}}
                  />
                ) : (
                  <Input
                    label={setting?.label}
                    type={setting?.type}
                    value={setting?.value}
                    onChange={() => {}}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="border border-warning/20 bg-warning/5 rounded-lg p-4 md:p-6">
            <div className="flex gap-3">
              <Icon name="AlertTriangle" size={20} className="text-warning flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-foreground mb-2">Security Best Practices</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Enable two-factor authentication for all admin accounts</li>
                  <li>• Set session timeout to 30 minutes or less</li>
                  <li>• Enforce strong password policies with regular expiry</li>
                  <li>• Monitor failed login attempts and suspicious activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div className="space-y-4">
            {notificationSettings?.map((setting) => (
              <div key={setting?.id} className="border border-border rounded-lg p-4">
                <Checkbox
                  label={setting?.label}
                  checked={setting?.checked}
                  onChange={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'integrations' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {integrations?.map((integration, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={integration?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{integration?.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{integration?.description}</p>
                  </div>
                </div>
                <span className={`status-badge ${integration?.status === 'connected' ? 'success' : 'error'}`}>
                  {integration?.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Last sync: {integration?.lastSync}</span>
                <Button variant="outline" size="sm">
                  {integration?.status === 'connected' ? 'Configure' : 'Connect'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SystemConfigCard;