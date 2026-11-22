function slaHours(priority: number): number {
    return priority === 1 ? 4 : 24;
}
console.log(slaHours(2));

function isOverdue(createdHour: number, nowHour: number = new Date().getHours(), priority: number): boolean {
    if ((nowHour - createdHour > 4) && (priority === 1)) {
        return true;
    }
    return false;
}
console.log(isOverdue(2, new Date().getHours(), 1));

