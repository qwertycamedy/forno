import { cn } from '@/utils';
import { ArrowUpDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { ClassNameValue } from 'tailwind-merge';

export const SortPopup = ({ className }: {className?: ClassNameValue}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'inline-flex items-center gap-1 bg-gray-50 px-5 h-13 rounded-2xl cursor-pointer',
            className,
          )}>
          <ArrowUpDown className="w-4 h-4" />
          <b>Сортировка:</b>

          <b className="text-primary">популярное</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <ul>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            Сначала популярное
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            Сначала недорогие
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            Сначала дорогие
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            С лучшей оценкой
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
