import type { CSSProperties } from 'react';

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
};

export const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  marginBottom: 'var(--gap-s)',
  ...generalStyle,
};

export const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
};
