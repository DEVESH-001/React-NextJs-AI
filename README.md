# React-NextJs-AI
Master React and Next.Js by building real-world, full-stack AI-powered applications and much more . . .

# Complete JavaScript Concepts & Polyfills Guide

## Table of Contents

1. [Scope](#scope)
2. [Hoisting & Temporal Dead Zone](#hoisting--temporal-dead-zone)
3. [Closures](#closures)
4. [Prototypes & Prototype Chain](#prototypes--prototype-chain)
5. [This Keyword](#this-keyword)
6. [Call, Apply, Bind](#call-apply-bind)
7. [Currying](#currying)
8. [Memoization](#memoization)
9. [Promises & Async/Await](#promises--asyncawait)
10. [Event Loop & Microtask Queue](#event-loop--microtask-queue)
11. [Event Handling](#event-handling)
12. [Type Coercion vs Conversion](#type-coercion-vs-conversion)
13. [Throttle & Debounce](#throttle--debounce)
14. [Spread Operator & Rest Parameters](#spread-operator--rest-parameters)
15. [Object Creation Methods](#object-creation-methods)
16. [Arrow Functions](#arrow-functions)
17. [Execution Context & Call Stack](#execution-context--call-stack)
18. [Generators](#generators)
19. [Variable Shadowing & Strict Mode](#variable-shadowing--strict-mode)
20. [Polyfills](#polyfills)

---

## Scope

**Scope** determines the accessibility of variables and functions in a program. JavaScript has three types of scope:

### 1. Global Scope

Variables declared outside any function or block are globally accessible from anywhere.

```javascript
var globalVar = "I'm global";

function test() {
    console.log(globalVar); // "I'm global"
}

console.log(globalVar); // "I'm global"
```

### 2. Function Scope (Local Scope)

Variables declared inside a function are only accessible within that function. This applies to `var` declarations.

```javascript
function outer() {
    var localVar = "I'm local";
    console.log(localVar); // "I'm local"
}

console.log(localVar); // ReferenceError: localVar is not defined
```

### 3. Block Scope

Variables declared with `let` and `const` inside blocks (if, for, while) are accessible only within that block.

```javascript
if (true) {
    let blockVar = "I'm in block";
    const blockConst = "Also in block";
    console.log(blockVar); // "I'm in block"
}

console.log(blockVar); // ReferenceError
console.log(blockConst); // ReferenceError
```

### Scope Chain

JavaScript looks for variables in the current scope, then in the parent scope, and continues up to the global scope.

```javascript
var globalVar = "global";

function outer() {
    var outerVar = "outer";

    function inner() {
        var innerVar = "inner";
        console.log(innerVar); // "inner"
        console.log(outerVar); // "outer"
        console.log(globalVar); // "global"
    }

    inner();
}

outer();
```

---

## Hoisting & Temporal Dead Zone

### Hoisting

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope before code execution.

#### Var Hoisting

`var` declarations are hoisted and initialized with `undefined`.

```javascript
console.log(x); // undefined (not an error)
var x = 5;
console.log(x); // 5

// Internally processed as:
// var x;
// console.log(x); // undefined
// x = 5;
```

#### Function Hoisting

Function declarations are completely hoisted.

```javascript
sayHello(); // "Hello!" (works fine)

function sayHello() {
    console.log("Hello!");
}
```

Function expressions are NOT hoisted:

```javascript
sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
    console.log("Goodbye!");
};
```

#### Let & Const Hoisting

`let` and `const` are hoisted but not initialized, creating the **Temporal Dead Zone (TDZ)**.

### Temporal Dead Zone (TDZ)

The **TDZ** is the period between entering a scope and reaching the variable declaration.

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;

// The zone above is TDZ - variable exists but cannot be accessed
```

```javascript
function example() {
    // TDZ starts here
    console.log(z); // ReferenceError
    let z = 10;
    // TDZ ends here
}
```

---

## Closures

A **closure** is a function that has access to variables from its outer scope even after that function has returned.

### Basic Example

```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

The `inner` function maintains access to the `count` variable through closure.

### Data Privacy

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.balance); // undefined (private)
```

### Closure in Loops

Common issue with closures in loops:

```javascript
// Problem
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 1000);
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2
    }, 1000);
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0, 1, 2
        }, 1000);
    })(i);
}
```

---

## Prototypes & Prototype Chain

### Prototype Basics

Every JavaScript object has a prototype. The prototype is an object from which other objects inherit properties and methods.

```javascript
const obj = {};
console.log(obj.__proto__); // Points to Object.prototype
console.log(Object.getPrototypeOf(obj)); // Better way
```

### Prototype Chain

When accessing a property, JavaScript looks in this order:

1. The object itself
2. The object's prototype
3. The prototype's prototype
4. Continue up to `null`

```javascript
const parent = {
    greet: function() {
        console.log("Hello from parent");
    }
};

const child = Object.create(parent);
child.greet(); // "Hello from parent" - found in prototype chain
```

### Constructor Functions

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
};

const person1 = new Person("Alice", 30);
console.log(person1.introduce()); // "Hello, I'm Alice and I'm 30 years old"
```

### Prototype Inheritance

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
};

const dog = new Dog("Rex", "Golden Retriever");
dog.speak(); // "Rex makes a sound"
dog.bark(); // "Rex barks"
```

---

## This Keyword

The `this` keyword refers to the object that the function is a method of or the object it was called with.

### 1. Global Context

In the global scope, `this` refers to the global object.

```javascript
console.log(this); // window (in browsers) or global (in Node.js)

function test() {
    console.log(this); // window or global
}

test();
```

### 2. Object Method

When a function is called as a method of an object, `this` refers to that object.

```javascript
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

person.greet(); // "Hello, John"
```

### 3. Constructor Function

When used with the `new` keyword, `this` refers to the newly created object.

```javascript
function Car(brand) {
    this.brand = brand;
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // "Toyota"
```

### 4. Explicit Binding (call, apply, bind)

See the Call, Apply, Bind section below.

### 5. Arrow Functions

Arrow functions don't have their own `this`. They inherit it from the parent scope.

```javascript
const person = {
    name: "John",
    greet: function() {
        const arrow = () => {
            console.log(this.name); // "John" - inherits from greet
        };
        arrow();
    }
};

person.greet(); // "John"
```

---

## Call, Apply, Bind

These methods allow you to control what `this` refers to.

### Call

`call()` invokes a function with a specified `this` value and arguments passed individually.

```javascript
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // "Hello, Alice!"
```

### Apply

`apply()` is similar to `call()`, but arguments are passed as an array.

```javascript
function introduce(hobby1, hobby2) {
    console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
}

const person = { name: "Bob" };
const hobbies = ["reading", "gaming"];

introduce.apply(person, hobbies); // "Bob likes reading and gaming"
```

### Bind

`bind()` returns a new function with the `this` value permanently set.

```javascript
function getName() {
    return this.name;
}

const person = { name: "Charlie" };
const boundGetName = getName.bind(person);

console.log(boundGetName()); // "Charlie"
```

### Polyfill for Call

```javascript
Function.prototype.myCall = function(thisArg, ...args) {
    thisArg.fn = this;
    const result = thisArg.fn(...args);
    delete thisArg.fn;
    return result;
};

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "David" };
greet.myCall(person, "Hi"); // "Hi, David"
```

### Polyfill for Apply

```javascript
Function.prototype.myApply = function(thisArg, argsArray = []) {
    thisArg.fn = this;
    const result = thisArg.fn(...argsArray);
    delete thisArg.fn;
    return result;
};
```

### Polyfill for Bind

```javascript
Function.prototype.myBind = function(thisArg, ...args) {
    const originalFn = this;
    return function(...newArgs) {
        return originalFn.apply(thisArg, [...args, ...newArgs]);
    };
};
```

---

## Currying

**Currying** converts a function with multiple arguments into a series of functions, each taking one argument.

### Basic Example

```javascript
// Normal function
function add(a, b, c) {
    return a + b + c;
}

// Curried version
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Usage
console.log(curriedAdd(1)(2)(3)); // 6

// Partial application
const add1 = curriedAdd(1);
const add1and2 = add1(2);
console.log(add1and2(3)); // 6
```

### Arrow Function Version

```javascript
const curriedAdd = (a) => (b) => (c) => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6
```

### Generic Curry Function

```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
```

### Infinite Currying

```javascript
function infiniteCurry(a) {
    return function(b) {
        if (b === undefined) {
            return a;
        }
        a += b;
        return infiniteCurry(a);
    };
}

console.log(infiniteCurry(1)(2)(3)(4)()); // 10
console.log(infiniteCurry(5)(10)()); // 15
```

---

## Memoization

**Memoization** caches function results to avoid recalculating the same values.

### Basic Example

```javascript
function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }

    if (n <= 1) {
        return n;
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(10)); // 55 (much faster than without memoization)
```

### Generic Memoization Function

```javascript
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            console.log(`Returning cached result for ${key}`);
            return cache[key];
        }

        console.log(`Calculating result for ${key}`);
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const expensiveFunction = (n) => {
    // Simulate expensive operation
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum + n;
};

const memoizedExpensive = memoize(expensiveFunction);

console.log(memoizedExpensive(5)); // Calculating...
console.log(memoizedExpensive(5)); // Returning cached result
```

### Closure-Based Memoization

```javascript
const memoizedAdd = (function() {
    const cache = {};

    return function(a, b) {
        const key = `${a},${b}`;

        if (key in cache) {
            return cache[key];
        }

        const result = a + b;
        cache[key] = result;
        return result;
    };
})();

console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (from cache)
```

---

## Promises & Async/Await

### Promises

A **Promise** represents the eventual completion or failure of an asynchronous operation.

```javascript
// Creating a Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

// Handling a Promise
promise
    .then((result) => {
        console.log(result); // "Success!"
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Done");
    });
```

### Promise Chaining

```javascript
function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John" });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, title: "Post 1" }]);
        }, 1000);
    });
}

fetchUser(1)
    .then((user) => {
        console.log(user);
        return fetchPosts(user.id);
    })
    .then((posts) => {
        console.log(posts);
    });
```

### Promise.all()

Waits for all promises to resolve or any to reject.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("foo"), 100);
});
const promise3 = fetch("https://api.example.com");

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // [3, 'foo', Response]
    })
    .catch((error) => {
        console.error(error);
    });
```

### Promise.race()

Returns as soon as any promise settles.

```javascript
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 100);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 200);
});

Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value); // "First"
    });
```

### Promise.allSettled()

Waits for all promises to settle (resolve or reject).

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve("Another Success");

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 'Success' },
        //   { status: 'rejected', reason: 'Error' },
        //   { status: 'fulfilled', value: 'Another Success' }
        // ]
    });
