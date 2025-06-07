import type { CSSProperties } from 'react';

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-two)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-four)',
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
  fontSize: '1rem',
  fontWeight: '900',
  ...generalStyle,
};
