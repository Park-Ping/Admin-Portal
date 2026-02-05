import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox, CheckboxGroup } from '../../../components/ui/Checkbox';

const RolePermissionsCard = () => {
  const [selectedRole, setSelectedRole] = useState('operations_manager');

  const roles = [
    {
      id: 'super_admin',
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      userCount: 2,
      color: 'text-error'
    },
    {
      id: 'operations_manager',
      name: 'Operations Manager',
      description: 'Card and payment management access',
      userCount: 5,
      color: 'text-primary'
    },
    {
      id: 'customer_support',
      name: 'Customer Support',
      description: 'Customer interaction and basic card operations',
      userCount: 8,
      color: 'text-accent'
    },
    {
      id: 'financial_admin',
      name: 'Financial Admin',
      description: 'Payment processing and financial reporting',
      userCount: 3,
      color: 'text-warning'
    },
    {
      id: 'developer',
      name: 'Developer',
      description: 'API access and system integration',
      userCount: 4,
      color: 'text-info'
    }
  ];

  const permissionCategories = [
    {
      category: 'Dashboard & Analytics',
      permissions: [
        { id: 'view_dashboard', label: 'View Executive Dashboard', enabled: true },
        { id: 'view_analytics', label: 'Access Analytics Intelligence', enabled: true },
        { id: 'export_reports', label: 'Export Reports', enabled: true },
        { id: 'custom_dashboards', label: 'Create Custom Dashboards', enabled: false }
      ]
    },
    {
      category: 'Card Management',
      permissions: [
        { id: 'view_cards', label: 'View Card Information', enabled: true },
        { id: 'activate_cards', label: 'Activate/Deactivate Cards', enabled: true },
        { id: 'bulk_operations', label: 'Bulk Card Operations', enabled: true },
        { id: 'delete_cards', label: 'Delete Card Records', enabled: false }
      ]
    },
    {
      category: 'Payment Operations',
      permissions: [
        { id: 'view_payments', label: 'View Payment Transactions', enabled: true },
        { id: 'process_refunds', label: 'Process Refunds', enabled: false },
        { id: 'financial_reports', label: 'Generate Financial Reports', enabled: true },
        { id: 'payment_config', label: 'Configure Payment Gateway', enabled: false }
      ]
    },
    {
      category: 'User Management',
      permissions: [
        { id: 'view_users', label: 'View Admin Users', enabled: false },
        { id: 'create_users', label: 'Create New Users', enabled: false },
        { id: 'edit_users', label: 'Edit User Details', enabled: false },
        { id: 'manage_roles', label: 'Manage Roles & Permissions', enabled: false }
      ]
    },
    {
      category: 'System Configuration',
      permissions: [
        { id: 'view_settings', label: 'View System Settings', enabled: false },
        { id: 'edit_settings', label: 'Modify System Configuration', enabled: false },
        { id: 'view_logs', label: 'Access System Logs', enabled: false },
        { id: 'backup_restore', label: 'Backup & Restore Operations', enabled: false }
      ]
    }
  ];

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">Role Permissions</h2>
          <p className="text-sm text-muted-foreground mt-1">Configure granular permissions for each role</p>
        </div>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Create New Role
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <h3 className="text-sm font-semibold text-foreground mb-4">Available Roles</h3>
          <div className="space-y-2">
            {roles?.map((role) => (
              <button
                key={role?.id}
                onClick={() => setSelectedRole(role?.id)}
                className={`
                  w-full text-left p-4 rounded-lg border transition-all
                  ${selectedRole === role?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted'
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={16} className={role?.color} />
                      <h4 className="font-medium text-foreground">{role?.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{role?.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Users" size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{role?.userCount} users</span>
                    </div>
                  </div>
                  {selectedRole === role?.id && (
                    <Icon name="Check" size={20} className="text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">
              Permissions for {roles?.find(r => r?.id === selectedRole)?.name}
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Reset to Default
              </Button>
              <Button variant="default" size="sm" iconName="Save">
                Save Changes
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {permissionCategories?.map((category, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-foreground">{category?.category}</h4>
                  <Button variant="ghost" size="sm">
                    Select All
                  </Button>
                </div>
                <CheckboxGroup>
                  <div className="space-y-3">
                    {category?.permissions?.map((permission) => (
                      <Checkbox
                        key={permission?.id}
                        label={permission?.label}
                        checked={permission?.enabled}
                        onChange={() => {}}
                      />
                    ))}
                  </div>
                </CheckboxGroup>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePermissionsCard;