import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BulkActionsBar = ({ selectedCount, onActivate, onDeactivate, onSuspend, onExport, onClearSelection }) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slide-up">
      <div className="bg-card border border-border rounded-lg shadow-elevated px-4 md:px-6 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={18} color="var(--color-primary)" />
            </div>
            <span className="text-sm md:text-base font-medium text-foreground">
              {selectedCount} card{selectedCount > 1 ? 's' : ''} selected
            </span>
          </div>

          <div className="h-px md:h-6 w-full md:w-px bg-border" />

          <div className="flex items-center space-x-2 flex-wrap justify-center">
            <Button
              variant="outline"
              size="sm"
              iconName="CheckCircle"
              iconPosition="left"
              onClick={onActivate}
            >
              Activate
            </Button>

            <Button
              variant="outline"
              size="sm"
              iconName="XCircle"
              iconPosition="left"
              onClick={onDeactivate}
            >
              Deactivate
            </Button>

            <Button
              variant="outline"
              size="sm"
              iconName="AlertTriangle"
              iconPosition="left"
              onClick={onSuspend}
            >
              Suspend
            </Button>

            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              onClick={onExport}
            >
              Export
            </Button>

            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClearSelection}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkActionsBar;