const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contactList = [];

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const addUser = async () => {
  const name = await askQuestion("Enter user's name: ");
  const phone = await askQuestion("Enter user's phone number: ");

  if (!name || !phone) {
    console.log("All fields are required. Please try again.");
    return;
  }

  const user = { name, phone };
  contactList.push(user);
  console.log("✅ User added successfully!");
};

const viewUsers = () => {
  if (contactList.length === 0) {
    console.log("📭 No users found.");
  } else {
    console.log("📋 Contact List:");
    contactList.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} - ${user.phone}`);
    });
  }
};

const searchUser = async () => {
  const searchTerm = await askQuestion("🔍 Enter name to search: ");
  const results = contactList.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (results.length === 0) {
    console.log("❌ No matching users found.");
  } else {
    console.log("✅ Search Results:");
    results.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} - ${user.phone}`);
    });
  }
};

const systemOptions = async (option) => {
  switch (option) {
    case "1":
      console.log("👤 Adding a new user...");
      await addUser();
      break;
    case "2":
      console.log("📖 Viewing all users...");
      viewUsers();
      break;
    case "3":
      console.log("🔎 Searching for a user...");
      await searchUser();
      break;
    case "4":
      console.log("👋 Exiting the system...");
      rl.close();
      return;
    default:
      console.log("⚠️ Invalid option. Please try again.");
      break;
  }

  main(); 
};

const main = async () => {
  const option = await askQuestion(
    "\nChoose an option:\n1. Add User\n2. View Users\n3. Search User\n4. Exit\n> "
  );
  await systemOptions(option);
};

main();