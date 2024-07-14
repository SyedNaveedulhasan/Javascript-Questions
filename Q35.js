const items = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'in progress' },
    { id: 3, status: 'pending' },
    { id: 4, status: 'pending' }
];

const specificId = 2;

const foundItem = items.find(item => item.id === specificId);

if (foundItem) {
    foundItem.status = 'completed';
}

console.log(items);
