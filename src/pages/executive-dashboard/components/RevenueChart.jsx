import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const RevenueChart = () => {
  const [timeRange, setTimeRange] = useState('7days');

  const revenueData = [
    { date: '13 Jan', basic: 12500, premium: 28000, enterprise: 45000 },
    { date: '14 Jan', basic: 15000, premium: 32000, enterprise: 48000 },
    { date: '15 Jan', basic: 13800, premium: 29500, enterprise: 52000 },
    { date: '16 Jan', basic: 16200, premium: 35000, enterprise: 49000 },
    { date: '17 Jan', basic: 14500, premium: 31000, enterprise: 51000 },
    { date: '18 Jan', basic: 17800, premium: 38000, enterprise: 55000 },
    { date: '19 Jan', basic: 19200, premium: 42000, enterprise: 58000 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const total = payload?.reduce((sum, entry) => sum + entry?.value, 0);
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between space-x-4 mb-1">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: entry?.color }}
                />
                <span className="text-xs text-muted-foreground capitalize">{entry?.name}:</span>
              </div>
              <span className="text-xs font-medium text-foreground">₹{entry?.value?.toLocaleString('en-IN')}</span>
            </div>
          ))}
          <div className="border-t border-border mt-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-foreground">Total:</span>
              <span className="text-xs font-semibold text-primary">₹{total?.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Revenue Analytics</h3>
          <p className="text-sm text-muted-foreground">Daily revenue breakdown by plan type</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button
            onClick={() => setTimeRange('7days')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              timeRange === '7days' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeRange('30days')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              timeRange === '30days' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            30 Days
          </button>
          <button
            onClick={() => setTimeRange('90days')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              timeRange === '90days' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            90 Days
          </button>
        </div>
      </div>
      <div className="w-full h-80" aria-label="Revenue Analytics Bar Chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `₹${(value / 1000)?.toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="circle"
            />
            <Bar dataKey="basic" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Basic" />
            <Bar dataKey="premium" fill="#22C55E" radius={[4, 4, 0, 0]} name="Premium" />
            <Bar dataKey="enterprise" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="Enterprise" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
          <div>
            <p className="text-xs text-muted-foreground">Basic Plan</p>
            <p className="text-sm font-semibold text-foreground">₹1,05,000</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
          <div>
            <p className="text-xs text-muted-foreground">Premium Plan</p>
            <p className="text-sm font-semibold text-foreground">₹2,35,500</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
          <div>
            <p className="text-xs text-muted-foreground">Enterprise Plan</p>
            <p className="text-sm font-semibold text-foreground">₹3,58,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;