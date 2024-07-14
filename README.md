# Javascript-Questions
JavaScript 50 Questions
1. Question: Reverse a string without using the built-in reverse() method.

2. Question: Count the number of vowels in a given string.

3. Question: Convert the first letter of each word in a sentence to uppercase.

4. Question: Check if a string is a palindrome.

5. Question: Find the sum of all positive numbers in an array.

6. Question: Find the index of the first occurrence of a specific element in an array.

7. Question: Remove all duplicates from an array without built-in methods.

8. Question: Sort the array in ascending and descending without built-in methods.

9. Question: Print all even numbers between 1 and 20 using a while loop.

10. Question: Calculate the factorial of a number using a do-while loop.

11. Question: Iterate through the properties of an object using a for-in loop.

12. Question: Loop through an array using a for-of loop and double each element.

13. Question: Check if a number is even or odd and return a corresponding message.

14. Question: Find the maximum of three numbers using nested ternary operators.

15. Question: Determine if a year is a leap year or not.

Section 02

1. Rewrite the following code using a ternary operator:
let result;
if (score >= 80) {
    result = "Pass";
} else {
    result = "Fail";
}

2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?

3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.

6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.

12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.

13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

Section 03
1. Map Transformation:
- Q: Given an array of integers, use the `map` method to square each element and return a new array with the squared values.

2. Filter and Map Combination:
- Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.

3. Sorting Objects:
- Q: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.

4. Reduce for Aggregation:
- Q: Use the `reduce` method to find the total sum of all even numbers in an array of integers.

5. Find and Modify:
- Q: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

6. Chaining Methods:
- Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

7. Conditional Filtering:
- Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

8. Advanced Sorting:
- Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

9. Nested Array Operations:
- Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

10. Error Handling with Find:
- Q: Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.

11. Map Method:
- Q: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

12. Filter Method:
- Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.

13. Sort Method:
- Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

14. Reduce Method:
- Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.

15. Find Method:
- Q: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.

16. Combining Methods:
- Q: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.

17. Callback Functions:
- Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.

18. Error Handling:
- Q: How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario.

19. Immutable Operations:
- Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.

20. Performance Considerations:
- Q: Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?
