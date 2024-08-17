import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  helperText?: string;
  label: string;
}

const Input = ({ children, helperText, label, ...props }: InputProps) => {
  const errorStyle = 'text-red-500 *:border-red-500';

  return (
    <label
      {...props}
      className={twMerge(
        'flex w-full flex-col gap-3 font-bold text-slate-800 outline-none',
        helperText && errorStyle,
      )}
    >
      <>{label}</>

      {children}

      {helperText && <p className="text-xs">{helperText}</p>}
    </label>
  );
};

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ ...props }: FieldProps, ref) => {
    return (
      <input
        className="font-normal placeholder:text-slate-600"
        {...props}
        ref={ref}
      />
    );
  },
);

Field.displayName = 'Field';
Input.Field = Field;

export { Input };