```

### Promise.any()

Returns as soon as any promise fulfills.

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 100);
});
const promise3 = Promise.reject("Error 3");

Promise.any([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); // "Success"
    });
```

### Async/Await

Modern way to handle promises with a more synchronous syntax.

```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fetch complete");
    }
}

fetchData();
```

### Async/Await with Multiple Operations

```javascript
async function fetchUserAndPosts(userId) {
    try {
        const userResponse = await fetch(`/api/users/${userId}`);
        const user = await userResponse.json();

        const postsResponse = await fetch(`/api/posts?userId=${userId}`);
        const posts = await postsResponse.json();

        return { user, posts };
    } catch (error) {
        console.error("Error:", error);
    }
}
```

### Async/Await with Promise.all()

```javascript
async function fetchMultiple() {
    try {
        const [user, posts, comments] = await Promise.all([
            fetch("/api/users/1").then(r => r.json()),
            fetch("/api/posts/1").then(r => r.json()),
            fetch("/api/comments/1").then(r => r.json())
        ]);

        console.log({ user, posts, comments });
    } catch (error) {
        console.error(error);
    }
}
```

---

## Event Loop & Microtask Queue

### How JavaScript Executes

1. **Call Stack**: Executes synchronous code
2. **Microtask Queue**: High-priority async tasks (Promises, async functions)
3. **Macrotask Queue (Callback Queue)**: Lower-priority async tasks (setTimeout, setInterval)

