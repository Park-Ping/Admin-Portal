import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';

const RevenueAnalysis = ({ data, title }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const total = payload?.reduce((sum, entry) => sum + entry?.value, 0);
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between space-x-4 text-xs mb-1">
              <span className="text-muted-foreground">{entry?.name}:</span>
              <span className="font-semibold" style={{ color: entry?.color }}>
                ₹{entry?.value?.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between space-x-4 text-xs mt-2 pt-2 border-t border-border">
            <span className="text-muted-foreground font-medium">Total:</span>
            <span className="font-semibold text-foreground">₹{total?.toLocaleString('en-IN')}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const totalRevenue = data?.reduce((sum, item) => sum + item?.basic + item?.premium + item?.enterprise, 0);
  const avgRevenue = Math.round(totalRevenue / data?.length);

  return (
    <div className="dashboard-widget">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Total: <span className="font-medium text-primary">₹{totalRevenue?.toLocaleString('en-IN')}</span> | 
            Avg: <span className="font-medium text-foreground">₹{avgRevenue?.toLocaleString('en-IN')}</span>
          </p>
        </div>
        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
          <Icon name="Download" size={18} />
        </button>
      </div>
      <div className="w-full h-80" aria-label={`${title} area chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBasic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPremium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorEnterprise" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="month" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `₹${(value / 1000)?.toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="circle"
            />
            <Area
              type="monotone"
              dataKey="basic"
              name="Basic Plan"
              stroke="#22C55E"
              fillOpacity={1}
              fill="url(#colorBasic)"
            />
            <Area
              type="monotone"
              dataKey="premium"
              name="Premium Plan"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorPremium)"
            />
            <Area
              type="monotone"
              dataKey="enterprise"
              name="Enterprise Plan"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorEnterprise)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueAnalysis;