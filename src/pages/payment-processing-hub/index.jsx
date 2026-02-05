import { useState } from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '../../components/ui/MainLayout';
import PaymentStatsCard from './components/PaymentStatsCard';
import TransactionTable from './components/TransactionTable';
import PaymentAnalyticsChart from './components/PaymentAnalyticsChart';
import ReconciliationPanel from './components/ReconciliationPanel';
import DisputeManagement from './components/DisputeManagement';
import RevenueForecasting from './components/RevenueForecasting';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const PaymentProcessingHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('today');

  const paymentStats = [
    {
      title: 'Total Revenue',
      value: '₹8,45,230',
      change: '+12.5% from yesterday',
      changeType: 'positive',
      icon: 'DollarSign',
      iconBg: 'bg-primary/10'
    },
    {
      title: 'Successful Transactions',
      value: '1,847',
      change: '+8.2% from yesterday',
      changeType: 'positive',
      icon: 'CheckCircle',
      iconBg: 'bg-success/10'
    },
    {
      title: 'Pending Payments',
      value: '23',
      change: '-15% from yesterday',
      changeType: 'positive',
      icon: 'Clock',
      iconBg: 'bg-warning/10'
    },
    {
      title: 'Failed Transactions',
      value: '12',
      change: '+3 from yesterday',
      changeType: 'negative',
      icon: 'XCircle',
      iconBg: 'bg-error/10'
    }
  ];

  const transactions = [
    {
      transactionId: 'TXN-2026-001847',
      timestamp: '19/01/2026 11:45 AM',
      cardId: 'CARD-2026-00234',
      customerName: 'Rajesh Kumar',
      customerEmail: 'rajesh.kumar@email.com',
      planType: 'Premium Annual',
      amount: '₹4,999',
      paymentMethod: 'PhonePe UPI',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2026-001846',
      timestamp: '19/01/2026 11:32 AM',
      cardId: 'CARD-2026-00233',
      customerName: 'Priya Sharma',
      customerEmail: 'priya.sharma@email.com',
      planType: 'Basic Monthly',
      amount: '₹299',
      paymentMethod: 'PhonePe UPI',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2026-001845',
      timestamp: '19/01/2026 11:18 AM',
      cardId: 'CARD-2026-00232',
      customerName: 'Amit Patel',
      customerEmail: 'amit.patel@email.com',
      planType: 'Standard Quarterly',
      amount: '₹899',
      paymentMethod: 'PhonePe Wallet',
      status: 'pending'
    },
    {
      transactionId: 'TXN-2026-001844',
      timestamp: '19/01/2026 11:05 AM',
      cardId: 'CARD-2026-00231',
      customerName: 'Sneha Reddy',
      customerEmail: 'sneha.reddy@email.com',
      planType: 'Premium Annual',
      amount: '₹4,999',
      paymentMethod: 'PhonePe UPI',
      status: 'failed'
    },
    {
      transactionId: 'TXN-2026-001843',
      timestamp: '19/01/2026 10:52 AM',
      cardId: 'CARD-2026-00230',
      customerName: 'Vikram Singh',
      customerEmail: 'vikram.singh@email.com',
      planType: 'Basic Monthly',
      amount: '₹299',
      paymentMethod: 'PhonePe UPI',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2026-001842',
      timestamp: '19/01/2026 10:38 AM',
      cardId: 'CARD-2026-00229',
      customerName: 'Ananya Iyer',
      customerEmail: 'ananya.iyer@email.com',
      planType: 'Standard Quarterly',
      amount: '₹899',
      paymentMethod: 'PhonePe UPI',
      status: 'refunded'
    },
    {
      transactionId: 'TXN-2026-001841',
      timestamp: '19/01/2026 10:25 AM',
      cardId: 'CARD-2026-00228',
      customerName: 'Karthik Menon',
      customerEmail: 'karthik.menon@email.com',
      planType: 'Premium Annual',
      amount: '₹4,999',
      paymentMethod: 'PhonePe Wallet',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2026-001840',
      timestamp: '19/01/2026 10:12 AM',
      cardId: 'CARD-2026-00227',
      customerName: 'Divya Nair',
      customerEmail: 'divya.nair@email.com',
      planType: 'Basic Monthly',
      amount: '₹299',
      paymentMethod: 'PhonePe UPI',
      status: 'pending'
    }
  ];

  const analyticsData = [
    { date: '13 Jan', revenue: 685000, transactions: 1523 },
    { date: '14 Jan', revenue: 720000, transactions: 1687 },
    { date: '15 Jan', revenue: 695000, transactions: 1598 },
    { date: '16 Jan', revenue: 780000, transactions: 1842 },
    { date: '17 Jan', revenue: 825000, transactions: 1956 },
    { date: '18 Jan', revenue: 795000, transactions: 1823 },
    { date: '19 Jan', revenue: 845230, transactions: 1847 }
  ];

  const unmatchedTransactions = [
    {
      transactionId: 'TXN-2026-001838',
      timestamp: '19/01/2026 09:45 AM',
      amount: '₹4,999',
      phonePeRef: 'PP-REF-2026-45678',
      cardId: null,
      customerName: 'Unknown Customer',
      issue: 'Card ID Missing'
    },
    {
      transactionId: 'TXN-2026-001835',
      timestamp: '19/01/2026 09:12 AM',
      amount: '₹899',
      phonePeRef: 'PP-REF-2026-45675',
      cardId: 'CARD-2026-00225',
      customerName: 'Rohit Verma',
      issue: 'Amount Mismatch'
    },
    {
      transactionId: 'TXN-2026-001832',
      timestamp: '19/01/2026 08:38 AM',
      amount: '₹299',
      phonePeRef: 'PP-REF-2026-45672',
      cardId: 'CARD-2026-00223',
      customerName: 'Meera Joshi',
      issue: 'Duplicate Entry'
    }
  ];

  const disputes = [
    {
      disputeId: 'DSP-2026-00045',
      transactionId: 'TXN-2026-001820',
      customerName: 'Arjun Malhotra',
      amount: '₹4,999',
      reason: 'Unauthorized Transaction',
      description: 'Customer claims they did not authorize this payment and requests immediate refund',
      priority: 'high',
      openedDate: '18/01/2026',
      age: '1 day'
    },
    {
      disputeId: 'DSP-2026-00044',
      transactionId: 'TXN-2026-001815',
      customerName: 'Kavya Desai',
      amount: '₹899',
      reason: 'Service Not Received',
      description: 'Payment completed but card activation failed. Customer unable to use service',
      priority: 'medium',
      openedDate: '17/01/2026',
      age: '2 days'
    },
    {
      disputeId: 'DSP-2026-00043',
      transactionId: 'TXN-2026-001808',
      customerName: 'Sanjay Gupta',
      amount: '₹299',
      reason: 'Duplicate Charge',
      description: 'Customer charged twice for the same subscription period',
      priority: 'low',
      openedDate: '16/01/2026',
      age: '3 days'
    }
  ];

  const historicalData = [
    { date: '12 Jan', revenue: 650000, isForecast: false },
    { date: '13 Jan', revenue: 685000, isForecast: false },
    { date: '14 Jan', revenue: 720000, isForecast: false },
    { date: '15 Jan', revenue: 695000, isForecast: false },
    { date: '16 Jan', revenue: 780000, isForecast: false },
    { date: '17 Jan', revenue: 825000, isForecast: false },
    { date: '18 Jan', revenue: 795000, isForecast: false },
    { date: '19 Jan', revenue: 845230, isForecast: false }
  ];

  const forecastData = [
    { date: '20 Jan', revenue: 880000, isForecast: true },
    { date: '21 Jan', revenue: 920000, isForecast: true },
    { date: '22 Jan', revenue: 895000, isForecast: true },
    { date: '23 Jan', revenue: 950000, isForecast: true },
    { date: '24 Jan', revenue: 985000, isForecast: true },
    { date: '25 Jan', revenue: 1020000, isForecast: true },
    { date: '26 Jan', revenue: 1050000, isForecast: true }
  ];

  const handleViewDetails = (transaction) => {
    console.log('View transaction details:', transaction);
  };

  const handleExport = () => {
    console.log('Exporting transactions...');
  };

  const handleReconcile = (transactionIds, mode) => {
    console.log('Reconciling transactions:', transactionIds, 'Mode:', mode);
  };

  const handleResolveDispute = (disputeId, resolutionNote) => {
    console.log('Resolving dispute:', disputeId, 'Note:', resolutionNote);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'transactions', label: 'Transactions', icon: 'Receipt' },
    { id: 'reconciliation', label: 'Reconciliation', icon: 'GitCompare' },
    { id: 'disputes', label: 'Disputes', icon: 'AlertTriangle' },
    { id: 'forecasting', label: 'Forecasting', icon: 'TrendingUp' }
  ];

  return (
    <>
      <Helmet>
        <title>Payment Processing Hub - ParkPing Admin Dashboard</title>
        <meta name="description" content="Monitor PhonePe transactions, reconcile payments, manage disputes, and analyze revenue trends in real-time" />
      </Helmet>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Payment Processing Hub
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Real-time payment monitoring and financial operations management
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e?.target?.value)}
                className="px-4 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <Button variant="default" iconName="RefreshCw" iconPosition="left">
                Refresh Data
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {paymentStats?.map((stat, index) => (
              <PaymentStatsCard key={index} {...stat} />
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex overflow-x-auto border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`
                    flex items-center px-4 md:px-6 py-3 md:py-4 text-sm font-medium whitespace-nowrap flex-shrink-0
                    transition-all border-b-2
                    ${activeTab === tab?.id
                      ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={tab?.icon} size={18} className="mr-2" />
                  {tab?.label}
                </button>
              ))}
            </div>

            <div className="p-4 md:p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <PaymentAnalyticsChart 
                    data={analyticsData} 
                    title="Revenue & Transaction Trends"
                  />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    <div className="dashboard-widget">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-semibold text-foreground">Payment Methods</h3>
                        <Icon name="CreditCard" size={20} color="var(--color-primary)" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">PhonePe UPI</span>
                          <span className="text-sm font-semibold">78%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">PhonePe Wallet</span>
                          <span className="text-sm font-semibold">22%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: '22%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="dashboard-widget">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-semibold text-foreground">Success Rate</h3>
                        <Icon name="Target" size={20} color="var(--color-success)" />
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-success mb-2">98.7%</div>
                        <p className="text-sm text-muted-foreground">Transaction Success Rate</p>
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Failed</span>
                            <span className="font-semibold text-error">1.3%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dashboard-widget">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-semibold text-foreground">Avg. Transaction</h3>
                        <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-foreground mb-2">₹1,247</div>
                        <p className="text-sm text-muted-foreground">Average Transaction Value</p>
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">vs Last Week</span>
                            <span className="font-semibold text-success">+8.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transactions' && (
                <TransactionTable 
                  transactions={transactions}
                  onViewDetails={handleViewDetails}
                  onExport={handleExport}
                />
              )}

              {activeTab === 'reconciliation' && (
                <ReconciliationPanel 
                  unmatchedTransactions={unmatchedTransactions}
                  onReconcile={handleReconcile}
                />
              )}

              {activeTab === 'disputes' && (
                <DisputeManagement 
                  disputes={disputes}
                  onResolveDispute={handleResolveDispute}
                />
              )}

              {activeTab === 'forecasting' && (
                <RevenueForecasting 
                  historicalData={historicalData}
                  forecastData={forecastData}
                />
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PaymentProcessingHub;