### Execution Order

```javascript
console.log("1: Start"); // Synchronous

setTimeout(() => {
    console.log("2: setTimeout"); // Macrotask
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3: Promise"); // Microtask
    });

console.log("4: End"); // Synchronous

// Output:
// 1: Start
// 4: End
// 3: Promise
// 2: setTimeout
```

### Detailed Example

```javascript
console.log("Script start");

setTimeout(() => {
    console.log("setTimeout 1");
    Promise.resolve().then(() => {
        console.log("Promise inside setTimeout");
    });
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
        setTimeout(() => {
            console.log("setTimeout inside Promise");
        }, 0);
    })
    .then(() => {
        console.log("Promise 2");
    });

console.log("Script end");

// Output:
// Script start
// Script end
// Promise 1
// Promise 2
// setTimeout 1
// Promise inside setTimeout
// setTimeout inside Promise
```

---

## Event Handling

### Event Bubbling

Events propagate from the target element up through its ancestors.

```javascript
<div id="outer">
    <div id="middle">
        <button id="btn">Click me</button>
    </div>
</div>

<script>
    document.getElementById("btn").addEventListener("click", (e) => {
        console.log("Button clicked");
    });

    document.getElementById("middle").addEventListener("click", (e) => {
        console.log("Middle div clicked");
    });

    document.getElementById("outer").addEventListener("click", (e) => {
        console.log("Outer div clicked");
    });
</script>

// Output when clicking button:
// Button clicked
// Middle div clicked
// Outer div clicked
```

