import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const BackupRestoreCard = () => {
  const [selectedBackup, setSelectedBackup] = useState('');

  const backupHistory = [
    {
      id: 1,
      name: 'Full System Backup - Jan 19, 2026',
      timestamp: '2026-01-19 02:00:00',
      size: '2.4 GB',
      type: 'Automatic',
      status: 'completed',
      duration: '45 minutes',
      includes: ['Database', 'User Files', 'Configuration', 'Logs']
    },
    {
      id: 2,
      name: 'Database Backup - Jan 18, 2026',
      timestamp: '2026-01-18 02:00:00',
      size: '1.8 GB',
      type: 'Automatic',
      status: 'completed',
      duration: '32 minutes',
      includes: ['Database']
    },
    {
      id: 3,
      name: 'Manual Backup - Jan 17, 2026',
      timestamp: '2026-01-17 14:30:00',
      size: '2.6 GB',
      type: 'Manual',
      status: 'completed',
      duration: '52 minutes',
      includes: ['Database', 'User Files', 'Configuration']
    },
    {
      id: 4,
      name: 'Full System Backup - Jan 16, 2026',
      timestamp: '2026-01-16 02:00:00',
      size: '2.3 GB',
      type: 'Automatic',
      status: 'completed',
      duration: '43 minutes',
      includes: ['Database', 'User Files', 'Configuration', 'Logs']
    }
  ];

  const backupSchedule = [
    { type: 'Full System Backup', frequency: 'Daily at 2:00 AM', retention: '30 days', enabled: true },
    { type: 'Database Backup', frequency: 'Every 6 hours', retention: '7 days', enabled: true },
    { type: 'Configuration Backup', frequency: 'Weekly on Sunday', retention: '90 days', enabled: true },
    { type: 'Log Files Backup', frequency: 'Daily at 3:00 AM', retention: '14 days', enabled: false }
  ];

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">Backup & Restore</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage system backups and data recovery</p>
        </div>
        <Button variant="default" iconName="Database" iconPosition="left">
          Create Manual Backup
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="border border-border rounded-lg p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <Icon name="HardDrive" size={24} className="text-success" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Storage Status</h3>
              <p className="text-sm text-muted-foreground">Backup storage utilization</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Used Space</span>
              <span className="font-medium text-foreground">12.8 GB</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-success rounded-full" style={{ width: '42%' }} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Available Space</span>
              <span className="font-medium text-foreground">17.2 GB</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Clock" size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Last Backup</h3>
              <p className="text-sm text-muted-foreground">Most recent backup information</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Timestamp</span>
              <span className="font-medium text-foreground">2026-01-19 02:00:00</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium text-foreground">Full System Backup</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="status-badge success">Completed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Backup Schedule</h3>
        <div className="space-y-3">
          {backupSchedule?.map((schedule, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${schedule?.enabled ? 'bg-primary/10' : 'bg-muted'}`}>
                  <Icon name="Calendar" size={20} className={schedule?.enabled ? 'text-primary' : 'text-muted-foreground'} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{schedule?.type}</h4>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{schedule?.frequency}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Archive" size={14} />
                      <span>Retention: {schedule?.retention}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`status-badge ${schedule?.enabled ? 'success' : 'error'}`}>
                  {schedule?.enabled ? 'Enabled' : 'Disabled'}
                </span>
                <Button variant="ghost" size="sm" iconName="Settings" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Backup History</h3>
        <div className="space-y-3">
          {backupHistory?.map((backup) => (
            <div key={backup?.id} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Database" size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground mb-1">{backup?.name}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{backup?.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="HardDrive" size={14} />
                        <span>{backup?.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Timer" size={14} />
                        <span>{backup?.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {backup?.includes?.map((item, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" iconName="Download">
                    Download
                  </Button>
                  <Button variant="outline" size="sm" iconName="RotateCcw">
                    Restore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackupRestoreCard;