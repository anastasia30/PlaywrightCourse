function formatRequestId(id: number, prefix = 'REQ'): string | number {
    const paddedNumber = id.toString().padStart(4, '0');
    return `${prefix}-${paddedNumber} `;
}
console.log(formatRequestId(2));