### Event Capturing

Events propagate from the root down to the target element.

```javascript
document.getElementById("btn").addEventListener(
    "click",
    (e) => console.log("Button"),
    true // Capture phase
);

document.getElementById("middle").addEventListener(
    "click",
    (e) => console.log("Middle"),
    true
);

document.getElementById("outer").addEventListener(
    "click",
    (e) => console.log("Outer"),
    true
);

// Output:
// Outer
// Middle
// Button
```

### Event Delegation

Use a parent element to handle events for multiple child elements.

```javascript
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    document.getElementById("list").addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            console.log("Clicked:", e.target.textContent);
        }
    });
</script>
```

### Stop Propagation

```javascript
document.getElementById("btn").addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Stops bubbling
});

document.getElementById("outer").addEventListener("click", (e) => {
    console.log("Outer clicked"); // Won't execute
});
```

---

## Type Coercion vs Conversion

### Type Conversion (Explicit)

Deliberately converting from one type to another.

```javascript
// String conversion
const num = 123;
const str = String(num); // "123"
const str2 = num.toString(); // "123"

// Number conversion
const str3 = "456";
const num2 = Number(str3); // 456
const num3 = parseInt(str3); // 456

// Boolean conversion
const bool = Boolean(1); // true
const bool2 = Boolean(0); // false
const bool3 = Boolean(""); // false
const bool4 = Boolean("hello"); // true
```

### Type Coercion (Implicit)

JavaScript automatically converts types during operations.

```javascript
// String concatenation coerces to string
console.log("5" + 3); // "53"
console.log(true + 1); // 2 (true becomes 1)

// Arithmetic operations coerce to number
console.log("10" - "3"); // 7
console.log("10" * "2"); // 20
console.log("10" / "2"); // 5

// Comparison operators
console.log("10" == 10); // true (loose equality with coercion)
console.log("10" === 10); // false (strict equality, no coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### Truthy and Falsy Values

```javascript
// Falsy values
const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];

falsy.forEach((value) => {
    console.log(Boolean(value)); // false
});

// Truthy values
const truthy = [true, 1, "0", "false", [], {}, () => {}];

truthy.forEach((value) => {
    console.log(Boolean(value)); // true
});
```

---

## Throttle & Debounce

### Debounce

Delays function execution until after a specified time without new calls.

```javascript
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Usage: Search input that makes API calls
const handleSearch = debounce((query) => {
    console.log("Searching for:", query);
    // Make API call
}, 500);

// Simulating user typing
handleSearch("a");
handleSearch("ab");
handleSearch("abc"); // Only this will execute after 500ms
```

### Throttle

Limits function execution to once per specified interval.

```javascript
function throttle(fn, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Usage: Scroll event
const handleScroll = throttle(() => {
    console.log("Scroll event fired");
}, 1000);

window.addEventListener("scroll", handleScroll);
// Function runs at most once per second
```

### Advanced Throttle (with trailing call)

```javascript
function throttleWithTrailing(fn, delay) {
    let lastCall = 0;
    let timeoutId = null;

    return function(...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastCall = Date.now();
                fn.apply(this, args);
            }, delay - (now - lastCall));
        }
    };
}
```

---

## Spread Operator & Rest Parameters

### Spread Operator (...)

Spreads elements of an array or object.

```javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Object spread
const obj1 = { name: "John", age: 30 };
const obj2 = { ...obj1, city: "New York" };
// { name: 'John', age: 30, city: 'New York' }

// Function arguments
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

// Combining arrays
const combined = [...arr1, ...arr2]; // [1, 2, 3, 1, 2, 3, 4, 5]
```

### Rest Parameters

Collects multiple arguments into an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

function greet(greeting, ...names) {
    console.log(`${greeting} ${names.join(", ")}`);
}

greet("Hello", "John", "Jane", "Bob"); // "Hello John, Jane, Bob"
```

### Rest in Destructuring

