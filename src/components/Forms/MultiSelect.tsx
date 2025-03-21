import { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown } from 'lucide-react';
import { CommandList } from 'cmdk';
import { cn } from '@/libs/utils';
import { useIntl } from 'react-intl';

type TSelectOption = {
  label: string;
  value: string;
};

type TMultiSelectProps<T extends FieldValues> = {
  fieldNameMessage?: string;
  label?: string;
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  options: TSelectOption[];
  placeholder?: string;
  widthContentOptions?: number;
  onChange?: () => void;
};

const MultiSelectForm = <T extends FieldValues>({
  fieldNameMessage = '',
  label,
  name,
  control,
  disabled,
  options,
  required = false,
  placeholder = 'Select options',
}: TMultiSelectProps<T>) => {
  const { formatMessage } = useIntl();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('multi-select-container')}>
      {label && (
        <label className={cn('mb-2 inline-block text-sm')}>
          {label && <label>{formatMessage({ id: label })}</label>}:
          {required && <span className={cn('text-[#e71a0f]')}> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const toggleSelection = (value: string) => {
            const newValues = field.value?.includes(value)
              ? field.value.filter((v: string) => v !== value) // Bỏ chọn nếu đã có
              : [...(field.value || []), value]; // Thêm nếu chưa có

            field.onChange(newValues);
          };

          if (disabled) {
            return (
              <Button
                variant='outline'
                disabled
                className='w-full justify-between bg-white cursor-pointer hover:cursor-not-allowed'>
                {field.value?.length > 0
                  ? options
                      .filter(opt => field.value.includes(opt.value))
                      .map(opt => opt.label)
                      .join(', ')
                  : formatMessage({ id: placeholder })}
                <ChevronDown className='ml-2 h-4 w-4 opacity-50' />
              </Button>
            );
          }

          return (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild className='bg-white'>
                <Button variant='outline' className='w-full justify-between'>
                  {field.value?.length > 0
                    ? options
                        .filter(opt => field.value.includes(opt.value))
                        .map(opt => opt.label)
                        .join(', ')
                    : formatMessage({ id: placeholder })}
                  <ChevronDown className='ml-2 h-4 w-4 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn('p-2')}>
                <Command className='w-full'>
                  <CommandInput placeholder='Type a command or search...' />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {options.map(option => (
                        <CommandItem key={option.value} onSelect={() => toggleSelection(option.value)}>
                          <Checkbox checked={field.value?.includes(option.value)} className='mr-2' />
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
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
            </Popover>
          );
        }}
      />
    </div>
  );
};

export default MultiSelectForm;
