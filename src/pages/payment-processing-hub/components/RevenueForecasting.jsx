import { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Icon from '../../../components/AppIcon';


const RevenueForecasting = ({ historicalData, forecastData }) => {
  const [forecastPeriod, setForecastPeriod] = useState('30days');
  const [confidenceLevel, setConfidenceLevel] = useState('medium');

  const combinedData = [...historicalData, ...forecastData];

  const getConfidenceRange = () => {
    const ranges = {
      high: { upper: 1.15, lower: 0.85 },
      medium: { upper: 1.25, lower: 0.75 },
      low: { upper: 1.35, lower: 0.65 }
    };
    return ranges?.[confidenceLevel];
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const isForecast = payload?.[0]?.payload?.isForecast;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground mb-2">
            {label}
            {isForecast && <span className="ml-2 text-xs text-muted-foreground">(Forecast)</span>}
          </p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              {entry?.name}: <span className="font-semibold text-foreground">₹{entry?.value?.toLocaleString('en-IN')}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const confidenceRange = getConfidenceRange();
  const dataWithConfidence = combinedData?.map(item => ({
    ...item,
    upperBound: item?.isForecast ? item?.revenue * confidenceRange?.upper : null,
    lowerBound: item?.isForecast ? item?.revenue * confidenceRange?.lower : null
  }));

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Revenue Forecasting</h2>
          <p className="text-sm text-muted-foreground">
            AI-powered revenue predictions based on historical trends
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={forecastPeriod}
            onChange={(e) => setForecastPeriod(e?.target?.value)}
            className="px-4 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="7days">Next 7 Days</option>
            <option value="30days">Next 30 Days</option>
            <option value="90days">Next 90 Days</option>
          </select>
          <select
            value={confidenceLevel}
            onChange={(e) => setConfidenceLevel(e?.target?.value)}
            className="px-4 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="high">High Confidence</option>
            <option value="medium">Medium Confidence</option>
            <option value="low">Low Confidence</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-muted">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Projected Revenue</p>
            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
          </div>
          <p className="text-2xl font-semibold text-foreground">₹12,45,000</p>
          <p className="text-xs text-success mt-1">+18% from last period</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Expected Transactions</p>
            <Icon name="Activity" size={20} color="var(--color-accent)" />
          </div>
          <p className="text-2xl font-semibold text-foreground">2,847</p>
          <p className="text-xs text-accent mt-1">+12% growth expected</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Confidence Score</p>
            <Icon name="Target" size={20} color="var(--color-primary)" />
          </div>
          <p className="text-2xl font-semibold text-foreground">87%</p>
          <p className="text-xs text-muted-foreground mt-1">Based on 90 days data</p>
        </div>
      </div>
      <div className="w-full h-96 mb-6" aria-label="Revenue Forecast Chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataWithConfidence}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
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
              wrapperStyle={{ fontSize: '14px' }}
              iconType="circle"
            />
            <Area
              type="monotone"
              dataKey="upperBound"
              stroke="none"
              fill="var(--color-accent)"
              fillOpacity={0.1}
              name="Upper Confidence"
            />
            <Area
              type="monotone"
              dataKey="lowerBound"
              stroke="none"
              fill="var(--color-accent)"
              fillOpacity={0.1}
              name="Lower Confidence"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={2}
              fill="url(#colorRevenue)"
              name="Actual/Forecast Revenue"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 rounded-lg bg-muted">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-foreground mb-2">Forecast Insights</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <Icon name="CheckCircle2" size={16} className="mr-2 mt-0.5 flex-shrink-0" color="var(--color-success)" />
                <span>Revenue growth expected to accelerate in the next 30 days based on seasonal trends</span>
              </li>
              <li className="flex items-start">
                <Icon name="AlertTriangle" size={16} className="mr-2 mt-0.5 flex-shrink-0" color="var(--color-warning)" />
                <span>Weekend transaction volumes may vary ±15% from weekday averages</span>
              </li>
              <li className="flex items-start">
                <Icon name="TrendingUp" size={16} className="mr-2 mt-0.5 flex-shrink-0" color="var(--color-primary)" />
                <span>Premium plan adoption increasing, contributing to higher average transaction value</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueForecasting;