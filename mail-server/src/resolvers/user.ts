// import { MyContext } from "../types";
import { Arg, Field, InputType, Mutation, ObjectType, Resolver } from "type-graphql";
import UserModel from "../models/user.model";

@InputType()
class UserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName:  string;

  @Field()
  lastName: string;
}


// @ObjectType()
// class FieldError {
//   @Field()
//   field: string;

//   @Field()
//   message: String;
// }

@ObjectType()
class UserResponse {

//       @Field(type => ID)
//   id: string;


   @Field()
  firstName: string;

     @Field()
  lastName: string;

     @Field()
  email: string;

}



@Resolver()
export class UserResolver{

    @Mutation(()=>UserResponse)
    async registerUser(
        @Arg('registerInput') option: UserInput,
       // @Ctx() {req} : MyContext
    )
    {

        console.log(option);
       // const {firstName,lastName,email,password} = option
        try{
            const user = new UserModel(option);
        const data  = await user.save();
        console.log(data);
        return data;
        }
        catch(e){
            console.log(3)
            return e;
        }

    }

}