import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TopPerformers = () => {
  const performers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Operations Manager',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10742e8ef-1763296701959.png",
    avatarAlt: 'Professional headshot of Indian man with short black hair wearing navy blue formal shirt',
    metric: '156 Cards',
    description: 'Activated this month',
    trend: '+24%',
    trendType: 'positive',
    badge: 'Top Performer'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Customer Support Lead',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfa37edb-1763295967528.png",
    avatarAlt: 'Professional headshot of Indian woman with long black hair wearing white formal blouse',
    metric: '98.5%',
    description: 'Customer satisfaction',
    trend: '+5.2%',
    trendType: 'positive',
    badge: 'Excellence'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Payment Operations',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16d77ea83-1763292305993.png",
    avatarAlt: 'Professional headshot of Indian man with glasses wearing gray formal suit',
    metric: '₹4.2L',
    description: 'Revenue processed',
    trend: '+18%',
    trendType: 'positive',
    badge: 'High Impact'
  }];


  return (
    <div className="dashboard-widget">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">Top Performers</h3>
        <p className="text-sm text-muted-foreground">Outstanding team contributions this month</p>
      </div>
      <div className="space-y-4">
        {performers?.map((performer, index) =>
        <div
          key={performer?.id}
          className="flex items-center space-x-4 p-4 bg-muted hover:bg-muted/80 rounded-lg border border-border transition-all">

            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <Image
                src={performer?.avatar}
                alt={performer?.avatarAlt}
                className="w-full h-full object-cover" />

              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-foreground">{performer?.name}</p>
                <span className="status-badge success text-xs">{performer?.badge}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{performer?.role}</p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-lg font-bold text-foreground">{performer?.metric}</p>
                  <p className="text-xs text-muted-foreground">{performer?.description}</p>
                </div>
                <div className={`flex items-center text-xs font-medium ${performer?.trendType === 'positive' ? 'text-success' : 'text-error'}`}>
                  <Icon name={performer?.trendType === 'positive' ? 'TrendingUp' : 'TrendingDown'} size={14} className="mr-1" />
                  {performer?.trend}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary/80 font-medium transition-colors flex items-center justify-center">
          <span>View Full Team Performance</span>
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </button>
      </div>
    </div>);

};

export default TopPerformers;