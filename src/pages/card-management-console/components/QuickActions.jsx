import Icon from '../../../components/AppIcon';


const QuickActions = ({ onNewCard, onBulkImport, onExportAll, onScanBarcode }) => {
  const actions = [
    {
      id: 1,
      label: 'New Card',
      icon: 'Plus',
      color: 'bg-primary',
      onClick: onNewCard
    },
    {
      id: 2,
      label: 'Bulk Import',
      icon: 'Upload',
      color: 'bg-info',
      onClick: onBulkImport
    },
    {
      id: 3,
      label: 'Export All',
      icon: 'Download',
      color: 'bg-success',
      onClick: onExportAll
    },
    {
      id: 4,
      label: 'Scan Barcode',
      icon: 'ScanLine',
      color: 'bg-warning',
      onClick: onScanBarcode
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
      {actions?.map((action) => (
        <button
          key={action?.id}
          onClick={action?.onClick}
          className="bg-card border border-border rounded-lg p-4 hover:shadow-interactive transition-all duration-300 group"
        >
          <div className={`${action?.color} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
            <Icon name={action?.icon} size={20} color="#FFFFFF" />
          </div>
          <p className="text-sm font-medium text-foreground">{action?.label}</p>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;