import { useState } from 'react';
import Sidebar from '../../components/ui/Sidebar';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import MetricCard from './components/MetricCard';
import RevenueChart from './components/RevenueChart';
import ActivityFeed from './components/ActivityFeed';
import QuickActions from './components/QuickActions';
import SystemHealth from './components/SystemHealth';
import TopPerformers from './components/TopPerformers';

const ExecutiveDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [dateRange, setDateRange] = useState('today');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const keyMetrics = [
    {
      title: 'Total Active Cards',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: 'CreditCard',
      iconColor: 'var(--color-primary)',
      description: 'vs last month'
    },
    {
      title: 'Monthly Revenue',
      value: '₹6,98,500',
      change: '+18.3%',
      changeType: 'positive',
      icon: 'DollarSign',
      iconColor: 'var(--color-success)',
      description: 'vs last month'
    },
    {
      title: 'Active Users',
      value: '1,923',
      change: '+8.7%',
      changeType: 'positive',
      icon: 'Users',
      iconColor: 'var(--color-info)',
      description: 'vs last month'
    },
    {
      title: 'Success Rate',
      value: '98.4%',
      change: '+2.1%',
      changeType: 'positive',
      icon: 'TrendingUp',
      iconColor: 'var(--color-trust)',
      description: 'vs last month'
    }
  ];

  const planDistribution = [
    {
      plan: 'Basic Plan',
      count: 1245,
      percentage: 43.7,
      revenue: '₹1,05,000',
      color: '#3B82F6'
    },
    {
      plan: 'Premium Plan',
      count: 982,
      percentage: 34.5,
      revenue: '₹2,35,500',
      color: '#22C55E'
    },
    {
      plan: 'Enterprise Plan',
      count: 620,
      percentage: 21.8,
      revenue: '₹3,58,000',
      color: '#8B5CF6'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggleCollapse={toggleSidebar} />
      <div className={`transition-all duration-300 ease-smooth ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <Header />

        <main className="pt-16 min-h-screen">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 md:mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Executive Dashboard
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Real-time operational insights and business intelligence
                </p>
              </div>

              <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e?.target?.value)}
                  className="px-4 py-2 text-sm font-medium bg-card text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>

                <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                  <Icon name="Download" size={16} className="mr-2" />
                  Export Report
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {keyMetrics?.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>

              <div className="dashboard-widget">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Plan Distribution</h3>
                  <p className="text-sm text-muted-foreground">Active cards by subscription tier</p>
                </div>

                <div className="space-y-4">
                  {planDistribution?.map((plan, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: plan?.color }}
                          />
                          <span className="text-sm font-medium text-foreground">{plan?.plan}</span>
                        </div>
                        <span className="text-sm font-semibold text-foreground">{plan?.count}</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${plan?.percentage}%`,
                            backgroundColor: plan?.color
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{plan?.percentage}% of total</span>
                        <span className="font-semibold text-foreground">{plan?.revenue}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Total Revenue</span>
                    <span className="text-lg font-bold text-primary">₹6,98,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <ActivityFeed />
              <QuickActions />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2">
                <SystemHealth />
              </div>
              <TopPerformers />
            </div>
          </div>
        </main>
      </div>
      <button
        className="floating-action-button"
        aria-label="Quick actions menu"
      >
        <Icon name="Plus" size={24} />
      </button>
    </div>
  );
};

export default ExecutiveDashboard;