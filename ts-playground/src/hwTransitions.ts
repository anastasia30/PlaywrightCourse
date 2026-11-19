const statuses = ['Submitted', 'In Review', 'Resolved', 'Waiting for Info'];
const currentStatus: string = 'Submitted';
const nextStatus: string = 'In Review';
let isAllowed: boolean = false;

switch (currentStatus) {
    case 'Submitted':
        isAllowed = nextStatus === 'In Review';
        break;
    case 'In Review':
        isAllowed = nextStatus === 'Resolved' || nextStatus === 'Waiting for info';
        break;
    case 'Waiting for info':
        isAllowed = nextStatus === 'Waiting for info';
        break;
    case 'Resolved':
        isAllowed = false;
        break;
    default:
        throw new Error(`Unknown status: ${statuses}`);

}
console.log(isAllowed ? 'Allowed' : 'Not Allowed');

/*for (const status of statuses)
    for (let i = 0; i < statuses.length; i++) {

        if ((statuses[i] === 'Submitted') && (statuses[i + 1] === 'In Review')) {
            isAllowed = true;
            console.log(isAllowed);
        }

    }
        */




