# Day 2 ADHD Notes: Bootcamp

## 🚀 Quick Recap

- **Variables**: Boxes for storing data. Use `var`, `let`, or `const`.
- **Algorithms**: Step-by-step instructions (like a recipe).
- **Programs**: Instructions for computers, written in code.
- **Data Types**: Different kinds of values you can store.

---

## 🧠 Algorithms

- **What?**: Step-by-step guide to solve problems.
- **Example**: Counting people in a room.
- **Pseudocode**:
    ```js
    let n = 0;
    for each person in room:
        n = n + 1;
    ```
- **Optimization**: Count by pairs, handle odd numbers.

---

## 💻 Intro to JavaScript

- **What?**: Language for web, apps, games, ML, etc.
- **Why?**: Makes websites interactive.
- **How?**: Runs in browser or Node.js.
    - Install Node.js → Open terminal → Type `node` → Write JS code.

---

## 📦 Variables

- **What?**: Containers for values.
    ```js
    let coffeeAmount = 50;
    let sugarAmount = 10;
    ```
- **Why?**: Store/change info as program runs.
- **How?**: Use `var`, `let`, `const`.
    - Names: letters, numbers, `_`, `$`; start with letter/`_`/`$`; no spaces; not reserved words.
    - Use camelCase and descriptive names.

---

## 🧩 Basic Data Types

| Type      | Use Case                | Example                |
|-----------|-------------------------|------------------------|
| Number    | Math, counting          | `let n = 10.2;`        |
| String    | Text                    | `let s = "Hello";`     |
| Boolean   | True/false decisions    | `let isOld = true;`    |
| Null      | Intentional absence     | `let absent = null;`   |
| Undefined | Not assigned yet        | `let age;`             |

---

## 🔠 Strings

- **What?**: Text in quotes.
    ```js
    let name = "John";
    let msg = 'Hi!';
    const welcome = `Welcome!`;
    ```
- **Tricks**:
    - Concatenate: `first + " " + last`
    - Length: `msg.length`
    - Access: `word[0]`

---

## 🔢 Numbers & Arithmetic

- **What?**: Whole/decimal numbers.
    ```js
    let age = 30;
    let price = 12.99;
    ```
- **Operators**:
    - `+`, `-`, `*`, `/`, `%`, `**`
    - Comparisons: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`
    - Unary: `++`, `--`, `-num`

---

## ✅ Booleans

- **What?**: `true` or `false`
    ```js
    let isLoggedIn = true;
    let isNight = false;
    ```
- **Logical Operators**:
    - `&&` (AND), `||` (OR), `!` (NOT)

---

## ‼️ Null & Undefined

- **Null**: Intentional "no value"
    ```js
    let color = null;
    ```
- **Undefined**: Not assigned yet
    ```js
    let age; // undefined
    ```

---

## ❔ Conditional Statements

- **What?**: Decision-making in code.
- **Why?**: Make code dynamic.
- **How?**:
    ```js
    if (condition) {
        // do something
    } else if (other) {
        // do something else
    } else {
        // fallback
    }
    ```
- **Switch**:
    ```js
    switch (value) {
        case "red": /* ... */ break;
        default: /* ... */
    }
    ```
- **Ternary**:
    ```js
    age >= 18 ? "Adult" : "Minor";
    ```

---

## 🤔 Truthy vs Falsy

- **Falsy**: `""`, `0`, `NaN`, `null`, `undefined`, `false`
- **Truthy**: Anything else
    ```js
    if ("Hello") { /* runs */ }
    if (0) { /* doesn't run */ }
    ```

---

## 📝 ADHD Tips

- Focus on **examples** and **syntax**.
- Practice by changing values and seeing results.
- Use comments to remind yourself what each part does.
- Don’t stress about memorizing—experiment and play!
