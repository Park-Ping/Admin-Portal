import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BrandHeader from './components/BrandHeader';
import LoginForm from './components/LoginForm';
import SecurityIndicators from './components/SecurityIndicators';
import SystemStatus from './components/SystemStatus';

const AuthenticationGateway = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--color-background)';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Login - ParkPing Authentication Gateway</title>
        <meta
          name="description"
          content="Secure authentication gateway for ParkPing admin dashboard. Access your command center for card management, payment processing, and analytics intelligence."
        />
      </Helmet>
      <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card">
                  <BrandHeader />
                  <LoginForm />
                </div>

                <div className="mt-6">
                  <SecurityIndicators />
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-trust/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-trust">i</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">
                        This is a secure administrative portal. All access attempts are logged and monitored for security compliance. Unauthorized access attempts will be reported.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md">
                <SystemStatus />
              </div>
            </div>
          </div>

          <footer className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date()?.getFullYear()} ParkPing. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-xs text-muted-foreground">•</span>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-xs text-muted-foreground">•</span>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Support
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AuthenticationGateway;