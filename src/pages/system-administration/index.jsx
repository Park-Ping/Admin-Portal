import { useState } from 'react';
import UserManagementCard from './components/UserManagementCard';
import RolePermissionsCard from './components/RolePermissionsCard';
import SystemConfigCard from './components/SystemConfigCard';
import AuditLogCard from './components/AuditLogCard';
import BackupRestoreCard from './components/BackupRestoreCard';
import SecurityMonitoringCard from './components/SecurityMonitoringCard';

const SystemAdministration = () => {
  const [activeSection, setActiveSection] = useState('users');

  const sections = [
    { id: 'users', label: 'User Management', component: UserManagementCard },
    { id: 'roles', label: 'Role Permissions', component: RolePermissionsCard },
    { id: 'config', label: 'System Configuration', component: SystemConfigCard },
    { id: 'audit', label: 'Audit Log', component: AuditLogCard },
    { id: 'backup', label: 'Backup & Restore', component: BackupRestoreCard },
    { id: 'security', label: 'Security Monitoring', component: SecurityMonitoringCard }
  ];

  const ActiveComponent = sections?.find(s => s?.id === activeSection)?.component;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            System Administration
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Comprehensive security management and operational configuration
          </p>
        </div>

        <div className="border-b border-border mb-6 md:mb-8 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`
                  px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-colors whitespace-nowrap
                  ${activeSection === section?.id
                    ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {section?.label}
              </button>
            ))}
          </div>
        </div>

        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default SystemAdministration;