```javascript
// Array destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// Object destructuring
const { name, ...others } = { name: "John", age: 30, city: "NYC" };
console.log(name); // "John"
console.log(others); // { age: 30, city: 'NYC' }
```

---

## Object Creation Methods

### 1. Object Literal

```javascript
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet(); // "Hello, I'm John"
```

### 2. Constructor Function

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const person = new Person("John", 30);
person.greet();
```

### 3. Factory Function

```javascript
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, I'm ${this.name}`);
        }
    };
}

const person = createPerson("John", 30);
person.greet();
```

### 4. Object.create()

```javascript
const personPrototype = {
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 30;
person.greet();
```

### 5. Class (ES6)

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const person = new Person("John", 30);
person.greet();
```

---

## Arrow Functions

### Syntax

```javascript
// Single expression
const add = (a, b) => a + b;

// Multiple statements
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Single parameter (parentheses optional)
const square = (x) => x * x;
const square2 = x => x * x;

// No parameters
const greet = () => "Hello";
```

### Key Differences from Regular Functions

#### 1. No own `this`

```javascript
const person = {
    name: "John",
    greet: function() {
        console.log(this.name); // "John" - regular function
    },
    arrowGreet: () => {
        console.log(this.name); // undefined - arrow inherits from global
    }
};

person.greet(); // "John"
person.arrowGreet(); // undefined
```

#### 2. Cannot be used as constructors

```javascript
function Person(name) {
    this.name = name;
}

const person1 = new Person("John"); // Works

const ArrowPerson = (name) => {
    this.name = name;
};

const person2 = new ArrowPerson("Jane"); // TypeError
```

#### 3. No `arguments` object

```javascript
function regular(a, b) {
    console.log(arguments); // [1, 2]
}

const arrow = (a, b) => {
    console.log(arguments); // ReferenceError
};

regular(1, 2);
arrow(1, 2);

// Use rest parameters instead
const arrow2 = (...args) => {
    console.log(args); // [1, 2]
};
```

---

## Execution Context & Call Stack

### Execution Context

An execution context is created every time a function is called. It contains:

1. **Variable Environment**: Variables created via `var`
2. **Lexical Environment**: Variables created via `let` and `const`
3. **This Binding**: The value of `this`

### Call Stack

Stack that keeps track of function execution.

```javascript
function a() {
    console.log("a");
    b();
}

function b() {
    console.log("b");
    c();
}

function c() {
    console.log("c");
}

a();

// Call Stack progression:
// 1. [global]
// 2. [global, a]
// 3. [global, a, b]
// 4. [global, a, b, c]
// 5. [global, a, b]
// 6. [global, a]
// 7. [global]

// Output:
// a
// b
// c
```

### Lexical Environment

Defines which variables are accessible based on where code is written.

```javascript
const globalVar = "global";

function outer() {
    const outerVar = "outer";

    function inner() {
        const innerVar = "inner";
        console.log(innerVar); // "inner" - own scope
        console.log(outerVar); // "outer" - outer scope
        console.log(globalVar); // "global" - global scope
    }

    inner();
}

outer();
```

---

## Generators

Generators are functions that can pause and resume execution.

```javascript
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator with Loop

```javascript
function* rangeGenerator(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}

for (let value of rangeGenerator(1, 5)) {
    console.log(value); // 1, 2, 3, 4
}
```

### Generator with Two-way Communication

```javascript
function* twoWayGen() {
    const first = yield "First message";
    console.log("Received:", first);

    const second = yield "Second message";
    console.log("Received:", second);
}

const gen = twoWayGen();
console.log(gen.next()); // { value: 'First message', done: false }
console.log(gen.next("Hello")); // Received: Hello
// { value: 'Second message', done: false }
console.log(gen.next("World")); // Received: World
// { value: undefined, done: true }
```

### Async Generators

```javascript
async function* asyncGen() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (let value of asyncGen()) {
        console.log(value); // 1, 2, 3
    }
})();
```

---

## Variable Shadowing & Strict Mode

### Variable Shadowing

Inner variable hides outer variable with the same name.

```javascript
let x = "outer";

{
    let x = "inner";
    console.log(x); // "inner"
}

console.log(x); // "outer"

// Function example
function test() {
    let name = "function scope";

    if (true) {
        let name = "block scope";
        console.log(name); // "block scope"
    }

    console.log(name); // "function scope"
}

test();
```

### Strict Mode

Enforces stricter parsing and error handling.

```javascript
"use strict";

