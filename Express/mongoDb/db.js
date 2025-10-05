import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017"); // add port

// connect
await client.connect();

console.log("Connected to MongoDB");

// ! Create
// select DB
const db = client.db("mongodb_nodejs_db");

// select collection
const userCollection = db.collection("users");

// insert document
// const result = await userCollection.insertOne({ name: "Yogesh", age: 23 });
// console.log("Inserted document ID:", result.insertedId);

// const result = await userCollection.insertMany([
//   { name: "Raju", age: 21 },
//   { name: "Shivam", age: 25 },
//   { name: "Tech", age: 31 },
// ]);

// console.log(`Inserted ${result.insertedCount} documents`);
// console.log("Inserted IDs:", result.insertedIds);

//!read

// const usersCursor = userCollection.find();
// console.log(usersCursor);

// for await(const user of usersCursor){
//     console.log(user);
// }

// const usersCursor = await userCollection.find().toArray();
// console.log(usersCursor);

// const user = await userCollection.findOne({name: "Shivam"});
// console.log(user);
// console.log(user._id); //new ObjectId('68e0282dc711dc6ed619a7f5')
// console.log(user._id.toHexString());//68e0282dc711dc6ed619a7f5

// ! UPDATE
// await userCollection.updateOne({name:"Tech"},{$set:{age: 28}})
// Increase age by 5 for everyone whose age < 30
// await userCollection.updateMany({ age: { $lt: 30 } }, { $inc: { age: 5 } });

// ! DELETE
// await userCollection.deleteOne({name: "Tech"});
// const userdeleted = await userCollection.deleteMany({name:"Tech"});
// console.log(`${userdeleted.deletedCount} documents deleted.`);
