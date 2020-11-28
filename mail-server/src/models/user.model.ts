import mongoose, {Document} from "mongoose";
// import bcrypt from "bcrypt";



export interface IUser {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string
}


export interface IUserModel extends IUser, Document {
  fullName(): string;
}


const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        maxlength:50
    },
  
    email: {
        type:String,
        trim:true,
        unique: 1 ,
        required:true,
    },
    password: {
        type: String,
        minglength: 3,
        require: true
    },
    lastName: {
        type:String,
        maxlength: 50
    },

    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
});

// userSchema.pre('save',function<IUserModel>(next){
//   const user:Document = this;
//       bcrypt.genSalt(10, function(err : Error, salt:String){
//             if(err) return next(err);
    
//             bcrypt.hash(user.password, salt, function(err, hash){
//                 if(err) return next(err);
//                 user.password = hash 
//                 next()
//             })
//         })
// })

// userSchema.methods.fullName = function(): string {
//   return this.firstName.trim() + " " + this.lastName.trim();
// };


const userModel = mongoose.model<IUserModel>('MailUser',userSchema);

export default  userModel