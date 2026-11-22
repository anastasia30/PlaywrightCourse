const id: string = 'REQ-1042';
const title: string = 'Broken street light';
let category: string;
category = 'Lighting'
let priority: number; //(1–5)
priority = 2;
let isUrgent: boolean;
let assignee: string;
// (may be empty)


console.log(`${id} ${priority} ${title} ${category}`);
//REQ-1042 [P2] Broken street light (Lighting)
let newId: number = Number(id.slice(4));
console.log(`${newId}`);
let newestId: string = 'REQ-1043';
console.log(`${newestId}`);
