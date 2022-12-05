export const genderOption = [
  'Man',
  'Woman',
  'Transgender',
  'Non-binary/non-conforming',
  'Prefer not to respond',
] as const;

export type GenderOption = typeof genderOption[number];
