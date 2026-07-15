const today = new Date();
const nextDate = new Date();
const nextMonth = new Date()
nextDate.setFullYear(today.getFullYear() + 1);
nextMonth.setMonth(today.getMonth() + 1);

export const maxDate = nextDate.toISOString().split('T')[0];
export const minDate = today.toISOString().split('T')[0];
export const maxDateMonth = nextMonth.toISOString().split('T')[0];