import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const CardTable = ({ cards, onCardSelect, onViewDetails, onStatusChange, selectedCards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(cards?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cards?.slice(startIndex, endIndex);

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', className: 'status-badge success' },
      inactive: { label: 'Inactive', className: 'status-badge' },
      expired: { label: 'Expired', className: 'status-badge error' },
      suspended: { label: 'Suspended', className: 'status-badge warning' },
      pending: { label: 'Pending', className: 'status-badge warning' }
    };

    const config = statusConfig?.[status] || statusConfig?.inactive;
    return <span className={config?.className}>{config?.label}</span>;
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      onCardSelect(currentCards?.map(card => card?.id));
    } else {
      onCardSelect([]);
    }
  };

  const handleSelectCard = (cardId, checked) => {
    if (checked) {
      onCardSelect([...selectedCards, cardId]);
    } else {
      onCardSelect(selectedCards?.filter(id => id !== cardId));
    }
  };

  const isAllSelected = currentCards?.length > 0 && currentCards?.every(card => selectedCards?.includes(card?.id));

  return (
    <div className="bg-card rounded-lg border border-border shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e?.target?.checked)}
                  aria-label="Select all cards"
                />
              </th>
              <th>Card ID</th>
              <th>Owner Details</th>
              <th>Vehicle Info</th>
              <th>Plan Type</th>
              <th>Status</th>
              <th>Activation Date</th>
              <th>Expiry Date</th>
              <th>Last Activity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCards?.map((card) => (
              <tr key={card?.id}>
                <td>
                  <Checkbox
                    checked={selectedCards?.includes(card?.id)}
                    onChange={(e) => handleSelectCard(card?.id, e?.target?.checked)}
                    aria-label={`Select card ${card?.cardId}`}
                  />
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <Icon name="CreditCard" size={16} className="text-primary" />
                    <span className="font-mono text-sm font-medium text-foreground">
                      {card?.cardId}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={card?.ownerAvatar}
                      alt={card?.ownerAvatarAlt}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">{card?.ownerName}</p>
                      <p className="text-xs text-muted-foreground">{card?.ownerPhone}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="text-sm font-medium text-foreground">{card?.vehicleNumber}</p>
                    <p className="text-xs text-muted-foreground">{card?.vehicleModel}</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="text-sm font-medium text-foreground">{card?.planType}</p>
                    <p className="text-xs text-muted-foreground">{card?.planPrice}</p>
                  </div>
                </td>
                <td>{getStatusBadge(card?.status)}</td>
                <td>
                  <p className="text-sm text-foreground whitespace-nowrap">{card?.activationDate}</p>
                </td>
                <td>
                  <p className="text-sm text-foreground whitespace-nowrap">{card?.expiryDate}</p>
                </td>
                <td>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{card?.lastActivity}</p>
                </td>
                <td>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => onViewDetails(card)}
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      aria-label="View details"
                    >
                      <Icon name="Eye" size={16} />
                    </button>
                    <button
                      onClick={() => onStatusChange(card)}
                      className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                      aria-label="Change status"
                    >
                      <Icon name="Edit" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          Showing {startIndex + 1} to {Math.min(endIndex, cards?.length)} of {cards?.length} cards
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronLeft"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-lg text-sm font-medium transition-colors
                    ${currentPage === pageNum
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                    }
                  `}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronRight"
            iconPosition="right"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardTable;