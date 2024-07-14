const originalObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};


const shallowCopy = Object.assign({}, originalObject);


const deepCopy = JSON.parse(JSON.stringify(originalObject));


const referenceCopy = originalObject;


originalObject.age = 35;
originalObject.address.city = 'San Francisco';

console.log('Original Object:', originalObject);
console.log('Shallow Copy:', shallowCopy);
console.log('Deep Copy:', deepCopy);
console.log('Reference Copy:', referenceCopy);
