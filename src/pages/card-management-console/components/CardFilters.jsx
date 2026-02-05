import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const CardFilters = ({ onFilterChange, onSearch, onReset }) => {
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    planType: '',
    dateRange: '',
    sortBy: 'newest'
  });

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'expired', label: 'Expired' },
    { value: 'suspended', label: 'Suspended' },
    { value: 'pending', label: 'Pending Activation' }
  ];

  const planTypeOptions = [
    { value: '', label: 'All Plans' },
    { value: 'basic', label: 'Basic Plan (₹299)' },
    { value: 'premium', label: 'Premium Plan (₹599)' },
    { value: 'enterprise', label: 'Enterprise Plan (₹999)' }
  ];

  const dateRangeOptions = [
    { value: '', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
    { value: 'quarter', label: 'Last 90 Days' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'cardId', label: 'Card ID (A-Z)' },
    { value: 'expiryDate', label: 'Expiry Date' },
    { value: 'lastActivity', label: 'Last Activity' }
  ];

  const handleFilterChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearch = () => {
    onSearch(filters?.search);
  };

  const handleReset = () => {
    const resetFilters = {
      search: '',
      status: '',
      planType: '',
      dateRange: '',
      sortBy: 'newest'
    };
    setFilters(resetFilters);
    onReset();
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-card mb-4 md:mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 lg:mb-0">
          Filter & Search Cards
        </h2>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={handleReset}
          >
            Reset Filters
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search by Card ID, Phone, or Vehicle Number..."
              value={filters?.search}
              onChange={(e) => handleFilterChange('search', e?.target?.value)}
              onKeyPress={handleKeyPress}
              className="pr-10"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Icon name="Search" size={20} />
            </button>
          </div>
        </div>

        <Select
          label="Status"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => handleFilterChange('status', value)}
        />

        <Select
          label="Plan Type"
          options={planTypeOptions}
          value={filters?.planType}
          onChange={(value) => handleFilterChange('planType', value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select
          label="Date Range"
          options={dateRangeOptions}
          value={filters?.dateRange}
          onChange={(value) => handleFilterChange('dateRange', value)}
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => handleFilterChange('sortBy', value)}
        />

        <div className="flex items-end">
          <Button
            variant="default"
            fullWidth
            iconName="Filter"
            iconPosition="left"
            onClick={handleSearch}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardFilters;