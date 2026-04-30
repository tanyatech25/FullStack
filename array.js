// ### 1. Print each element (basic iteration)

// **Task:** Print every element of an array, one per line.

// **Use:** `for` or `for...of` loop

// **Input:** `const arr = [10, 20, 30, 40];`

// **Output:**

// ```
// 10
// 20
// 30
// 40
// ```

// **Hint:** Ask: what is index, what is value.

const arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// ### 2. Sum of array (accumulator)

// **Task:** Compute total sum.

// **Use:** `for` loop then `reduce` refactor

// **Input:** `[1,2,3,4]`

// **Output:** `10`

// **Hint:** Start with `total = 0`, add each element.

const arr = [1, 2, 3, 4];

let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}

console.log(total); // 10

// ### 3. Maximum value without Math.max

// **Task:** Find largest number by scanning once.

// **Use:** loop or `reduce`

// **Input:** `[5, 1, 9, 3]` → Output: `9`

// **Hint:** Initialize `max` to `-Infinity` or first element.

const arr = [5, 1, 9, 3];

let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max); // 9


// ### 4. Minimum value with reduce

// **Task:** Find minimum using `reduce`.

// **Use:** `reduce`

// **Input:** `[7, 3, 9, 0]` → Output: `0`

// **Hint:** `arr.reduce((min, v) => v < min ? v : min, Infinity)`

const arr = [7, 3, 9, 0];

const min = arr.reduce((min, v) => {
    return v < min ? v : min;
}, Infinity);

console.log(min); // 0


// ### 5. Reverse an array (manual)

// **Task:** Produce reversed array **without** `.reverse()`. Return new array (immutable).

// **Use:** loop or `reduce`

// **Input:** `[1,2,3]` → Output: `[3,2,1]`

// **Hint:** Build new array by pushing from end or unshift (inefficient).


const arr = [7, 3, 9, 0];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min); // 0


// ### 6. Remove duplicates (preserve order)

// **Task:** Remove duplicates, keep first occurrence. NO `Set`.

// **Use:** loop + `includes` or object lookup

// **Input:** `[1,2,2,3,1]` → Output: `[1,2,3]`

// **Hint:** Maintain seen map `{}`.

const arr = [1, 2, 2, 3, 1];

const result = [];

for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
        result.push(arr[i]);
    }
}

console.log(result); // [1, 2, 3]


// ### 7. Count element frequency (generic)

// **Task:** Return an object mapping value → count.

// **Use:** `reduce` or loop

// **Input:** `['a','b','a','c']` → Output: `{ a:2, b:1, c:1 }`

// **Hint:** Works for numbers/strings — stringify if needed.

const arr = ['a', 'b', 'a', 'c'];

const freq = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

console.log(freq); // { a: 2, b: 1, c: 1 }


// 8. Flatten 1-level nested array
// Task: Flatten only one nesting level: [1,[2,3],4] -> [1,2,3,4]
// Use: loop or reduce + spread
// Input: [1, [2,3], 4] → Output: [1,2,3,4]
// Hint: If element is array, append its elements.

const arr = [1, [2, 3], 4];

const result = [];

for (let val of arr) {
    if (Array.isArray(val)) {
        result.push(...val); // spread inner array
    } else {
        result.push(val);
    }
}

console.log(result); // [1, 2, 3, 4]


// ### 9. Rotate array by k steps (right)

// **Task:** Rotate right by `k` positions; immutably return result.

// **Use:** slice + spread or loop

// **Input:** `[1,2,3,4], k=1` → Output: `[4,1,2,3]`

// **Hint:** Normalize `k` with `k = k % length`.

const arr = [1, 2, 3, 4];
let k = 1;

k = k % arr.length;

const result = [
    ...arr.slice(-k),      // last k elements
    ...arr.slice(0, -k)    // remaining elements
];

console.log(result); // [4, 1, 2, 3]


// ### 10. Chunk array into size n

// **Task:** Split into subarrays of length `n`.

// **Use:** loop (increment by n) or `reduce`

// **Input:** `[1,2,3,4,5], n=2` → Output: `[[1,2],[3,4],[5]]`

// **Hint:** Last chunk can be smaller.

const arr = [1, 2, 3, 4, 5];
const n = 2;

const result = [];

for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
}

console.log(result); // [[1,2],[3,4],[5]]


// ### 11. Remove falsy values

