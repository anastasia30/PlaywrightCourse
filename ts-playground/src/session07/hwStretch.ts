//Stretch: write a generateTitles(count, prefix) that returns 
// unique titles with a timestamp suffix, for test data
function generateTitle(count: number, prefix = 'REQ'): string[] | undefined {
    const titles: string[] = [];
    for (let i = 0; i < count; i++) {
        titles.push(`${prefix}-${i}-${Date.now()}`);
    }
    return titles;
}
console.log(generateTitle(2));

