import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ onApplyFilters, onResetFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: '30days',
    cardType: 'all',
    region: 'all',
    planType: 'all'
  });

  const dateRangeOptions = [
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: '90days', label: 'Last 90 Days' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const cardTypeOptions = [
    { value: 'all', label: 'All Card Types' },
    { value: 'physical', label: 'Physical Cards' },
    { value: 'digital', label: 'Digital Cards' },
    { value: 'nfc', label: 'NFC Cards' }
  ];

  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'north', label: 'North India' },
    { value: 'south', label: 'South India' },
    { value: 'east', label: 'East India' },
    { value: 'west', label: 'West India' },
    { value: 'central', label: 'Central India' }
  ];

  const planTypeOptions = [
    { value: 'all', label: 'All Plans' },
    { value: 'basic', label: 'Basic Plan' },
    { value: 'premium', label: 'Premium Plan' },
    { value: 'enterprise', label: 'Enterprise Plan' }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    setIsExpanded(false);
  };

  const handleReset = () => {
    const resetFilters = {
      dateRange: '30days',
      cardType: 'all',
      region: 'all',
      planType: 'all'
    };
    setFilters(resetFilters);
    onResetFilters();
  };

  return (
    <div className="dashboard-widget mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} color="var(--color-primary)" />
          <h3 className="text-lg font-semibold text-foreground">Advanced Filters</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
        >
          <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={20} />
        </button>
      </div>
      {isExpanded && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              label="Date Range"
              options={dateRangeOptions}
              value={filters?.dateRange}
              onChange={(value) => handleFilterChange('dateRange', value)}
            />

            <Select
              label="Card Type"
              options={cardTypeOptions}
              value={filters?.cardType}
              onChange={(value) => handleFilterChange('cardType', value)}
            />

            <Select
              label="Geographic Region"
              options={regionOptions}
              value={filters?.region}
              onChange={(value) => handleFilterChange('region', value)}
            />

            <Select
              label="Plan Type"
              options={planTypeOptions}
              value={filters?.planType}
              onChange={(value) => handleFilterChange('planType', value)}
            />
          </div>

          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={handleReset}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Reset Filters
            </Button>
            <Button
              variant="default"
              onClick={handleApply}
              iconName="Check"
              iconPosition="left"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;