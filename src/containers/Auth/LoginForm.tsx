import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import { cn } from '@/libs/utils';
import { Button } from '@/components/ui';
import { Input } from '@/components/Forms';
import { TLoginForm, defaultValueLoginForm } from './config';
import { loginValidationSchema } from '@/libs/yup/authSchema.validation';
function LoginForm() {
  const { control, handleSubmit } = useForm<TLoginForm>({
    defaultValues: defaultValueLoginForm,
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: TLoginForm) => {
    console.log(data);
  };

  return (
    <div className={cn('form-login-container', 'px-6 py-3')}>
      <form className={cn('form-login')} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            name='account'
            control={control}
            label='login-form-input-account-label'
            placeholder='login-form-input-account-placeholder'
            required
            type='text'
          />
        </div>
        <div className={cn('mt-4 relative')}>
          <Input
            name='password'
            control={control}
            label='login-form-input-password-label'
            placeholder='login-form-input-password-placeholder'
            required
            type='password'
          />
        </div>
        <Button type='submit' className={cn('w-full mt-6 bg-[#e71a0f] rounded-none hover:bg-[#ef554d]')}>
          <FormattedMessage id='login-form-btn-submit-label' />
        </Button>
      </form>
      <Link to='/forwalk-password' className={cn('text-blue-500 text-sm text-center inline-block w-full mt-2')}>
        Bạn muốn lấy lại mật khẩu ?
      </Link>
    </div>
  );
}

export default LoginForm;
