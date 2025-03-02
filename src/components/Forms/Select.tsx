import { cn } from '@/libs/utils';
import {
  Select as SelectUI,
  SelectContent as SelectContentUI,
  SelectItem as SelectItemUI,
  SelectTrigger as SelectTriggerUI,
  SelectValue as SelectValueUI,
} from '../ui';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useIntl } from 'react-intl';

type TSelectOption = {
  value: string;
  label: string;
};
type TSelectProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  options: TSelectOption[];
  onChange?: () => void;
};

const RadioGroup = <T extends FieldValues>({
  label,
  required = false,
  className,
  name,
  control,
  disabled,
  options,
  onChange,
  ...props
}: TSelectProps<T>) => {
  const { formatMessage } = useIntl();

  return (
    <div className={cn('radio-container', className)}>
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
            <SelectUI
              value={field.value}
              disabled={disabled}
              autoComplete='off'
              onValueChange={() => {
                onChange?.();
                field.onChange(event);
              }}
              {...props}>
              <SelectTriggerUI className='w-full bg-white'>
                <SelectValueUI placeholder='Select a fruit' />
              </SelectTriggerUI>
              <SelectContentUI>
                {options.map((option, index) => {
                  return (
                    <SelectItemUI key={index} value={option.value}>
                      {formatMessage({ id: option.label })}
                    </SelectItemUI>
                  );
                })}
              </SelectContentUI>
            </SelectUI>

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

export default RadioGroup;