// **Task:** Remove `false`, `0`, `''`, `null`, `undefined`, `NaN`.

// **Use:** `filter(Boolean)` (teach why Boolean works)

// **Input:** `[0,1,false,2,'',3,null]` → Output: `[1,2,3]`

// **Hint:** Show alternative: `filter(x => !!x)`.

const arr = [0, 1, false, 2, '', 3, null];

const result = arr.filter(Boolean);

console.log(result); // [1, 2, 3]

// ### 12. Find index of first occurrence (manual)

// **Task:** Implement `indexOf` manually (return -1 if not found).

// **Use:** loop

// **Input:** `['a','b','c'], 'b'` → Output: `1`

// **Hint:** Compare with `===`.

const arr = ['a', 'b', 'c'];
const target = 'b';

let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break; // first occurrence milte hi stop
    }
}

console.log(index); // 1


// ### 13. Merge two arrays immutably

// **Task:** Merge arrays into a single array **without** `concat()` (but spread allowed).

// **Use:** spread or loop

// **Input:** `[1,2], [3,4]` → Output: `[1,2,3,4]`

// **Hint:** Discuss performance difference.

const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result); // [1, 2, 3, 4]


// ### 14. Interleave two arrays

// **Task:** Create array by alternating elements: `[a1,a2]` with `[b1,b2]` → `[a1,b1,a2,b2]`. If lengths differ, append rest.

// **Use:** loop

// **Input:** `[1,2], [10,20]` → Output: `[1,10,2,20]`

// **Hint:** Loop up to `max(len1,len2)`.

const arr1 = [1, 2];
const arr2 = [10, 20];

const result = [];
const maxLen = Math.max(arr1.length, arr2.length);

for (let i = 0; i < maxLen; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
}

console.log(result); // [1, 10, 2, 20]


// ### 15. Sliding window sums (window size k)

// **Task:** For each window of size `k`, compute its sum (no reduce per window ideally).

// **Use:** loop with rolling sum

// **Input:** `[1,2,3,4], k=2` → Output: `[3,5,7]` (sums for [1,2],[2,3],[3,4])

// **Hint:** Teach O(n) rolling technique.

const arr = [1, 2, 3, 4];
const k = 2;

const result = [];
let windowSum = 0;

// first window
for (let i = 0; i < k; i++) {
    windowSum += arr[i];
}
result.push(windowSum);

// slide window
for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];       // add next element
    windowSum -= arr[i - k];   // remove element going out
    result.push(windowSum);
}

console.log(result); // [3, 5, 7]()


// ### 16. Create range array (inclusive)

// **Task:** Build `[start..end]` numbers.

// **Use:** loop

// **Input:** `start=3, end=6` → Output: `[3,4,5,6]`

// **Hint:** Validate `start <= end`, allow negative numbers.