x = 3.14; // Error: x is not defined
```

#### Strict Mode Rules

```javascript
"use strict";

// 1. Variables must be declared
y = "string"; // ReferenceError

// 2. Cannot delete variables
let z = 10;
delete z; // SyntaxError

// 3. Function parameters must be unique
function sum(a, a, c) {
    // SyntaxError
    return a + a + c;
}

// 4. this is undefined in functions
function greet() {
    console.log(this); // undefined (not global object)
}

greet();

// 5. eval doesn't modify scope
eval("var w = 10");
console.log(typeof w); // undefined
```

---

## Polyfills

### Array.prototype.map()

```javascript
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback, thisArg) {
        if (!Array.isArray(this)) {
            throw new TypeError(this + " is not an array");
        }

        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                result[i] = callback.call(thisArg, this[i], i, this);
            }
        }
        return result;
    };
}

// Usage
const nums = [1, 2, 3];
const doubled = nums.myMap((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

### Array.prototype.filter()

```javascript
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback, thisArg) {
        if (!Array.isArray(this)) {
            throw new TypeError(this + " is not an array");
        }

        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (i in this && callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

// Usage
const nums = [1, 2, 3, 4, 5];
const evens = nums.myFilter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
```

### Array.prototype.reduce()

```javascript
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callback, initialValue) {
        if (!Array.isArray(this)) {
            throw new TypeError(this + " is not an array");
        }

        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        let accumulator = initialValue;
        let startIndex = 0;

        if (arguments.length < 2) {
            if (this.length === 0) {
                throw new TypeError(
                    "Reduce of empty array with no initial value"
                );
            }
            accumulator = this[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < this.length; i++) {
            if (i in this) {
                accumulator = callback.call(
                    undefined,
                    accumulator,
                    this[i],
                    i,
                    this
                );
            }
        }

        return accumulator;
    };
}

// Usage
const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, n) => acc + n, 0);
console.log(sum); // 10
```

### Array.prototype.forEach()

```javascript
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(callback, thisArg) {
        if (!Array.isArray(this)) {
            throw new TypeError(this + " is not an array");
        }

        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                callback.call(thisArg, this[i], i, this);
            }
        }
    };
}

// Usage
const nums = [1, 2, 3];
nums.myForEach((n) => console.log(n * 2)); // 2, 4, 6
```

### Promise Polyfill (Basic)

```javascript
class MyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilled = [];
        this.onRejected = [];

        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.onFulfilled.forEach((fn) => fn(value));
            }
        };

        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;
                this.onRejected.forEach((fn) => fn(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handleFulfilled = () => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            };

            const handleRejected = () => {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            };

            if (this.state === "fulfilled") {
                setTimeout(handleFulfilled, 0);
            } else if (this.state === "rejected") {
                setTimeout(handleRejected, 0);
            } else {
                this.onFulfilled.push(handleFulfilled);
                this.onRejected.push(handleRejected);
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }
}

// Usage
new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000);
})
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```

### Debounce Polyfill

```javascript
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Usage
const handleResize = debounce(() => {
    console.log("Window resized");
}, 500);

window.addEventListener("resize", handleResize);
```

### Throttle Polyfill

```javascript
function throttle(fn, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Usage
const handleScroll = throttle(() => {
    console.log("Scroll event");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

### Flatten Deeply Nested Object

```javascript
function flattenObject(obj, prefix = "") {
    const result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (
                obj[key] !== null &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key])
            ) {
                Object.assign(
                    result,
                    flattenObject(obj[key], newKey)
                );
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

// Usage
const nested = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

const flattened = flattenObject(nested);
console.log(flattened);
// { a: 1, 'b.c': 2, 'b.d.e': 3 }
```

### Deep vs Shallow Copy

```javascript
// Shallow Copy
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };

shallow.a = 999;
shallow.b.c = 999;

console.log(original.a); // 1 (unchanged)
console.log(original.b.c); // 999 (changed - same reference)

// Deep Copy
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof Array) {
        return obj.map((item) => deepCopy(item));
    }

    const copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

// Usage
const original2 = { a: 1, b: { c: 2 } };
const deep = deepCopy(original2);

deep.a = 999;
deep.b.c = 999;

console.log(original2.a); // 1
console.log(original2.b.c); // 2 (unchanged)
```

---

This comprehensive guide covers all major JavaScript concepts with practical examples. Practice these concepts regularly and experiment with the code examples to deepen your understanding!
