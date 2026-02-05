import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const AuditLogCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState('all');
  const [selectedUser, setSelectedUser] = useState('all');

  const auditLogs = [
    {
      id: 1,
      timestamp: '2026-01-19 11:45:23',
      user: 'Rajesh Kumar',
      userEmail: 'rajesh.kumar@parkping.com',
      action: 'User Created',
      actionType: 'create',
      details: 'Created new user account for Amit Patel',
      ipAddress: '103.25.45.67',
      status: 'success'
    },
    {
      id: 2,
      timestamp: '2026-01-19 11:30:15',
      user: 'Priya Sharma',
      userEmail: 'priya.sharma@parkping.com',
      action: 'Card Activated',
      actionType: 'update',
      details: 'Activated card #PKP-2026-00234',
      ipAddress: '103.25.45.68',
      status: 'success'
    },
    {
      id: 3,
      timestamp: '2026-01-19 11:15:42',
      user: 'Sneha Reddy',
      userEmail: 'sneha.reddy@parkping.com',
      action: 'Payment Processed',
      actionType: 'payment',
      details: 'Processed refund of ₹299 for transaction #TXN-45678',
      ipAddress: '103.25.45.69',
      status: 'success'
    },
    {
      id: 4,
      timestamp: '2026-01-19 10:58:30',
      user: 'Unknown User',
      userEmail: 'unknown@example.com',
      action: 'Failed Login',
      actionType: 'security',
      details: 'Failed login attempt with invalid credentials',
      ipAddress: '192.168.1.100',
      status: 'failed'
    },
    {
      id: 5,
      timestamp: '2026-01-19 10:45:18',
      user: 'Rajesh Kumar',
      userEmail: 'rajesh.kumar@parkping.com',
      action: 'Settings Updated',
      actionType: 'update',
      details: 'Modified system security settings',
      ipAddress: '103.25.45.67',
      status: 'success'
    },
    {
      id: 6,
      timestamp: '2026-01-19 10:30:05',
      user: 'Vikram Singh',
      userEmail: 'vikram.singh@parkping.com',
      action: 'API Access',
      actionType: 'api',
      details: 'Accessed card management API endpoint',
      ipAddress: '103.25.45.70',
      status: 'success'
    },
    {
      id: 7,
      timestamp: '2026-01-19 10:15:52',
      user: 'Priya Sharma',
      userEmail: 'priya.sharma@parkping.com',
      action: 'Bulk Operation',
      actionType: 'update',
      details: 'Deactivated 15 expired cards',
      ipAddress: '103.25.45.68',
      status: 'success'
    },
    {
      id: 8,
      timestamp: '2026-01-19 09:58:40',
      user: 'Amit Patel',
      userEmail: 'amit.patel@parkping.com',
      action: 'Report Generated',
      actionType: 'view',
      details: 'Exported monthly analytics report',
      ipAddress: '103.25.45.71',
      status: 'success'
    }
  ];

  const actionOptions = [
    { value: 'all', label: 'All Actions' },
    { value: 'create', label: 'Create Operations' },
    { value: 'update', label: 'Update Operations' },
    { value: 'payment', label: 'Payment Operations' },
    { value: 'security', label: 'Security Events' },
    { value: 'api', label: 'API Access' },
    { value: 'view', label: 'View Operations' }
  ];

  const userOptions = [
    { value: 'all', label: 'All Users' },
    { value: 'rajesh.kumar@parkping.com', label: 'Rajesh Kumar' },
    { value: 'priya.sharma@parkping.com', label: 'Priya Sharma' },
    { value: 'amit.patel@parkping.com', label: 'Amit Patel' },
    { value: 'sneha.reddy@parkping.com', label: 'Sneha Reddy' },
    { value: 'vikram.singh@parkping.com', label: 'Vikram Singh' }
  ];

  const getActionIcon = (actionType) => {
    const icons = {
      create: 'Plus',
      update: 'Edit',
      payment: 'DollarSign',
      security: 'Shield',
      api: 'Code',
      view: 'Eye'
    };
    return icons?.[actionType] || 'Activity';
  };

  const getActionColor = (actionType) => {
    const colors = {
      create: 'text-success',
      update: 'text-accent',
      payment: 'text-primary',
      security: 'text-error',
      api: 'text-info',
      view: 'text-muted-foreground'
    };
    return colors?.[actionType] || 'text-foreground';
  };

  const filteredLogs = auditLogs?.filter(log => {
    const matchesSearch = log?.action?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         log?.details?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         log?.user?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesAction = selectedAction === 'all' || log?.actionType === selectedAction;
    const matchesUser = selectedUser === 'all' || log?.userEmail === selectedUser;
    return matchesSearch && matchesAction && matchesUser;
  });

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">Audit Log</h2>
          <p className="text-sm text-muted-foreground mt-1">Comprehensive system activity tracking</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" iconName="Download" iconPosition="left">
            Export Logs
          </Button>
          <Button variant="outline" iconName="Filter">
            Advanced Filter
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          type="search"
          placeholder="Search logs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
        />
        <Select
          placeholder="Filter by action"
          options={actionOptions}
          value={selectedAction}
          onChange={setSelectedAction}
        />
        <Select
          placeholder="Filter by user"
          options={userOptions}
          value={selectedUser}
          onChange={setSelectedUser}
        />
      </div>
      <div className="space-y-3">
        {filteredLogs?.map((log) => (
          <div
            key={log?.id}
            className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 ${getActionColor(log?.actionType)}`}>
                  <Icon name={getActionIcon(log?.actionType)} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{log?.action}</h4>
                    <span className={`status-badge ${log?.status === 'success' ? 'success' : 'error'}`}>
                      {log?.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{log?.details}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="User" size={12} />
                      <span>{log?.user}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Globe" size={12} />
                      <span>{log?.ipAddress}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      <span>{log?.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="Eye">
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      {filteredLogs?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="FileText" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No audit logs found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default AuditLogCard;