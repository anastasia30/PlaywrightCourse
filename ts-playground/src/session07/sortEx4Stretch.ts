const priorities: number[] = [5, 3, 1, 2, 4];
const modifiedWithSort = priorities.sort((a, b) => a - b);
console.log(priorities);
console.log(modifiedWithSort);

const otherPriorities: number[] = [6, 3, 1];
const modifiedWithToSorted = otherPriorities.toSorted((a, b) => a - b);
console.log(modifiedWithToSorted);
console.log(otherPriorities);
