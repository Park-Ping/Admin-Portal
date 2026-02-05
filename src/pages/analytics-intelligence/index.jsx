import { useState } from 'react';
import MainLayout from '../../components/ui/MainLayout';
import MetricCard from './components/MetricCard';
import UsageChart from './components/UsageChart';
import GeographicDistribution from './components/GeographicDistribution';
import PeakTimeAnalysis from './components/PeakTimeAnalysis';
import RevenueAnalysis from './components/RevenueAnalysis';
import PerformanceMetrics from './components/PerformanceMetrics';
import FilterPanel from './components/FilterPanel';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AnalyticsIntelligence = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const keyMetrics = [
    {
      title: "Total Card Scans",
      value: "45,892",
      change: "+18.2%",
      changeType: "positive",
      icon: "Scan",
      iconColor: "var(--color-primary)",
      trend: "+2,341 scans"
    },
    {
      title: "Active Users",
      value: "12,456",
      change: "+12.5%",
      changeType: "positive",
      icon: "Users",
      iconColor: "var(--color-info)",
      trend: "+1,389 users"
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      change: "-8.3%",
      changeType: "positive",
      icon: "Zap",
      iconColor: "var(--color-warning)",
      trend: "0.1s faster"
    },
    {
      title: "Success Rate",
      value: "98.7%",
      change: "+2.1%",
      changeType: "positive",
      icon: "CheckCircle2",
      iconColor: "var(--color-success)",
      trend: "+0.9% improvement"
    }
  ];

  const usageData = [
    { name: "Jan", scans: 3200, activations: 890, contacts: 2450 },
    { name: "Feb", scans: 3800, activations: 1020, contacts: 2890 },
    { name: "Mar", scans: 4200, activations: 1150, contacts: 3200 },
    { name: "Apr", scans: 3900, activations: 980, contacts: 2950 },
    { name: "May", scans: 4500, activations: 1280, contacts: 3450 },
    { name: "Jun", scans: 5100, activations: 1450, contacts: 3890 },
    { name: "Jul", scans: 5600, activations: 1580, contacts: 4200 },
    { name: "Aug", scans: 5200, activations: 1420, contacts: 3950 },
    { name: "Sep", scans: 5800, activations: 1650, contacts: 4450 },
    { name: "Oct", scans: 6200, activations: 1780, contacts: 4780 },
    { name: "Nov", scans: 6500, activations: 1890, contacts: 5020 },
    { name: "Dec", scans: 6800, activations: 1950, contacts: 5280 }
  ];

  const geographicData = [
    { name: "Mumbai", value: 8500, percentage: 28.5 },
    { name: "Delhi NCR", value: 7200, percentage: 24.1 },
    { name: "Bangalore", value: 6800, percentage: 22.8 },
    { name: "Hyderabad", value: 3900, percentage: 13.1 },
    { name: "Pune", value: 2100, percentage: 7.0 },
    { name: "Others", value: 1350, percentage: 4.5 }
  ];

  const peakTimeData = [
    { hour: "12 AM", scans: 120, avgDuration: 2.1 },
    { hour: "3 AM", scans: 80, avgDuration: 1.8 },
    { hour: "6 AM", scans: 450, avgDuration: 2.5 },
    { hour: "9 AM", scans: 1850, avgDuration: 3.2 },
    { hour: "12 PM", scans: 2200, avgDuration: 2.8 },
    { hour: "3 PM", scans: 1950, avgDuration: 2.9 },
    { hour: "6 PM", scans: 2450, avgDuration: 3.5 },
    { hour: "9 PM", scans: 1200, avgDuration: 2.4 }
  ];

  const revenueData = [
    { month: "Jan", basic: 45000, premium: 89000, enterprise: 156000 },
    { month: "Feb", basic: 52000, premium: 95000, enterprise: 178000 },
    { month: "Mar", basic: 58000, premium: 102000, enterprise: 195000 },
    { month: "Apr", basic: 54000, premium: 98000, enterprise: 182000 },
    { month: "May", basic: 62000, premium: 108000, enterprise: 205000 },
    { month: "Jun", basic: 68000, premium: 115000, enterprise: 225000 },
    { month: "Jul", basic: 72000, premium: 122000, enterprise: 238000 },
    { month: "Aug", basic: 69000, premium: 118000, enterprise: 228000 },
    { month: "Sep", basic: 75000, premium: 128000, enterprise: 248000 },
    { month: "Oct", basic: 82000, premium: 135000, enterprise: 265000 },
    { month: "Nov", basic: 88000, premium: 142000, enterprise: 278000 },
    { month: "Dec", basic: 95000, premium: 152000, enterprise: 295000 }
  ];

  const performanceMetrics = [
    {
      name: "System Uptime",
      description: "Service availability",
      value: "99.8%",
      target: "Target: 99.5%",
      percentage: 99.8,
      status: "excellent",
      trend: "up",
      change: "+0.2%"
    },
    {
      name: "API Response Time",
      description: "Average latency",
      value: "145ms",
      target: "Target: &lt;200ms",
      percentage: 72.5,
      status: "good",
      trend: "down",
      change: "-12ms"
    },
    {
      name: "Error Rate",
      description: "Failed requests",
      value: "0.3%",
      target: "Target: &lt;1%",
      percentage: 30,
      status: "excellent",
      trend: "down",
      change: "-0.1%"
    },
    {
      name: "Customer Satisfaction",
      description: "User feedback score",
      value: "4.7/5",
      target: "Target: 4.5/5",
      percentage: 94,
      status: "excellent",
      trend: "up",
      change: "+0.2"
    }
  ];

  const predictiveData = [
    { month: "Jan", actual: 3200, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Feb", actual: 3800, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Mar", actual: 4200, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Apr", actual: 3900, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "May", actual: 4500, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Jun", actual: 5100, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Jul", actual: 5600, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Aug", actual: 5200, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Sep", actual: 5800, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Oct", actual: 6200, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Nov", actual: 6500, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Dec", actual: 6800, predicted: null, upperBound: null, lowerBound: null, isPrediction: false },
    { month: "Jan \'26", actual: null, predicted: 7200, upperBound: 7800, lowerBound: 6600, isPrediction: true, confidence: 87 },
    { month: "Feb \'26", actual: null, predicted: 7600, upperBound: 8300, lowerBound: 6900, isPrediction: true, confidence: 85 },
    { month: "Mar \'26", actual: null, predicted: 8100, upperBound: 8900, lowerBound: 7300, isPrediction: true, confidence: 83 },
    { month: "Apr \'26", actual: null, predicted: 8500, upperBound: 9400, lowerBound: 7600, isPrediction: true, confidence: 81 }
  ];

  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters);
  };

  const handleResetFilters = () => {
    console.log("Filters reset");
  };

  const handleExportReport = () => {
    console.log("Exporting analytics report...");
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'usage', label: 'Usage Patterns', icon: 'Activity' },
    { id: 'revenue', label: 'Revenue Analysis', icon: 'DollarSign' },
    { id: 'performance', label: 'Performance', icon: 'Gauge' },
    { id: 'predictive', label: 'Predictive Analytics', icon: 'TrendingUp' }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Analytics Intelligence
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Data-driven insights for strategic business decisions and operational optimization
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              iconName="RefreshCw"
              iconPosition="left"
              onClick={() => window.location?.reload()}
            >
              Refresh Data
            </Button>
            <Button
              variant="default"
              iconName="Download"
              iconPosition="left"
              onClick={handleExportReport}
            >
              Export Report
            </Button>
          </div>
        </div>

        <FilterPanel 
          onApplyFilters={handleApplyFilters}
          onResetFilters={handleResetFilters}
        />

        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`
                flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all
                ${activeTab === tab?.id 
                  ? 'bg-primary/10 text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }
              `}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="hidden sm:inline">{tab?.label}</span>
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {keyMetrics?.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <UsageChart
                title="Monthly Usage Trends"
                data={usageData}
                dataKeys={['scans', 'activations', 'contacts']}
                colors={['#22C55E', '#3B82F6', '#F59E0B']}
              />
              <GeographicDistribution
                title="Geographic Distribution"
                data={geographicData}
              />
            </div>

            <PeakTimeAnalysis
              title="Peak Time Analysis"
              data={peakTimeData}
            />
          </>
        )}

        {activeTab === 'usage' && (
          <>
            <UsageChart
              title="Detailed Usage Patterns"
              data={usageData}
              dataKeys={['scans', 'activations', 'contacts']}
              colors={['#22C55E', '#3B82F6', '#F59E0B']}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <PeakTimeAnalysis
                title="Hourly Usage Distribution"
                data={peakTimeData}
              />
              <GeographicDistribution
                title="Regional Usage Breakdown"
                data={geographicData}
              />
            </div>
          </>
        )}

        {activeTab === 'revenue' && (
          <>
            <RevenueAnalysis
              title="Revenue by Plan Type"
              data={revenueData}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <MetricCard
                title="Total Revenue"
                value="₹8.2M"
                change="+24.5%"
                changeType="positive"
                icon="DollarSign"
                iconColor="var(--color-success)"
                trend="₹1.6M increase"
              />
              <MetricCard
                title="Avg. Revenue Per User"
                value="₹658"
                change="+12.3%"
                changeType="positive"
                icon="TrendingUp"
                iconColor="var(--color-primary)"
                trend="₹72 increase"
              />
              <MetricCard
                title="Revenue Growth Rate"
                value="18.7%"
                change="+3.2%"
                changeType="positive"
                icon="BarChart3"
                iconColor="var(--color-info)"
                trend="Quarterly growth"
              />
            </div>
          </>
        )}

        {activeTab === 'performance' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <PerformanceMetrics
                title="System Performance Metrics"
                metrics={performanceMetrics}
              />
              <div className="space-y-4 md:space-y-6">
                <div className="dashboard-widget">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Performance Summary</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-success/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Overall Health Score</span>
                        <span className="status-badge success">Excellent</span>
                      </div>
                      <p className="text-3xl font-bold text-success">94.2%</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Avg. Load Time</p>
                        <p className="text-xl font-semibold text-foreground">1.8s</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Peak Capacity</p>
                        <p className="text-xl font-semibold text-foreground">85%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dashboard-widget">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Recent Alerts</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg">
                      <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">System Update Completed</p>
                        <p className="text-xs text-muted-foreground mt-1">All services running optimally</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-warning/5 rounded-lg">
                      <Icon name="AlertTriangle" size={16} color="var(--color-warning)" className="mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">High Traffic Detected</p>
                        <p className="text-xs text-muted-foreground mt-1">Peak usage at 6:00 PM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'predictive' && (
          <>
            <PredictiveAnalytics
              title="Usage Forecast & Predictions"
              data={predictiveData}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="dashboard-widget">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="Target" size={20} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Growth Opportunities</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Market Expansion</p>
                    <p className="text-xs text-muted-foreground">Tier-2 cities showing 35% growth potential</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Premium Upgrades</p>
                    <p className="text-xs text-muted-foreground">28% of basic users likely to upgrade</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Peak Season</p>
                    <p className="text-xs text-muted-foreground">Q2 2026 expected 40% increase</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-widget">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Icon name="AlertCircle" size={20} color="var(--color-warning)" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Risk Factors</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Capacity Planning</p>
                    <p className="text-xs text-muted-foreground">Infrastructure scaling needed by Q2</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Churn Risk</p>
                    <p className="text-xs text-muted-foreground">12% of users showing low engagement</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Competition</p>
                    <p className="text-xs text-muted-foreground">New entrants in 3 major markets</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-widget">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Icon name="Lightbulb" size={20} color="var(--color-success)" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Recommendations</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Feature Launch</p>
                    <p className="text-xs text-muted-foreground">NFC integration could boost adoption 25%</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Pricing Strategy</p>
                    <p className="text-xs text-muted-foreground">Bundle offers may increase revenue 18%</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Marketing Focus</p>
                    <p className="text-xs text-muted-foreground">Target corporate segment for enterprise plans</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default AnalyticsIntelligence;