const person = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

const city = person.address?.city;

const data = {
    users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob', address: { city: 'Los Angeles' } }
    ]
};

const secondUserCity = data.users?.[1]?.address?.city;

const obj = {
    func: () => 'Hello'
};

const result = obj.func?.(); 
