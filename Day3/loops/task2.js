let num = 123542;
let count = 0;

while (num > 0 && num % 10 == 0){
    console.log(num)
    num = num / 10
    count++;
}