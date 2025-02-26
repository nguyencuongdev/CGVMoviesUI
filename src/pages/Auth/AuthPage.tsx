import { cn } from '@/libs/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { useLocation } from 'react-router-dom';
import './AuthPage.scss';
import { FormattedMessage } from 'react-intl';

function AuthPage() {
  const location = useLocation();
  console.log(location);

  return (
    <div className={cn('login-page')}>
      <div className={cn('wrapper')}>
        <Tabs defaultValue={location.pathname === '/login' ? 'login-form' : 'register-form'}>
          <TabsList className={cn('auth-container rounded-none w-full h-[48px]')}>
            <TabsTrigger
              value='login-form'
              className={cn(
                'text-[#ddd] data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white uppercase outline-none rounded-none flex-1 justify-start pl-6 h-full font-bold',
              )}>
              <FormattedMessage id='login-label' />
            </TabsTrigger>
            <TabsTrigger
              value='register-form'
              className={cn(
                'text-[#ddd] data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white uppercase outline-none rounded-none flex-1 justify-start pl-6 h-full font-bold',
              )}>
              <FormattedMessage id='register-label' />
            </TabsTrigger>
          </TabsList>
          <TabsContent value='login-form'>
            <div>
              <h1>Login</h1>
            </div>
          </TabsContent>
          <TabsContent value='register-form'>
            <div>
              <h1>Register</h1>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
