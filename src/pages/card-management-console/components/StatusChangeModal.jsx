import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const StatusChangeModal = ({ card, onClose, onConfirm }) => {
  const [newStatus, setNewStatus] = useState(card?.status || '');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');

  if (!card) return null;

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' },
    { value: 'expired', label: 'Expired' }
  ];

  const reasonOptions = [
    { value: '', label: 'Select reason...' },
    { value: 'payment_issue', label: 'Payment Issue' },
    { value: 'customer_request', label: 'Customer Request' },
    { value: 'policy_violation', label: 'Policy Violation' },
    { value: 'expired_plan', label: 'Expired Plan' },
    { value: 'other', label: 'Other' }
  ];

  const handleConfirm = () => {
    if (!newStatus || !reason) {
      alert('Please select status and reason');
      return;
    }
    onConfirm({ cardId: card?.id, newStatus, reason, notes });
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg border border-border shadow-modal w-full max-w-md animate-slide-up">
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={20} color="var(--color-warning)" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Change Card Status</h2>
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

        <div className="p-4 md:p-6 space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Current Status:</span>
              <span className={`status-badge ${card?.status === 'active' ? 'success' : 'warning'}`}>
                {card?.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Owner:</span>
              <span className="text-sm font-medium text-foreground">{card?.ownerName}</span>
            </div>
          </div>

          <Select
            label="New Status"
            required
            options={statusOptions}
            value={newStatus}
            onChange={setNewStatus}
          />

          <Select
            label="Reason for Change"
            required
            options={reasonOptions}
            value={reason}
            onChange={setReason}
          />

          <Input
            label="Additional Notes"
            type="text"
            placeholder="Enter any additional information..."
            value={notes}
            onChange={(e) => setNotes(e?.target?.value)}
            description="Optional: Provide context for this status change"
          />

          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={18} color="var(--color-warning)" className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Important Notice</p>
                <p className="text-xs text-muted-foreground">
                  This action will be logged in the audit trail. The card owner will be notified of this status change via SMS and email.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 px-4 md:px-6 py-4 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="default"
            iconName="CheckCircle"
            iconPosition="left"
            onClick={handleConfirm}
          >
            Confirm Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusChangeModal;