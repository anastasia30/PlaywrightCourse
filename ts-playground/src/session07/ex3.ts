//Given an array of priorities, write functions that return: 
// the count of urgent ones, the highest priority, 
// a sorted copy

const priorities: number[] = [5, 3, 1, 2, 4];

function countUrgent(priorities: number[]): number {
    let counter = 0;
    for (const p of priorities) {
        if (p <= 3) {
            counter++;
        }
    }
    return counter;
}

console.log(countUrgent(priorities));

//Given an array of priorities, write functions that return: 
// the count of urgent ones, the highest priority, a sorted copy
let highestPrio = 0;
function highestPri(priorities: number[]): number {

    for (const p of priorities) {

        if (p > highestPrio) {
            highestPrio = p;
        }
    }
    return highestPrio;
}
console.log(highestPri(priorities));

//Write removeStatus(statuses: string[], status: string): string[]
// that returns a new array without changing the input
const statuses: string[] = ['Submitted', 'In Review', 'Resolved', 'Waiting for Info'];
function removeStatus(statuses: string[], status: string): string[] {

    return statuses.filter(s => s !== 'In Review');
}

console.log(removeStatus(statuses, 'In Review'));
console.log(statuses);
