const date = new Date();

export const today = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  12,
  0,
  0,
);
export const tomorrow = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() + 1,
  12,
  0,
  0,
);
