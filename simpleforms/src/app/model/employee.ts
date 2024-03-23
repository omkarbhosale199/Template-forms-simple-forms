// export class Employee{
//   username:string;
//   email:string;
//   course:string;
//   gender:string;

// }
// they throw error

// Do this or

// export class Employee{
//   username:string | undefined;
//   email:string | undefined;
//   course:string | undefined;
//   gender:string | undefined;

// }

// use in ---->>>simple form 10
export class Employee{
  username!:string;
  email!:string;
  course!:string;
  gender!:string;

}
