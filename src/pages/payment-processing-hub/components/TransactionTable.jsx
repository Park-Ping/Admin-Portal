import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransactionTable = ({ transactions, onViewDetails, onExport }) => {
  const [sortField, setSortField] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredTransactions = transactions?.filter(txn => 
    filterStatus === 'all' || txn?.status === filterStatus
  );

  const sortedTransactions = [...filteredTransactions]?.sort((a, b) => {
    let aVal = a?.[sortField];
    let bVal = b?.[sortField];
    
    if (sortField === 'timestamp') {
      aVal = new Date(aVal)?.getTime();
      bVal = new Date(bVal)?.getTime();
    } else if (sortField === 'amount') {
      aVal = parseFloat(aVal);
      bVal = parseFloat(bVal);
    }
    
    return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { class: 'success', label: 'Completed' },
      pending: { class: 'warning', label: 'Pending' },
      failed: { class: 'error', label: 'Failed' },
      refunded: { class: 'info', label: 'Refunded' }
    };
    
    const config = statusConfig?.[status] || statusConfig?.pending;
    return <span className={`status-badge ${config?.class}`}>{config?.label}</span>;
  };

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl font-semibold text-foreground">Recent Transactions</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e?.target?.value)}
            className="px-4 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>
          <Button variant="outline" iconName="Download" iconPosition="left" onClick={onExport}>
            Export
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th 
                className="cursor-pointer hover:text-foreground"
                onClick={() => handleSort('transactionId')}
              >
                <div className="flex items-center">
                  Transaction ID
                  <Icon name="ArrowUpDown" size={14} className="ml-1" />
                </div>
              </th>
              <th 
                className="cursor-pointer hover:text-foreground"
                onClick={() => handleSort('timestamp')}
              >
                <div className="flex items-center">
                  Date & Time
                  <Icon name="ArrowUpDown" size={14} className="ml-1" />
                </div>
              </th>
              <th>Card ID</th>
              <th>Customer</th>
              <th>Plan Type</th>
              <th 
                className="cursor-pointer hover:text-foreground"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center">
                  Amount
                  <Icon name="ArrowUpDown" size={14} className="ml-1" />
                </div>
              </th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions?.map((txn) => (
              <tr key={txn?.transactionId}>
                <td className="font-mono text-xs">{txn?.transactionId}</td>
                <td className="text-sm whitespace-nowrap">{txn?.timestamp}</td>
                <td className="font-mono text-xs">{txn?.cardId}</td>
                <td>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{txn?.customerName}</span>
                    <span className="text-xs text-muted-foreground">{txn?.customerEmail}</span>
                  </div>
                </td>
                <td>
                  <span className="text-sm font-medium">{txn?.planType}</span>
                </td>
                <td className="font-semibold whitespace-nowrap">{txn?.amount}</td>
                <td>
                  <div className="flex items-center">
                    <Icon name="Smartphone" size={16} className="mr-2 text-muted-foreground" />
                    <span className="text-sm">{txn?.paymentMethod}</span>
                  </div>
                </td>
                <td>{getStatusBadge(txn?.status)}</td>
                <td>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    iconName="Eye"
                    onClick={() => onViewDetails(txn)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;