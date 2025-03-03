import { cn } from '@/libs/utils';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { default as DatePickerUI } from 'react-datepicker';
import { useSelector } from 'react-redux';
import { RootStateType } from '@/store';
import { Calendar } from 'lucide-react';
import { vi, enUS } from 'date-fns/locale';

type TDatePickerProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
};

const DatePicker = <T extends FieldValues>({
  label,
  required = false,
  className,
  name,
  control,
  // disabled,
  onChange,
  ...props
}: TDatePickerProps<T>) => {
  const { formatMessage } = useIntl();
  const { locale } = useSelector((state: RootStateType) => state.locale);

  const getLocale = (locale: 'vi' | 'en') => {
    if (locale === 'vi') return vi;
    if (locale === 'en') return enUS;
    return vi;
  };

  return (
    <div className={cn('datepicker-container', className)} {...props}>
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
          <div className={cn('date-picker-container')}>
            <DatePickerUI
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              className={cn('w-full py-1 px-3 rounded-md border border-input')}
              showIcon
              toggleCalendarOnIconClick
              calendarIconClassName={cn('right-1')}
              dropdownMode='select'
              locale={getLocale(locale as 'vi' | 'en')}
              selected={field.value}
              onChange={date => {
                field.onChange(date);
                onChange?.();
              }}
              icon={<Calendar />}
            />
            {fieldState.error && (
              <p className={cn('text-[12px] text-red-500 mt-1 pl-2')}>
                {formatMessage({ id: fieldState.error.message })}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default DatePicker;
