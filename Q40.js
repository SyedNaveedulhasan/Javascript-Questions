const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
];

function findItemById(items, id, defaultValue) {
    const foundItem = items.find(item => item.id === id);
    return foundItem !== undefined ? foundItem : defaultValue;
}

const result = findItemById(items, 4, { id: 4, name: 'Default Item' });
console.log(result); 
