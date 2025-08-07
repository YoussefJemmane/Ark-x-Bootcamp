function isIsogram(str){
  const lower = str.toLowerCase()
  const set = new Set()
  for (const char of lower){
      if (set.has(char)){
        return false
      }
      set.add(char)

  }
  return true
}

console.log(isIsogram("isogram")); 
console.log(isIsogram("hello")); 
console.log(isIsogram("world")); 