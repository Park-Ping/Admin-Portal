import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DisputeManagement = ({ disputes, onResolveDispute }) => {
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [resolutionNote, setResolutionNote] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');

  const filteredDisputes = disputes?.filter(dispute => 
    filterPriority === 'all' || dispute?.priority === filterPriority
  );

  const handleResolve = () => {
    if (selectedDispute && resolutionNote?.trim()) {
      onResolveDispute(selectedDispute?.disputeId, resolutionNote);
      setSelectedDispute(null);
      setResolutionNote('');
    }
  };

  const getPriorityBadge = (priority) => {
    const config = {
      high: { class: 'error', icon: 'AlertCircle' },
      medium: { class: 'warning', icon: 'AlertTriangle' },
      low: { class: 'info', icon: 'Info' }
    };
    const { class: badgeClass, icon } = config?.[priority] || config?.low;
    
    return (
      <span className={`status-badge ${badgeClass} flex items-center`}>
        <Icon name={icon} size={12} className="mr-1" />
        {priority?.charAt(0)?.toUpperCase() + priority?.slice(1)}
      </span>
    );
  };

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Dispute Management</h2>
          <p className="text-sm text-muted-foreground">
            {disputes?.length} active disputes requiring resolution
          </p>
        </div>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e?.target?.value)}
          className="px-4 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>
      {filteredDisputes?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
            <Icon name="Shield" size={32} color="var(--color-success)" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No Active Disputes</h3>
          <p className="text-sm text-muted-foreground">
            All payment disputes have been resolved
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredDisputes?.map((dispute) => (
            <div
              key={dispute?.disputeId}
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-foreground">{dispute?.reason}</h3>
                    {getPriorityBadge(dispute?.priority)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{dispute?.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Dispute ID</p>
                      <p className="font-mono text-xs">{dispute?.disputeId}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Transaction</p>
                      <p className="font-mono text-xs">{dispute?.transactionId}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Customer</p>
                      <p className="text-xs">{dispute?.customerName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Amount</p>
                      <p className="font-semibold text-xs">{dispute?.amount}</p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => setSelectedDispute(dispute)}
                >
                  Resolve
                </Button>
              </div>
              <div className="flex items-center text-xs text-muted-foreground pt-3 border-t border-border">
                <Icon name="Clock" size={14} className="mr-1" />
                Opened {dispute?.openedDate} • Age: {dispute?.age}
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedDispute && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg shadow-modal max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">Resolve Dispute</h3>
                <button
                  onClick={() => {
                    setSelectedDispute(null);
                    setResolutionNote('');
                  }}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="text-sm font-semibold text-foreground mb-3">Dispute Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Dispute ID</p>
                    <p className="font-mono text-xs">{selectedDispute?.disputeId}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Transaction ID</p>
                    <p className="font-mono text-xs">{selectedDispute?.transactionId}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Customer</p>
                    <p className="text-xs">{selectedDispute?.customerName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Amount</p>
                    <p className="font-semibold text-xs">{selectedDispute?.amount}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs mb-1">Reason</p>
                  <p className="text-sm">{selectedDispute?.reason}</p>
                  <p className="text-sm text-muted-foreground mt-2">{selectedDispute?.description}</p>
                </div>
              </div>

              <Input
                label="Resolution Notes"
                type="text"
                placeholder="Enter resolution details and actions taken..."
                value={resolutionNote}
                onChange={(e) => setResolutionNote(e?.target?.value)}
                description="Provide detailed explanation of how this dispute was resolved"
                required
              />

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="default"
                  iconName="CheckCircle"
                  iconPosition="left"
                  onClick={handleResolve}
                  disabled={!resolutionNote?.trim()}
                  fullWidth
                >
                  Mark as Resolved
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedDispute(null);
                    setResolutionNote('');
                  }}
                  fullWidth
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisputeManagement;