const creditCardMask = (string) => {
  let masked = ""
  for (let i = 0; i < string.length ; i++) {
    if (i < string.length - 4){
        masked += "#"
    } else {
        masked += string[i]
    }
   
  }
  return masked
};

console.log(creditCardMask("1234567890123456")); 