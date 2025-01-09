const enumCreate = enumArray => {
  const enumObject = {};

  for (const enumValue of enumArray) {
    enumObject[enumValue] = enumValue;
  }

  // create imutable object
  return Object.freeze(enumObject);
};

export const validationType = enumCreate([
  'email',
  'password',
  'text',
  'number',
  'tel',
  'url',
  'date',
  'time',
  'datetime-local',
  'search',
  'color',
  'range',
  'hidden',
  'month',
  'week',
  'file',
  'image',
  'button',
  'submit',
  'reset',
]);