function createRange(start, end) {
    if (start > end) return []; // validation

    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

console.log(createRange(3, 6)); // [3, 4, 5, 6]


// ### 17. Remove item at index immutably

// **Task:** Remove element at index `i` and return new array (do not mutate original).

// **Use:** spread + slice or filter

// **Input:** `[1,2,3], i=1` → Output: `[1,3]`

// **Hint:** Use `arr.slice(0,i)` + `arr.slice(i+1)`.

const arr = [1, 2, 3];
const i = 1;

const result = [
    ...arr.slice(0, i),
    ...arr.slice(i + 1)
];

console.log(result); // [1, 3]


// ### 18. Count elements matching predicate

// **Task:** Count how many elements satisfy a given condition (e.g., > 10).

// **Use:** `filter` then `.length` or `reduce`

// **Input:** `[5,12,8,20], condition: >10` → Output: `2`

// **Hint:** Convert to generic predicate function.

const arr = [5, 12, 8, 20];

const count = arr.filter(x => x > 10).length;

console.log(count); // 2


// ### 19. Unique sorted array

// **Task:** Remove duplicates and return sorted ascending array of numbers.

// **Use:** `reduce` + sort or `Set` + sort (teach both)

// **Input:** `[3,1,2,3,2]` → Output: `[1,2,3]`

// **Hint:** Sorting needed after dedupe.

const arr = [3, 1, 2, 3, 2];

const result = [...new Set(arr)].sort((a, b) => a - b);

console.log(result); // [1, 2, 3]


// ### 20. Map indices to values (index map)

// **Task:** Convert array into object where key is index and value is the element.

// **Use:** `reduce` or loop

// **Input:** `['a','b']` → Output: `{0:'a', 1:'b'}`

// **Hint:** Useful for quick lookups by index.

const arr = ['a', 'b'];

const result = arr.reduce((acc, val, index) => {
    acc[index] = val;
    return acc;
}, {});

console.log(result); // {0: 'a', 1: 'b'}

// SECTION-B- (OBJECTS)

// ### 21. List keys and values (iteration)

// **Task:** Print each `key value` pair.

// **Use:** `for...in` or `Object.keys()` + `forEach`

// **Input:** `{ name:'Aman', age:22 }`

const obj = { name: 'Aman', age: 22 };

for (let key in obj) {
    console.log(key, obj[key]);
}


// ### 22. Add / update property immutably

// **Task:** Add `role: "admin"` to object but return new object (no mutation).

// **Use:** spread operator

// **Input:** `{name:'Aman'}` → Output: `{name:'Aman', role:'admin'}`

// **Hint:** `const newObj = {...obj, role: 'admin'}` — explains overwrite semantics

const obj = { name: 'Aman' };

const newObj = { ...obj, role: 'admin' };

console.log(newObj); // { name: 'Aman', role: 'admin' }


// ### 23. Delete property immutably

// **Task:** Remove `password` field from user object and return a new object.

// **Use:** destructuring + rest `{ password, ...rest }`

// **Input:** `{name:'A', password:'x'}` → Output: `{name:'A'}`

// **Hint:** Show why `delete` mutates.

const user = { name: 'A', password: 'x' };

const { password, ...rest } = user;

console.log(rest); // { name: 'A' }


// ### 24. Merge two objects (deep vs shallow)

// **Task:** Merge `a` and `b` shallowly using spread, show limitation for nested objects.

// **Use:** spread `{...a, ...b}`

// **Input:** `a={x:1}, b={y:2}` → Output: `{x:1,y:2}`

// **Hint:** Explain shallow merge: nested objects are referenced, not cloned.

const a = { x: 1 };
const b = { y: 2 };

const result = { ...a, ...b };

console.log(result); // { x: 1, y: 2 }


// ### 25. Convert keys ↔ values (invert object)

// **Task:** Swap keys and values (`{a:1,b:2}` → `{1:'a',2:'b'}`). Assume values are strings/numbers & unique.

// **Use:** `Object.entries()` + `reduce`

// **Input:** `{a:1,b:2}` → Output: `{1:'a',2:'b'}`

// **Hint:** Values must be unique to become keys.

const obj = { a: 1, b: 2 };

const inverted = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

console.log(inverted); // { 1: 'a', 2: 'b' }


// ### 26. Deep clone simple object (no functions)

// **Task:** Make deep copy for object containing only plain values & arrays (no functions, no dates). Show difference from spread.

// **Use:** `JSON.parse(JSON.stringify(obj))` and explain caveats.

// **Input:** `{a:{b:2}}` → Output: deep clone copy

// **Hint:** Mention loss of `Date`, `undefined`, functions.

const obj = { a: { b: 2 } };

const clone = JSON.parse(JSON.stringify(obj));

console.log(clone); // { a: { b: 2 } }

// test
clone.a.b = 10;
console.log(obj.a.b);   // 2 (original safe)
console.log(clone.a.b); // 10


// ### 27. Count properties (keys)

// **Task:** Return number of own enumerable keys.

// **Use:** `Object.keys(obj).length`

// **Input:** `{a:1,b:2}` → Output: `2`

// **Hint:** Show difference vs `for...in` (includes prototype).

const obj = { a: 1, b: 2 };

const count = Object.keys(obj).length;

console.log(count); // 2


// ### 28. Default values using destructuring

// **Task:** Extract `name` and `role` with default `role='user'`.

// **Use:** destructuring with defaults

// **Input:** `{name:'A'}` → Output: `name='A', role='user'`

// **Hint:** Useful in function parameter defaults.

const obj = { name: 'A' };

const { name, role = 'user' } = obj;

console.log(name); // 'A'
console.log(role); // 'user'


// ### 29. Pick subset of properties (pick)

// **Task:** Create new object containing only specified keys. (e.g., pick `id` and `email`)

// **Use:** `reduce` over keys or destructuring + rest pattern per key

// **Input:** `{id:1, name:'A', email:'a@x'}`, keys `['id','email']` → Output: `{id:1,email:'a@x'}`

// **Hint:** Useful for API responses (hide fields).

const obj = { id: 1, name: 'A', email: 'a@x' };
const keys = ['id', 'email'];

const result = keys.reduce((acc, key) => {
    if (key in obj) {
        acc[key] = obj[key];
    }
    return acc;
}, {});

console.log(result); // { id: 1, email: 'a@x' }

// ### 30. Omit properties (opposite of pick)

// **Task:** Return new object without given keys (`omit ['password']`).

// **Use:** destructuring + rest or `Object.keys` reduce

// **Input:** `{user:'A', password:'x'}` → Output: `{user:'A'}`

// **Hint:** Server should never return passwords in API responses.

const obj = { user: 'A', password: 'x' };

const { password, ...rest } = obj;

console.log(rest); // { user: 'A' }

// ### 31. Merge nested objects immutably (one-level nested)

// **Task:** Update `user.address.city` immutably.

// **Use:** spread nested `{ ...user, address: { ...user.address, city: 'New' } }`

// **Input:** `{name:'A', address:{city:'Old', zip:123}}` → Output: city changed to 'New'

// **Hint:** Demonstrate multi-level spread for immutability.

const user = {
    name: 'A',
    address: { city: 'Old', zip: 123 }
};

const updatedUser = {
    ...user,
    address: {
        ...user.address,
        city: 'New'
    }
};

console.log(updatedUser);
// { name: 'A', address: { city: 'New', zip: 123 } }


// ### 32. Rename a key in object immutably

// **Task:** Rename `fullName` → `name` while preserving value.

// **Use:** destructure to pick value and spread rest

// **Input:** `{fullName:'A', age:20}` → Output: `{name:'A', age:20}`

// **Hint:** Implementation: `{ fullName, ...rest } = obj; newObj = { name: fullName, ...rest }`.

const obj = { fullName: 'A', age: 20 };

const { fullName, ...rest } = obj;

const newObj = {
    name: fullName,
    ...rest
};

console.log(newObj); // { name: 'A', age: 20 }


// ### 33. Merge defaults with provided config

// **Task:** Given `defaults` and `config`, return merged config where `config` overrides defaults.

// **Use:** spread `{...defaults, ...config}`

// **Input:** `defaults={retries:3}, config={timeout:100}` → Output: `{retries:3, timeout:100}`

// **Hint:** Order matters.

const defaults = { retries: 3 };
const config = { timeout: 100 };

const result = { ...defaults, ...config };

console.log(result); // { retries: 3, timeout: 100 }


// ### 34. Check if object is empty

// **Task:** Return boolean whether object has no own keys.

// **Use:** `Object.keys(obj).length === 0`

// **Input:** `{}` → Output: `true`

// **Hint:** Useful for validating payloads.

const obj = {};

const isEmpty = Object.keys(obj).length === 0;

console.log(isEmpty); // true


// SECTION C- ARRAY OF OBJECTS

// DATA :
// constusers= [
//   { id:1, name:"Aman", age:22, isActive:true },
//   { id:2, name:"Riya", age:17, isActive:false },
//   { id:3, name:"Rahul", age:25, isActive:true },
//   { id:4, name:"Neha", age:19, isActive:false }
// ];

// constorders= [
//   { id:1, userId:1, total:500, status:"completed" },
//   { id:2, userId:2, total:300, status:"pending" },
//   { id:3, userId:1, total:200, status:"completed" },
//   { id:4, userId:3, total:700, status:"completed" }
// ];

// ### 35. Total spending per user (aggregate)

// **Task:** Produce object `{ userId: totalSpent }`.

// **Use:** `reduce` on orders

// **Input:** `orders` above → Output: `{1:700, 2:300, 3:700}`

// **Hint:** Initialize accumulator `{}` and sum by `userId`.

const result = orders.reduce((acc, order) => {
    acc[order.userId] = (acc[order.userId] || 0) + order.total;
    return acc;
}, {});

console.log(result); // { 1: 700, 2: 300, 3: 700 }


// ### 36. Completed orders only (filter)

// **Task:** Return orders with `status === 'completed'`.

// **Use:** `filter`

// **Output:** orders with id 1,3,4 (from dataset)

// **Hint:** Common in controllers: `GET /orders?status=completed`.

const completedOrders = orders.filter(order => order.status === 'completed');

console.log(completedOrders);
/*
[
  { id:1, userId:1, total:500, status:"completed" },
  { id:3, userId:1, total:200, status:"completed" },
  { id:4, userId:3, total:700, status:"completed" }
]
*/


// ### 37. Join user info into orders (left join)

// **Task:** For each order, add `userName` from users dataset. If user not found, `userName: null`.

// **Use:** `map` + lookup (object map for users)

// **Input:** `orders, users` → Output: each order having `userName` field like `"Aman"`

// **Hint:** Precompute `userById` map for O(1) lookup.

const userById = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});


