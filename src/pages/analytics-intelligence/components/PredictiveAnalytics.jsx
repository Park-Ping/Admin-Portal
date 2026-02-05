import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';

const PredictiveAnalytics = ({ data, title }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const isPrediction = payload?.[0]?.payload?.isPrediction;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground mb-2">
            {label} {isPrediction && <span className="text-xs text-warning">(Predicted)</span>}
          </p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between space-x-4 text-xs">
              <span className="text-muted-foreground">{entry?.name}:</span>
              <span className="font-semibold" style={{ color: entry?.color }}>
                {entry?.value?.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
          {isPrediction && (
            <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border">
              Confidence: {payload?.[0]?.payload?.confidence}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-widget">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            AI-powered forecasting based on historical trends
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="status-badge warning">
            <Icon name="TrendingUp" size={14} className="mr-1" />
            Predictive Model
          </span>
        </div>
      </div>

      <div className="w-full h-80" aria-label={`${title} forecast chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="month" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="actual"
              name="Actual Usage"
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ fill: '#22C55E', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="predicted"
              name="Predicted Usage"
              stroke="#F59E0B"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#F59E0B', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="upperBound"
              name="Upper Bound"
              stroke="#EF4444"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lowerBound"
              name="Lower Bound"
              stroke="#3B82F6"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div className="p-4 bg-success/5 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} color="var(--color-success)" />
            <p className="text-xs font-medium text-success">Growth Forecast</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">+24.5%</p>
          <p className="text-xs text-muted-foreground mt-1">Next quarter projection</p>
        </div>

        <div className="p-4 bg-warning/5 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} color="var(--color-warning)" />
            <p className="text-xs font-medium text-warning">Confidence Level</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">87.3%</p>
          <p className="text-xs text-muted-foreground mt-1">Model accuracy score</p>
        </div>

        <div className="p-4 bg-info/5 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={16} color="var(--color-info)" />
            <p className="text-xs font-medium text-info">Peak Period</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">Q2 2026</p>
          <p className="text-xs text-muted-foreground mt-1">Expected highest demand</p>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;