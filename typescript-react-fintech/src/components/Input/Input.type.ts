import type { ComponentProps } from 'react';

export type TInputProps = ComponentProps<'input'> & {
  id: string;
  label?: string;
};