// ### 38. Orders grouped by userId

// **Task:** Return `{ userId: [orders...] }`.

// **Use:** `reduce`

// **Output:** `{1: [{id:1},{id:3}], 2: [{id:2}], 3: [...]}`

// **Hint:** Useful before sending per-user summaries.

const grouped = orders.reduce((acc, order) => {
    if (!acc[order.userId]) {
        acc[order.userId] = [];
    }
    acc[order.userId].push(order);
    return acc;
}, {});

console.log(grouped);


// ### 39. Top N orders by total (sorting + slice)

// **Task:** Return top `N` orders sorted by `total` descending.

// **Use:** `sort` (copy array) + `slice`

// **Input:** `N=2` → Output: orders with total 700 and 500 (ids 4 and 1)

// **Hint:** Avoid mutating original array: use `[...orders].sort(...)`.

const N = 2;

const result = [...orders] // copy to avoid mutation
    .sort((a, b) => b.total - a.total) // descending
    .slice(0, N);

console.log(result);
/*
[
  { id:4, userId:3, total:700, status:"completed" },
  { id:1, userId:1, total:500, status:"completed" }
]
*/

// ### 40. Average order total per user

// **Task:** Produce `{ userId: average }`.

// **Use:** `reduce` to sum and count, then map to average

// **Output:** For user 1: (500+200)/2 = 350 → `{1:350, 2:300, 3:700}`

