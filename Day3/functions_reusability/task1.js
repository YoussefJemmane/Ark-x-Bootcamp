const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  console.log(result);
};

const nDigits = (num) => {
  let count = 0;
  while (num !== 0) {
    count++;
    num = Math.floor(num / 10);
  }

  console.log(count);
};

const numberToDay = (day) => {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
};

const max = (a, b, c) => {
  if (a > b && a > c) {
    console.log("max: " + a);
  } else if (b > c && b > a) {
    console.log("max: " + b);
  } else {
    console.log("max: " + c);
  }
};

const myGrade = (score) => {
  if (score < 0 || score > 100) {
    console.log("Invalid score");
  } else if (score > 85) {
    console.log("A");
  } else if (score <= 85 && score > 70) {
    console.log("B");
  } else if (score <= 70 && score > 55) {
    console.log("C");
  } else if (score <= 55 && score > 40) {
    console.log("D");
  } else if (score <= 40 && score > 15) {
    console.log("E");
  } else if (score <= 15) {
    console.log("F");
  } else {
    console.log("Invalid score");
  }
};
