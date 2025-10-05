
// !----------------method 1----------------
// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);
// !------------------validate using zod------------------
import {z, ZodError} from "zod";

// !--------------------for example of age validaton-----------------
// const ageSchema = z.number().min(18).max(100).int();

 // const userAge = 19;
// const userAge = 17;

 // ? -----------------using safeParse()----------------
// const {data, error, success} = ageSchema.safeParse(userAge);
// console.log(data);
// console.log(error);
// console.log(success);
//  ?----------------------------------------------------

// ? ------------------using parse()------------------
// try {
// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);   
// } catch (error) {
     // ! instanceof is a javascript operator used to check if an object is an instance of a specific class or constructor
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
//     }else{
//         console.log("Unexpected error:", error);
//     }   
// }
// !-----------------------------------------------------------------------

const portSchema = z.coerce.number().min(1).max(65535).default(3000);


export const PORT = portSchema.parse(process.env.PORT);
