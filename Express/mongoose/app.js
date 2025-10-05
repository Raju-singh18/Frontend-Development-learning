const mongoose = require("mongoose");

// ! Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/myDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB Connected");
  })
  .catch((err) => {
    console.log("Mongodb connection error:", err);
  });

// ! Define a Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: {
    type: Number,
    min: 18,
  },
});

//!Create a model
const User = mongoose.model("User",userSchema);

// !CRUD operations
// Create a user
async function createUser() {
    const user = new User({ name: 'Raju', email: 'raju@example.com', age: 25 });
    await user.save();
    console.log('User created:', user);
}

// Read users
async function getUsers() {
    const users = await User.find({ age: { $gte: 18 } });
    console.log('Users found:', users);
}

// Update a user
async function updateUser() {
    const user = await User.findOneAndUpdate(
        { name: 'Raju' },
        { age: 26 },
        { new: true } // return updated document
    );
    console.log('Updated user:', user);
}

// Delete a user
async function deleteUser() {
    await User.deleteOne({ name: 'Raju' });
    console.log('User deleted');
}

// Run all functions sequentially
async function main() {
    await createUser();
    await getUsers();
    await updateUser();
    await getUsers();
    await deleteUser();
    await getUsers();
}

main();
