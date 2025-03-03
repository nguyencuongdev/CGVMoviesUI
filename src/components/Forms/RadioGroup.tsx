import { cn } from '@/libs/utils';
import { RadioGroup as RadioGroupUI, RadioGroupItem as RadioGroupItemUI, Label } from '../ui';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useIntl } from 'react-intl';

type TRadioOption = {
  value: string;
  label: string;
  id: string;
};
type TRadioProps<T extends FieldValues> = {
  fieldNameMessage?: string;
  label?: string;
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  options: TRadioOption[];
  onChange?: () => void;
};

const RadioGroup = <T extends FieldValues>({
  fieldNameMessage = '',
  label,
  required = false,
  className,
  name,
  control,
  disabled,
  options,
  onChange,
  ...props
}: TRadioProps<T>) => {
  const { formatMessage } = useIntl();

  return (
    <div className={cn('radio-container')}>
      {label && (
        <label className={cn('mb-2 inline-block text-sm')}>
          {formatMessage({ id: label })}:{required && <span className={cn('text-[#e71a0f]')}> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <RadioGroupUI
              className={cn(className)}
              disabled={disabled}
              value={field.value}
              onValueChange={event => {
                onChange?.();
                field.onChange(event);
              }}>
              {options.map(item => (
                <div key={item.id} className='flex items-center space-x-2'>
                  <RadioGroupItemUI className={cn('mr-3')} value={item.value} id={item.id} {...props} />
                  <Label htmlFor={item.id}>{formatMessage({ id: item.label })}</Label>
                </div>
              ))}
            </RadioGroupUI>

            {fieldState.error && (
              <p className={cn('text-[12px] text-red-500 mt-1 pl-2')}>
                {formatMessage(
                  { id: fieldState.error.message },
                  {
                    fieldName: fieldNameMessage,
                  },
                )}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default RadioGroup;
