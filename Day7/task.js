const fetchUserData = async () => {
  try {
    const data = await fetch("https://dummyjson.com/users");
    const result = await data.json();
    const totalAge = summarizeAge(result.users);
    const processUsers = processUserData(result.users);
    displayResults(totalAge, processUsers);
  } catch (error) {
    return [];
  }
};

const users = await fetchUserData();
const processUserData = (users) => {
  const filteredUsers = users
    .filter((user) => user.gender === "male")
    .map(
      ({ firstName, lastName, age }) =>
        `Name: ${firstName} ${lastName}, Age: ${age}`
    );
  return filteredUsers;
};

const summarizeAge = (users) => {
  const maleUsers = users.filter((user) => user.gender === "male");
  const totalAge = maleUsers.reduce((sum, user) => sum + user.age, 0);
  return totalAge;
};

const displayResults = (totalAge, processUsers) => {
  console.log("Processed Users:");
  processUsers.forEach((user) => console.log("-", user));
  console.log("Total Age of Active Users:", totalAge);
  
}; 

fetchUserData();
