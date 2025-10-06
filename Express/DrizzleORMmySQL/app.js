import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const main = async () => {
  //! insert single user
  // const insertUser = await db.insert(usersTable).values(
  //     {name:"raju", age:"21", email:"raju@example.com"}
  // );
  // console.log(insertUser);

  //? many users
  //    const insertUsers = await db.insert(usersTable).values([
  //       {name:"reema", age:"24", email:"reema@example.com"},
  //       {name:"rohit", age:"15", email:"rohit@example.com"},
  //       {name:"yogesh", age:"23", email:"yogesh@example.com"},
  //       {name:"shivam", age:"25", email:"shivam@example.com"}
  //   ]);
  //   console.log(insertUsers);

  // ! read
  // const users = await db.select().from(usersTable);
  // const users = await db.select().from(usersTable).where({
  //     email:"raju@example.com",
  // })
  // console.log(users);

  //! Update Query
  //   const updatedUser = await db
  //     .update(usersTable)
  //     .set({ name: "raju singh" })
  //     .where({ email: "raju@example.com" });
  //   console.log(updatedUser);

  //   const updatedUser = await db
  //     .update(usersTable)
  //     .set({ name: "rohit singh" })
  //     .where(eq(usersTable.email, "rohit@example.com"));
  //   console.log(updatedUser);

  // ! delete
  //    await db.delete(usersTable).where({ email: "reema@example.com" });
//   await db.delete(usersTable).where(eq(usersTable.email, "yogesh@example.com"));
};

main().catch((err) => {
  console.log(err);
});