// **Hint:** Either two-pass (sum & count) or store `{sum, count}` in accumulator.

// Step 1: aggregate sum & count
const stats = orders.reduce((acc, order) => {
    if (!acc[order.userId]) {
        acc[order.userId] = { sum: 0, count: 0 };
    }
    acc[order.userId].sum += order.total;
    acc[order.userId].count += 1;
    return acc;
}, {});

// Step 2: convert to averages
const result = Object.keys(stats).reduce((acc, userId) => {
    const { sum, count } = stats[userId];
    acc[userId] = sum / count;
    return acc;
}, {});

console.log(result); // { 1: 350, 2: 300, 3: 700 }


// ### 41. Users who placed at least one order (unique)

// **Task:** Return array of user names who have orders.

// **Use:** `map`+`Set` or `reduce` then map to names with `users` lookup

// **Output:** `["Aman","Riya","Rahul"]` (Neha has none)

// **Hint:** Show method using `new Set(orders.map(o=>o.userId))`.


const userIds = new Set(orders.map(o => o.userId));


const result = users
    .filter(user => userIds.has(user.id))
    .map(user => user.name);

console.log(result); // ["Aman", "Riya", "Rahul"]

// ### 42. Users with no orders (anti-join)

// **Task:** Return names of users who placed zero orders.

// **Use:** `filter` + set check

// **Output:** `["Neha"]`

// **Hint:** Compute set of userIds from orders then `users.filter(u => !set.has(u.id))`.


// Step 1: userIds who have orders
const userIdsWithOrders = new Set(orders.map(o => o.userId));

// Step 2: filter users NOT in that set
const result = users
    .filter(user => !userIdsWithOrders.has(user.id))
    .map(user => user.name);

console.log(result); // ["Neha"]


// ### 43. Paginate results (page, limit)

// **Task:** Implement a function to return page `p` with `limit` items from `orders` (1-indexed). Also return `totalPages`.

// **Use:** `slice` + math

// **Input:** `page=1, limit=2` → Output: `{ page:1, totalPages:2, data:[order1,order2] }`

// **Hint:** `totalPages = Math.ceil(totalItems / limit)`.

function paginate(data, page, limit) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedData = data.slice(start, end);

    return {
        page,
        totalPages,
        data: paginatedData
    };
}

// usage
const result = paginate(orders, 1, 2);

