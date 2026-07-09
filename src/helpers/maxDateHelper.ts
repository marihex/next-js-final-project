const today = new Date();
const nextDate = new Date();
nextDate.setFullYear(today.getFullYear() + 1);

export const maxDate = nextDate.toISOString().split('T')[0];