import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsDown, Languages } from 'lucide-react';

const languages = [
  {
    value: 'en',
    label: 'EN',
  },
  {
    value: 'es',
    label: 'ES',
  },
];

const LanguageSelector = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const locale = new URLSearchParams(window.location.search).get('locale');
    setValue(locale ? locale : 'en');
  }, []);

  const onSelect = (currentValue: string) => {
    setValue(currentValue === value ? '' : currentValue);
    setOpen(false);

    window.location.href = `/?locale=${currentValue}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="justify-between bg-slate-gray"
        >
          <div className="flex items-center gap-1 text-bright-gray">
            <Languages />
            {value
              ? languages.find((language) => language.value === value)?.label
              : ''}
          </div>
          <ChevronsDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] rounded-md p-0">
        <Command className="rounded-md bg-slate-gray">
          <CommandInput
            placeholder="Search language..."
            className="text-snow"
          />
          <CommandEmpty className="py-2 text-center text-xs text-snow">
            No language found.
          </CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                className="!bg-slate-gray !text-snow visited:!bg-dark-void hover:!bg-dark-void hover:!text-snow"
                key={language.value}
                value={language.value}
                onSelect={onSelect}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === language.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