console.log(result);
/*
{
  page: 1,
  totalPages: 2,
  data: [
    { id:1

// ### 44. Search users by name substring (case-insensitive)

// **Task:** Return users whose name contains query string.

// **Use:** `filter` with `.toLowerCase().includes()`

// **Input:** query `'am'` → Output: `["Aman"]`

// **Hint:** Normalize both sides to lower**/

function searchUsers(users, query) {
    const q = query.toLowerCase();

    return users
        .filter(user => user.name.toLowerCase().includes(q))
        .map(user => user.name);
}

// usage
const result = searchUsers(users, 'am');

console.log(result); // ["Aman"]

// ### 45. Count orders by status (aggregation)

// **Task:** Return object `{status: count}`.

// **Use:** `reduce`

// **Output:** `{ completed:3, pending:1 }`

// **Hint:** Good for dashboard metrics.

const result = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
}, {});

console.log(result); // { completed: 3, pending: 1 }


// ### 46. Update order status immutably (PATCH pattern)

// **Task:** Given `orderId` and new `status`, return new orders array with updated order (do not mutate original).

// **Use:** `map` + spread per order

// **Input:** `orderId=2, status='completed'` → Output: orders where id 2 has `status: 'completed'`

// **Hint:** Useful for controllers responding to PATCH requests.

function updateOrderStatus(orders, orderId, newStatus) {
    return orders.map(order =>
        order.id === orderId
            ? { ...order, status: newStatus }
            : order
    );
}

// usage
const updatedOrders = updateOrderStatus(orders, 2, 'completed');

console.log(updatedOrders);
/*
[
  { id:1, userId:1, total:500, status:"completed" },
  { id:2, userId:2, total:3


// ### 47. Soft-delete pattern (mark deleted)

// **Task:** Return new orders array with `deleted: true` for given `orderId`. Do not remove from array.

// **Use:** `map` + spread

// **Input:** `orderId=3` → Output: order id 3 has `deleted:true`

// **Hint:** Backend often uses soft-delete for audit.

function softDeleteOrder(orders, orderId) {
    return orders.map(order =>
        order.id === orderId
            ? { ...order, deleted: true }
            : order
    );
}

// usage
const updatedOrders = softDeleteOrder(orders, 3);

console.log(updatedOrders);
/*
[
  { id:1, userId:1, total:500, status:"completed" },
  { id:2, userId:2, total:300, status:"pending" },
  { id:3, userId:1, total:200, status:"completed", deleted:true }, // marked
  { id:4, userId:3, total:700, status:"completed" }
]
*/


// ### 48. Merge two datasets into API response (user summary)

// **Task:** For each user return `{ userId, name, totalOrders, totalSpent }`.

// **Use:** `reduce` on orders to build map then `map` over users.

// **Output:** Example for Aman: `{userId:1, name:"Aman", totalOrders:2, totalSpent:700}`

// **Hint:** Use `ordersByUser` map to avoid nested loops.

const ordersByUser = orders.reduce((acc, order) => {
    if (!acc[order.userId]) {
        acc[order.userId] = { totalOrders: 0, totalSpent: 0 };
    }

    acc[order.userId].totalOrders += 1;
    acc[order.userId].totalSpent += order.total;

    return acc;
}, {});


// ### 49. Compute percent contribution per user (of total revenue)

// **Task:** Return `{userId: percentOfTotalRevenue}` as numbers with 2 decimals.

// **Use:** aggregate totals then compute percent

// **Input:** totals sum = 1700 → Aman 700 => 41.18% (700 / 1700 *100 ≈ 41.176...) → represent `41.18`

// **Hint:** Use `Number((value/total*100).toFixed(2))`.

const revenueByUser = orders.reduce((acc, order) => {
    acc[order.userId] = (acc[order.userId] || 0) + order.total;
    return acc;
}, {});

// ### 50. Transform orders to minimal DTO (Data Transfer Object)

// **Task:** Convert orders to `{ id, total }` array to send in a list endpoint.

// **Use:** `map`

// **Output:** `[{id:1,total:500}, ...]`

// **Hint:** Teach why reducing payload matters.

const result = orders.map(order => ({
    id: order.id,
    total: order.total
}));

console.log(result);


// ### 51. Add computed field — tax and grand total (map)

// **Task:** For each order compute `tax = total * 0.18` and `grandTotal = total + tax`, keep decimals rounded to 2 places. Return updated orders.

// **Use:** `map` + number rounding

// **Input:** `{total:100}` → `tax:18.00`, `grandTotal:118.00`

