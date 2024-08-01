import { User } from "../model/userInterface";

const users:User[] =[];

const AddUser = (user:User):void=> {
    users.push(user);
};

const GetUser =(id:number):User | undefined =>{
    return users.find(user => user.id == id);
};

const listUser = ():User[] =>{
    return users;
};



export {AddUser,GetUser,listUser};