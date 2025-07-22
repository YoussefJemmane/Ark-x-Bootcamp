let num = 4;
let star = "*"
for (let i = 1; i<=num; i ++){
    let spaces = " ".repeat(num - i);
    let stars = star.repeat(2 * i - 1);
    console.log(spaces + stars);
}
console.log(" ".repeat(num - 1) + "|");

