import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Payment Processed',
      message: 'Transaction #12345 completed successfully',
      time: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Card Expiring Soon',
      message: '5 cards will expire in the next 7 days',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      type: 'info',
      title: 'System Update',
      message: 'Scheduled maintenance on Jan 25, 2026',
      time: '3 hours ago',
      unread: false,
    },
  ];

  const unreadCount = notifications?.filter((n) => n?.unread)?.length;

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-card border-b border-border z-30 shadow-card">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-foreground">
            ParkPing Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Notifications"
            >
              <Icon name="Bell" size={20} />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
              )}
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-modal animate-slide-down">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <span className="status-badge success">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications?.map((notification) => (
                    <div
                      key={notification?.id}
                      className={`
                        p-4 border-b border-border hover:bg-muted transition-colors cursor-pointer
                        ${notification?.unread ? 'bg-primary/5' : ''}
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`
                            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                            ${notification?.type === 'success' ? 'bg-success/10' : ''}
                            ${notification?.type === 'warning' ? 'bg-warning/10' : ''}
                            ${notification?.type === 'info' ? 'bg-info/10' : ''}
                          `}
                        >
                          <Icon
                            name={
                              notification?.type === 'success' ?'CheckCircle'
                                : notification?.type === 'warning' ?'AlertTriangle' :'Info'
                            }
                            size={16}
                            color={
                              notification?.type === 'success' ?'var(--color-success)'
                                : notification?.type === 'warning' ?'var(--color-warning)' :'var(--color-info)'
                            }
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {notification?.title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification?.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification?.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 border-t border-border">
                  <button className="w-full text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center space-x-3 p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={18} color="var(--color-primary)" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-foreground">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@parkping.com</p>
              </div>
              <Icon
                name="ChevronDown"
                size={16}
                className="text-muted-foreground"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-modal animate-slide-down">
                <div className="p-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Admin User</p>
                  <p className="text-xs text-muted-foreground">
                    admin@parkping.com
                  </p>
                </div>

                <div className="py-2">
                  <Link
                    to="/system-administration"
                    className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <Icon name="Settings" size={16} className="mr-3" />
                    Settings
                  </Link>
                  <Link
                    to="/system-administration"
                    className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <Icon name="HelpCircle" size={16} className="mr-3" />
                    Help & Support
                  </Link>
                </div>

                <div className="py-2 border-t border-border">
                  <Link
                    to="/authentication-gateway"
                    className="flex items-center px-4 py-2 text-sm text-error hover:bg-muted transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <Icon name="LogOut" size={16} className="mr-3" />
                    Sign Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;