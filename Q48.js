const numbers = [1, 2, 3, 4, 5];

try {
    
    const result = numbers.find(num => num > 10);

    if (result === undefined) {
        throw new Error('Element not found');
    }

    console.log('Found element:', result);
} catch (error) {
    console.error('Error:', error.message);
}
