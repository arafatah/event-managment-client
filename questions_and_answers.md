<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>let greetings called but there isn't any value provide, so this will not effect on any function, and then greeting ={}, there greeting provide a empty object, that's why now greeting value is a empty object, so that consol.log will be a {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>There is a function called sum, that will sum a+b, we can see in the bottom, there is sum(1, "2"), here one is a number and 2 is string, so we know that number are string when you will try to sum, string will not do sum, string will always place beside the number, so, that's why 2 which is string will beside the number 1 and the result return 12, which is a string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>In this code, the array of food are showing, after that there is a new variable called info, and the info is the 0 index means the first property on the array, but when it's consol.log it's just want to check the food, which is unchangable because there is no push or pop or any other command which will include that info there, so the array will be same, no change. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In the code the sayHi function expects a name parameter, but when i wanna  call it, there i don't pass any argument. that's why it will result in an error because i'm trying to check undefined perametter. </i></p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b> C: 3</b></summary>
<p>

#### Answer: ?

<i>In this code initial number is 0. and then there is a array of 4 numbers. Then the forEach method will iterates through each element of the nums array. in nums array is has 0, 1, 2, 3. this code will count the number of truthy values in the array, which are 1, 2, 3. Therefore, the final value will be be 3.</i>

</p>
</details>
