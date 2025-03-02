import { cn } from '@/libs/utils';
import { Input as InputShadUI } from '../ui/input';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { EyeHidenIcon, EyeIcon } from '@/assets/icons';
import { useRef, useState } from 'react';

type TInputProps<T extends FieldValues> = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

const Input = <T extends FieldValues>({
  label,
  placeholder,
  required = false,
  className,
  name,
  control,
  disabled,
  onChange,
  ...props
}: TInputProps<T>) => {
  const { formatMessage } = useIntl();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleTogglePassword = () => {
    if (inputRef?.current) {
      const input = inputRef.current;
      setIsShowPassword((prev: boolean) => !prev);
      input.setAttribute('type', input.type === 'password' ? 'text' : 'password');
    }
  };

  return (
    <div className={cn('input-container')}>
      {label && (
        <label className={cn('mb-2 inline-block text-sm')}>
          {label && <label>{formatMessage({ id: label })}</label>}:
          {required && <span className={cn('text-[#e71a0f]')}> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className={cn('relative')}>
              <InputShadUI
                {...field}
                placeholder={placeholder ? formatMessage({ id: placeholder }) : undefined}
                autoComplete='off'
                className={cn(
                  className,
                  'bg-white placeholder:text-[12px] focus:border-[#e71a0f] focus-visible:ring-0 shadow-none',
                  {
                    'border-red-500': fieldState.error,
                  },
                )}
                ref={inputRef}
                onChange={event => {
                  onChange?.();
                  field.onChange(event);
                }}
                disabled={disabled}
                {...props}
              />
              {props.type === 'password' && (
                <div className={cn('absolute right-3 bottom-[12px] w-4 h-4')}>
                  {isShowPassword ? (
                    <span className={cn('absolute')} onClick={handleTogglePassword}>
                      <EyeIcon width='18px' height='18px' />
                    </span>
                  ) : (
                    <span className={cn('absolute')} onClick={handleTogglePassword}>
                      <EyeHidenIcon width='18px' height='18px' />
                    </span>
                  )}
                </div>
              )}
            </div>
            {fieldState.error && (
              <p className={cn('text-[12px] text-red-500 mt-1 pl-2')}>
                {formatMessage({ id: fieldState.error.message })}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Input;
