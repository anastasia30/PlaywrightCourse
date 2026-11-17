const id: string = 'REQ-1042';
const title: string = 'Broken street light';
let priority: '[P1]' | '[P2]' | '[P3]' | '[P4]' | '[P5]' = '[P2]';
let category: '(Water Systems)' | '(Street)' | '(Lightning)' = '(Lightning)';


console.log(`${id} ${priority} ${title} ${category}`);
console.log((`${id} ${priority} ${title} ${category}`).length);

//build REQ-1042 [P2] Broken street light (Lighting) from separate constants, print it and its .length
