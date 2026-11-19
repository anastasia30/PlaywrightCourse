let name: string = '   bROKEN street light     ';
let trimmedName = name.trim();
let lowerName = name.toLowerCase();
let upperName = name.toUpperCase();
let isStreet: boolean;
isStreet = name.includes('street');
let replacedText = name.replace('bROKEN', '');

console.log(trimmedName);
console.log(lowerName);
console.log(upperName);
console.log(isStreet);
console.log(replacedText);

