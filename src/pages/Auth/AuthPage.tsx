import { cn } from '@/libs/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { useLocation } from 'react-router-dom';
import './AuthPage.scss';
import { FormattedMessage } from 'react-intl';
import { LoginForm, RegisterForm } from '@/containers/Auth';

function AuthPage() {
  const location = useLocation();

  return (
    <div className={cn('login-page')}>
      <div className={cn('wrapper')}>
        <Tabs defaultValue={location.pathname === '/login' ? 'login-form' : 'register-form'}>
          <TabsList className={cn('auth-container rounded-none w-full h-[48px]')}>
            <TabsTrigger
              value='login-form'
              className={cn(
                'text-[#ddd] data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white uppercase outline-none rounded-none flex-1 justify-start pl-6 h-full font-bold',
              )}
              onClick={() => {
                window.history.pushState({}, '', '/login');
              }}>
              <FormattedMessage id='login-label' />
            </TabsTrigger>
            <TabsTrigger
              value='register-form'
              className={cn(
                'text-[#ddd] data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white uppercase outline-none rounded-none flex-1 justify-start pl-6 h-full font-bold',
              )}
              onClick={() => {
                window.history.pushState({}, '', '/register');
              }}>
              <FormattedMessage id='register-label' />
            </TabsTrigger>
          </TabsList>
          <TabsContent value='login-form'>
            <LoginForm />
          </TabsContent>
          <TabsContent value='register-form'>
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