// **Hint:** `+(value.toFixed(2))` or `Math.round(value * 100)/100`.

const updatedOrders = orders.map(order => {
    const tax = order.total * 0.18;
    const grandTotal = order.total + tax;

    return {
        ...order,
        tax: Number(tax.toFixed(2)),
        grandTotal: Number(grandTotal.toFixed(2))
    };
});

console.log(updatedOrders);


// ### 52. Bulk update: increase totals by percentage for promotions

// **Task:** Increase `total` by 10% for all `completed` orders only and return new array.

// **Use:** `map` + condition + spread

// **Output:** order.id 1 total from 500 → 550 (if completed)

// **Hint:** Immutability: return new objects.

const updatedOrders = orders.map(order => {
    if (order.status === "completed") {
        const increasedTotal = order.total * 1.10;

        return {
            ...order,
            total: Number(increasedTotal.toFixed(2))
        };
    }

    return order;
});

console.log(updatedOrders);


// ### 53. Validate payloads: find invalid orders (missing fields)

// **Task:** Return orders missing any of `id`, `userId`, or `total`.

// **Use:** `filter` + predicate

// **Input:** dataset with one broken order e.g., `{id:5, total:100}` missing `userId` → Output: `[thatOrder]`

// **Hint:** Backend must sanitize input early.

const invalidOrders = orders.filter(order => {
    return (
        order.id === undefined ||
        order.userId === undefined ||
        order.total === undefined
    );
});

console.log(invalidOrders);


// ### 54. Merge newer orders array into existing (upsert)

// **Task:** Given existing `orders` and `incomingOrders` with some same ids, return merged array where incoming replaces existing by id, others kept — maintain order by id ascending.

// **Use:** build id map → combine → convert to array → sort

// **Input:** `existing [{id:1,...}], incoming [{id:1, total:600}]` → Output: id 1 uses incoming total 600

// **Hint:** Teaches upsert logic.

function upsertOrders(existing, incoming) {
    // Step 1: create map from existing
    const map = new Map();

    for (let order of existing) {
        map.set(order.id, order);
    }

    // Step 2: override with incoming (upsert logic)
    for (let order of incoming) {
        map.set(order.id, {
            ...map.get(order.id),
            ...order
        });
    }

    // Step 3: convert back to array + sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}


// ### 55. Group users by activity status (active/inactive)

// **Task:** Return `{ active: [users], inactive: [users] }`.

// **Use:** `reduce` or two filters

// **Output:** `{active: [{Aman},{Rahul}], inactive:[{Riya},{Neha}]}`

// **Hint:** Useful for admin dashboards.

const grouped = users.reduce((acc, user) => {
    if (user.isActive) {
        acc.active.push(user);
    } else {
        acc.inactive.push(user);
    }
    return acc;
}, { active: [], inactive: [] });

console.log(grouped);


// ### 56. Multi-criteria filter (age and activity)

// **Task:** Return users who are `isActive === true` AND `age >= 18`.

// **Use:** `filter` with combined conditions

// **Output:** `["Aman","Rahul"]`

// **Hint:** Show predicate composition.

const result = users
    .filter(user => user.isActive && user.age >= 18)
    .map(user => user.name);

console.log(result); // ["Aman", "Rahul"]


// ### 57. Compute histogram of ages (bucketed)

// **Task:** Bucket ages into ranges (e.g., `<18`, `18-24`, `25+`) and count users per bucket.

// **Use:** `reduce`

// **Input:** users above → Output example `{ '<18':1, '18-24':2, '25+':1 }`

// **Hint:** Good for analytics endpoints.

const result = users.reduce((acc, user) => {
    let bucket;

    if (user.age < 18) {
        bucket = "<18";
    } else if (user.age <= 24) {
        bucket = "18-24";
    } else {
        bucket = "25+";
    }

    acc[bucket] = (acc[bucket] || 0) + 1;
    return acc;
}, {});

console.log(result);


// ### 58. Build lookup map for users by id (cache)

// **Task:** Create `{ userId: userObject }` for fast access.

// **Use:** `reduce` or `Object.fromEntries(users.map(u => [u.id, u]))`

// **Output:** `{1: {...}, 2: {...}}`

// **Hint:** Explain performance gains vs repeated `find`.

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});

console.log(userMap);


// ### 59. Top K users by spending (join + sort)

