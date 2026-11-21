const slaHours = (priority: number): number => priority === 1 ? 4 : 24;
console.log(slaHours(2))

const isOverdue = (createdHour: number, nowHour: number = new Date().getHours(), priority: number): boolean => (nowHour - createdHour > 4) && (priority === 1) ? true : false;
console.log(isOverdue(2, new Date().getHours(), 1));

const formatRequestId = (id: number, prefix = 'REQ'): string => `${prefix}-${id.toString().padStart(4, '0')}`;
console.log(formatRequestId(2));

