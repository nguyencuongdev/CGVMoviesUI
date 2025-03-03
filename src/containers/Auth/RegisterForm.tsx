import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
// import { yupResolver } from '@hookform/resolvers/yup';

import { cn } from '@/libs/utils';
import { Button } from '@/components/ui';
import { Input, RadioGroup, MultiSelect, DatePicker } from '@/components/Forms';
import { TRegisterForm, defaultValueRegisterForm } from './config';

function RegisterForm() {
  const { control, handleSubmit } = useForm<TRegisterForm>({
    defaultValues: defaultValueRegisterForm,
    // resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: TRegisterForm) => {
    console.log(data);
  };

  return (
    <div className={cn('form-login-container', 'px-6 py-3')}>
      <form className={cn('form-login')} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            name='name'
            control={control}
            label='register-form-input-name-label'
            placeholder='register-form-input-name-placeholder'
            required
            type='text'
          />
        </div>
        <div className={cn('mt-4')}>
          <Input
            name='phoneNumber'
            control={control}
            label='register-form-input-phoneNumber-label'
            placeholder='register-form-input-phoneNumber-placeholder'
            required
            type='text'
          />
        </div>
        <div className={cn('mt-4')}>
          <Input
            name='email'
            control={control}
            label='register-form-input-email-label'
            placeholder='register-form-input-email-placeholder'
            required
            type='text'
          />
        </div>
        <div className={cn('mt-4 relative')}>
          <Input
            name='password'
            control={control}
            label='register-form-input-password-label'
            placeholder='register-form-input-password-placeholder'
            required
            type='password'
          />
        </div>
        <div className={cn('mt-4 relative')}>
          <Input
            name='rePassword'
            control={control}
            label='register-form-input-repassword-label'
            placeholder='register-form-input-repassword-placeholder'
            required
            type='password'
          />
        </div>
        <div className={cn('mt-4 flex justify-between items-center')}>
          <div className={cn('flex-1')}>
            <DatePicker name='dateOfBirth' control={control} label='register-form-input-dob-label' required />
          </div>
          <div className={cn('flex-1 ml-3')}>
            <RadioGroup
              name='gender'
              label='register-form-gender-label'
              className='flex'
              options={[
                {
                  label: 'register-form-gender-option-male-label',
                  value: '1',
                  id: 'gender-male',
                },
                {
                  label: 'register-form-gender-option-female-label',
                  value: '0',
                  id: 'gender-female',
                },
              ]}
              control={control}
              required
            />
          </div>
        </div>
        <div className={cn('mt-4')}>
          <MultiSelect
            label='register-form-favious-raps-label'
            name='faviousRaps'
            widthContentOptions={400}
            control={control}
            placeholder='select-multi-placeholder'
            options={[
              {
                label: 'CGV Aeon mail Hà Đông',
                value: '1',
              },
              {
                label: 'CGV Hồ gươm plaza',
                value: '2',
              },
            ]}
          />
        </div>
        <Button type='submit' className={cn('w-full mt-6 bg-[#e71a0f] rounded-none hover:bg-[#ef554d]')}>
          <FormattedMessage id='register-form-btn-submit-label' />
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
