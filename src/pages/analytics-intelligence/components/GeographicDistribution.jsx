import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const GeographicDistribution = ({ data, title }) => {
  const COLORS = ['#22C55E', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground">{payload?.[0]?.name}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Cards: <span className="font-semibold text-foreground">{payload?.[0]?.value?.toLocaleString('en-IN')}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Share: <span className="font-semibold text-foreground">{payload?.[0]?.payload?.percentage}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {payload?.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry?.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground truncate">{entry?.value}</p>
              <p className="text-xs text-muted-foreground">
                {entry?.payload?.value?.toLocaleString('en-IN')} ({entry?.payload?.percentage}%)
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="dashboard-widget">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
          <Icon name="Download" size={18} />
        </button>
      </div>
      <div className="w-full h-80" aria-label={`${title} pie chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS?.[index % COLORS?.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GeographicDistribution;