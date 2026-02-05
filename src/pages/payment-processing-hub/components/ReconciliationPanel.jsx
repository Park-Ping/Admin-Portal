import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReconciliationPanel = ({ unmatchedTransactions, onReconcile }) => {
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [reconciliationMode, setReconciliationMode] = useState('auto');

  const handleSelectTransaction = (txnId) => {
    setSelectedTransactions(prev => 
      prev?.includes(txnId) 
        ? prev?.filter(id => id !== txnId)
        : [...prev, txnId]
    );
  };

  const handleSelectAll = () => {
    if (selectedTransactions?.length === unmatchedTransactions?.length) {
      setSelectedTransactions([]);
    } else {
      setSelectedTransactions(unmatchedTransactions?.map(txn => txn?.transactionId));
    }
  };

  const handleReconcile = () => {
    onReconcile(selectedTransactions, reconciliationMode);
    setSelectedTransactions([]);
  };

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Payment Reconciliation</h2>
          <p className="text-sm text-muted-foreground">
            {unmatchedTransactions?.length} unmatched transactions requiring attention
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={reconciliationMode}
            onChange={(e) => setReconciliationMode(e?.target?.value)}
            className="px-4 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="auto">Auto Match</option>
            <option value="manual">Manual Review</option>
            <option value="bulk">Bulk Process</option>
          </select>
          <Button 
            variant="default"
            iconName="CheckCircle"
            iconPosition="left"
            disabled={selectedTransactions?.length === 0}
            onClick={handleReconcile}
          >
            Reconcile ({selectedTransactions?.length})
          </Button>
        </div>
      </div>
      {unmatchedTransactions?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
            <Icon name="CheckCircle2" size={32} color="var(--color-success)" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">All Transactions Matched</h3>
          <p className="text-sm text-muted-foreground">
            No pending reconciliation items at this time
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTransactions?.length === unmatchedTransactions?.length}
                onChange={handleSelectAll}
                className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
              />
              <span className="ml-2 text-sm text-foreground">Select All</span>
            </label>
            <span className="text-sm text-muted-foreground">
              {selectedTransactions?.length} of {unmatchedTransactions?.length} selected
            </span>
          </div>

          <div className="space-y-3">
            {unmatchedTransactions?.map((txn) => (
              <div
                key={txn?.transactionId}
                className={`
                  p-4 rounded-lg border transition-all
                  ${selectedTransactions?.includes(txn?.transactionId)
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={selectedTransactions?.includes(txn?.transactionId)}
                    onChange={() => handleSelectTransaction(txn?.transactionId)}
                    className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-3">
                      <div>
                        <p className="text-sm font-mono text-foreground">{txn?.transactionId}</p>
                        <p className="text-xs text-muted-foreground mt-1">{txn?.timestamp}</p>
                      </div>
                      <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                        {txn?.amount}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">PhonePe Ref</p>
                        <p className="font-mono text-xs">{txn?.phonePeRef}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Card ID</p>
                        <p className="font-mono text-xs">{txn?.cardId || 'Not Matched'}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Customer</p>
                        <p className="text-xs">{txn?.customerName}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Issue</p>
                        <span className="status-badge warning text-xs">{txn?.issue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ReconciliationPanel;