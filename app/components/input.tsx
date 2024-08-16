import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, ...props }: InputProps, ref) => {
    const InputErrorStyle = 'border-red-500 placeholder:text-red-500';
    const LabelErrorStyle = 'text-red-500';

    return (
      <label className="flex w-full flex-col gap-3">
        <span
          className={twMerge(
            'font-bold text-slate-800',
            helperText && LabelErrorStyle,
          )}
        >
          {label}
        </span>
        <input
          ref={ref}
          className={twMerge(
            'h-[2.875rem] w-full rounded-lg border border-solid bg-transparent px-4 text-slate-950 outline-none placeholder:text-slate-600 focus:border-slate-600',
            helperText && InputErrorStyle,
          )}
          {...props}
        />
        {helperText && (
          <p className="text-xs font-bold text-red-500">{helperText}</p>
        )}
      </label>
    );
  },
);

Input.displayName = 'Input';

export { Input };
