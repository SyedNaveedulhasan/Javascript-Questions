const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];


const updatedUsers = users.map(user => {
    if (user.id === 2) {
        return { ...user, name: 'Bobby' }; 
    }
    return user; 
});

console.log('Original users:', users);
console.log('Updated users:', updatedUsers);


const removedUser = users.filter(user => user.id !== 2);

console.log('Users after removal:', removedUser);
