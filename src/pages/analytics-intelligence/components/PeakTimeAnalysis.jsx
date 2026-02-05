import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const PeakTimeAnalysis = ({ data, title }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between space-x-4 text-xs">
              <span className="text-muted-foreground">Scans:</span>
              <span className="font-semibold text-primary">{payload?.[0]?.value?.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center justify-between space-x-4 text-xs">
              <span className="text-muted-foreground">Avg Duration:</span>
              <span className="font-semibold text-foreground">{payload?.[0]?.payload?.avgDuration} min</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const maxValue = Math.max(...data?.map(d => d?.scans));
  const peakHour = data?.find(d => d?.scans === maxValue);

  return (
    <div className="dashboard-widget">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Peak hour: <span className="font-medium text-primary">{peakHour?.hour}</span> with{' '}
            <span className="font-medium text-foreground">{peakHour?.scans?.toLocaleString('en-IN')}</span> scans
          </p>
        </div>
        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
          <Icon name="Download" size={18} />
        </button>
      </div>
      <div className="w-full h-80" aria-label={`${title} bar chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="hour" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="scans" 
              fill="var(--color-primary)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Morning Peak</p>
          <p className="text-sm font-semibold text-foreground">8:00 AM - 10:00 AM</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Afternoon Peak</p>
          <p className="text-sm font-semibold text-foreground">1:00 PM - 3:00 PM</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Evening Peak</p>
          <p className="text-sm font-semibold text-foreground">6:00 PM - 8:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default PeakTimeAnalysis;