// **Task:** Return top `k` user names by total spent across orders.

// **Use:** aggregate totals → convert to array → sort desc → slice → map names using user map

// **Input:** k=2 → Output: `["Aman","Rahul"]` if they are top two.

// **Hint:** Multi-step pipelines are common in services.

const spendingByUser = orders.reduce((acc, order) => {
    acc[order.userId] = (acc[order.userId] || 0) + order.total;
    return acc;
}, {});


// ### 60. Distinct values for a field (unique statuses)

// **Task:** Return array of distinct order statuses.

// **Use:** `new Set(orders.map(o=>o.status))` → convert to array

// **Output:** `["completed","pending"]`

// **Hint:** Useful for filter dropdowns.

const result = [...new Set(orders.map(order => order.status))];

console.log(result); // ["completed", "pending"]


// ### 61. Normalize nested arrays (orders with product arrays)

// **Task:** Given orders that have `products: [{productId, qty}]`, produce flattened list of `{orderId, productId, qty}` rows.

// **Use:** `flatMap` (or `map`+`flat`) or `reduce`

// **Input:** `[{id:1, products:[{productId:5,qty:2}]}]` → Output: `[{orderId:1, productId:5, qty:2}]`

// **Hint:** Teaches normalization for reporting.

const result = orders.flatMap(order =>
    order.products.map(product => ({
        orderId: order.id,
        productId: product.productId,
        qty: product.qty
    }))
);

console.log(result);



// ### 62. Calculate lifetime value per user (LTV) with weights

// **Task:** Suppose you weight completed orders full, pending half. Compute weighted total per user. (completed -> 1.0, pending -> 0.5).

// **Use:** `reduce` using weight map for status

// **Output:** `{1: 700 (both completed => 700), 2: 150 (pending 300*0.5)}`

// **Hint:** Real-world analytics often weight events.

const weightMap = {
    completed: 1,
    pending: 0.5
};

const ltv = orders.reduce((acc, order) => {
    const weight = weightMap[order.status] || 0;

    acc[order.userId] =
        (acc[order.userId] || 0) + order.total * weight;

    return acc;
}, {});

console.log(ltv);


// ### 63. Convert array of users to CSV string (export)

// **Task:** Convert `[{id:1,name:'A'}]` → `"id,name\n1,A\n"` — handle header row.

// **Use:** `map` + `join`

// **Output:** `"id,name\n1,A\n2,Riya\n..."`

// **Hint:** Teach escaping commas if names include them (bonus).


const users = [
  { id: 1, name: "A" },
  { id: 2, name: "Riya" }
];

const csv = [
  "id,name", // header row
  ...users.map(user => `${user.id},${user.name}`)
].join("\n");

console.log(csv);


// ### 64. Merge user preferences into user objects (left join with defaults)

// **Task:** Given `preferences = [{userId:1, theme:'dark'}]` merge into users so each user has `preferences` object; use defaults `{theme:'light'}` when missing.

// **Use:** build preference map + `map` on users + spread

// **Output:** `users[0].preferences = {theme:'dark'}`; others get `{theme:'light'}`

// **Hint:** Typical in profile endpoints.

const prefMap = preferences.reduce((acc, pref) => {
    acc[pref.userId] = pref;
    return acc;
}, {});


const result = users.map(user => ({
    ...user,
    preferences: {
        theme: "light",
        ...(prefMap[user.id] || {})
    }
}));

console.log(result);


// ### 65. Snapshot diff: detect changed users between two lists

// **Task:** Given `oldUsers` and `newUsers` arrays of user objects (same ids), return array of `{id, changedFields: [names...]}` for users with any changed primitive fields.

// **Use:** create maps by id, loop ids, compare shallow fields

// **Input:** `old [{id:1, name:'A'}], new [{id:1, name:'Aman'}]` → Output: `[{id:1, changedFields:['name']}]`

// **Hint:** Useful for generating change logs / audit events.

const oldMap = oldUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});

const newMap = newUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});
const result = [];

for (let id in newMap) {
    const oldUser = oldMap[id];
    const newUser = newMap[id];

    const changedFields = [];

    for (let key in newUser) {
        if (key === "id") continue; // skip id comparison

        if (oldUser?.[key] !== newUser[key]) {
            changedFields.push(key);
        }
    }

    if (changedFields.length > 0) {
        result.push({
            id: Number(id),
            changedFields
        });
    }
}

console.log(result);
