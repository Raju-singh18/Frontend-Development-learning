import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
  // Create a single user (insert data)
  const user = await prisma.user.create({
    data: {
      name: "raju",
      email: "raju@example.com",
    },
  });
  console.log(user);

  // ! Multiple user
  const newUsers = await prisma.user.createMany({
    data:[
      {name:"Yogesh", email:"yogesh@example.com"},
      {name:"Shivam", email:"shivam@example.com"},
    ],

  });
  console.log(newUsers);

  // !get All users
  // const users = await prisma.user.findMany();
  // console.log(users);

  // ! get a single user by id
  // const user = await prisma.user.findUnique({
  //   where:{id:2},
  // })
  // console.log(user);

  // ! get user with filtering
  // const user = await prisma.user.findMany({
  //   where:{name:"raju"},
  // });
  // console.log(user);

  // ! UPDATE a single user
  // const updatedUser = await prisma.user.update({
  //   where:{id:1},
  //   data:{name:"Raju"},
  // })
  // console.log(updatedUser);

  // ! update many user
  // const updatedUsers = await prisma.user.updateMany({
  //   where:{name:"Raju"},
  //   data:{name:"Raju Singh"},
  // })
  // console.log(updatedUsers);

  // ! DELETE one user
  // const deletedUser = await prisma.user.delete({
  //   where:{id:3},
  // });
  // console.log(deletedUser);

  // ! delete multiple user
  // const deletedUsers = await prisma.user.deleteMany({
  //   where:{
  //     id:{in:[1,2]}
  //   },
  // });
  // console.log(deletedUsers);
};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
