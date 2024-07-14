const users = [
    { id: 1, name: 'Alice', address: { city: 'New York' } },
    { id: 2, name: 'Bob' }
];

users.forEach(user => {
    const city = user.address?.city || 'Unknown';
    console.log(`${user.name} lives in ${city}`);
});
