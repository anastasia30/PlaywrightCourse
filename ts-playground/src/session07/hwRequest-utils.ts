//id format
function formatRequestId(id: number, prefix = 'REQ'): string | number {
    const paddedNumber = id.toString().padStart(4, '0');
    return `${prefix}-${paddedNumber} `;
}
console.log(formatRequestId(2));

//sla calc
function slaHours(priority: number): number {
    return priority === 1 ? 4 : 24;
}
console.log(slaHours(2));

//overdue calc
function isOverdue(createdHour: number, nowHour: number = new Date().getHours(), priority: number): boolean {
    if ((nowHour - createdHour > 4) && (priority === 1)) {
        return true;
    }
    return false;
}
console.log(isOverdue(2, new Date().getHours(), 1));

//title val

function isTitleAppropriateLength(title: string): boolean {
    if (title.length > 5 && title.length < 100) {
        return true;
    }
    return false;
}
console.log(isTitleAppropriateLength('This'));

//includes
const priorities: number[] = [5, 3, 2, 3, 5, 1]
function doesInclude(priorities: number[], priorityDefined: number): boolean {

    for (const s of priorities) {
        if (s == priorityDefined)
            return true;
    }
    return false;
}
console.log(doesInclude(priorities, 3));

//summary gen
function summaryGen(summaryId: number, summaryPrefix = 'REQ', summaryPriority: number): string {
    return `${summaryPrefix} ${summaryId} ${summaryPriority}`;
}
console.log(summaryGen(1, 'MEG', 2));



