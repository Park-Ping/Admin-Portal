import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const UserManagementCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const users = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@parkping.com',
    role: 'Super Admin',
    status: 'active',
    lastLogin: '2026-01-19 10:30 AM',
    permissions: ['full_access', 'user_management', 'system_config'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10742e8ef-1763296701959.png",
    avatarAlt: 'Professional headshot of Indian man with short black hair wearing navy blue formal shirt'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@parkping.com',
    role: 'Operations Manager',
    status: 'active',
    lastLogin: '2026-01-19 09:15 AM',
    permissions: ['card_management', 'payment_view', 'analytics_view'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfa37edb-1763295967528.png",
    avatarAlt: 'Professional headshot of Indian woman with long black hair wearing white formal blouse'
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit.patel@parkping.com',
    role: 'Customer Support',
    status: 'active',
    lastLogin: '2026-01-19 11:45 AM',
    permissions: ['card_view', 'customer_support'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18241fd90-1763295537482.png",
    avatarAlt: 'Professional headshot of Indian man with glasses wearing light blue formal shirt'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha.reddy@parkping.com',
    role: 'Financial Admin',
    status: 'active',
    lastLogin: '2026-01-18 05:30 PM',
    permissions: ['payment_management', 'financial_reports'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_142754305-1763293808603.png",
    avatarAlt: 'Professional headshot of Indian woman with shoulder-length black hair wearing green formal top'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram.singh@parkping.com',
    role: 'Developer',
    status: 'inactive',
    lastLogin: '2026-01-15 02:20 PM',
    permissions: ['api_access', 'system_logs'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13bcb65fb-1763295902656.png",
    avatarAlt: 'Professional headshot of Indian man with short beard wearing black casual shirt'
  }];


  const roleOptions = [
  { value: 'all', label: 'All Roles' },
  { value: 'super_admin', label: 'Super Admin' },
  { value: 'operations_manager', label: 'Operations Manager' },
  { value: 'customer_support', label: 'Customer Support' },
  { value: 'financial_admin', label: 'Financial Admin' },
  { value: 'developer', label: 'Developer' }];


  const filteredUsers = users?.filter((user) => {
    const matchesSearch = user?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    user?.email?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesRole = selectedRole === 'all' || user?.role?.toLowerCase()?.replace(' ', '_') === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedUsers(filteredUsers?.map((u) => u?.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId, checked) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers?.filter((id) => id !== userId));
    }
  };

  return (
    <div className="dashboard-widget">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">User Management</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage admin users and their permissions</p>
        </div>
        <Button
          variant="default"
          iconName="UserPlus"
          iconPosition="left"
          onClick={() => setShowAddUserModal(true)}>

          Add New User
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)} />

        </div>
        <div className="w-full md:w-64">
          <Select
            placeholder="Filter by role"
            options={roleOptions}
            value={selectedRole}
            onChange={setSelectedRole} />

        </div>
      </div>
      {selectedUsers?.length > 0 &&
      <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg mb-4">
          <span className="text-sm font-medium text-foreground">
            {selectedUsers?.length} user(s) selected
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" iconName="Mail">
              Send Email
            </Button>
            <Button variant="destructive" size="sm" iconName="UserX">
              Deactivate
            </Button>
          </div>
        </div>
      }
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th className="w-12">
                <Checkbox
                  checked={selectedUsers?.length === filteredUsers?.length && filteredUsers?.length > 0}
                  onChange={(e) => handleSelectAll(e?.target?.checked)} />

              </th>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Permissions</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) =>
            <tr key={user?.id}>
                <td>
                  <Checkbox
                  checked={selectedUsers?.includes(user?.id)}
                  onChange={(e) => handleSelectUser(user?.id, e?.target?.checked)} />

                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                    src={user?.avatar}
                    alt={user?.avatarAlt}
                    className="w-10 h-10 rounded-full object-cover" />

                    <div>
                      <p className="font-medium text-foreground">{user?.name}</p>
                      <p className="text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {user?.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user?.status === 'active' ? 'success' : 'error'}`}>
                    {user?.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="text-sm text-muted-foreground whitespace-nowrap">
                  {user?.lastLogin}
                </td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {user?.permissions?.slice(0, 2)?.map((perm, idx) =>
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-1 text-xs rounded bg-muted text-muted-foreground">

                        {perm?.replace('_', ' ')}
                      </span>
                  )}
                    {user?.permissions?.length > 2 &&
                  <span className="inline-flex items-center px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                        +{user?.permissions?.length - 2}
                      </span>
                  }
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" iconName="Edit" />
                    <Button variant="ghost" size="sm" iconName="Key" />
                    <Button variant="ghost" size="sm" iconName="Trash2" />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {filteredUsers?.length === 0 &&
      <div className="text-center py-12">
          <Icon name="Users" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No users found matching your criteria</p>
        </div>
      }
    </div>);

};

export default UserManagementCard;