import express, {NextFunction, Request ,Response} from "express";
import { AddUser,listUser,GetUser } from "./service/UserService";
import { authenticate } from "./middleware/authMiddleware";
import { User } from "./model/userInterface";

const app = express();

app.use(express.json());


app.post('/User',authenticate,(req:Request,res:Response,)=>{
    const user:User= req.body;
    AddUser(user);
    res.status(200).json({message:'User Added successfully'})
});


app.get('/User/:id',authenticate,(req:Request,res:Response)=>{
    const id =parseInt(req.params.id);
    const user = GetUser(id);
    if(user){
        res.status(200).json({message:`Requested details for the ${user}`})
    }else{
        res.status(404).json({message:'User not found'})
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Server listening on port 3000');
    
})