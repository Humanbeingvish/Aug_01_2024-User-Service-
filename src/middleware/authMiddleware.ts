import {Request , Response ,NextFunction} from 'express';

const vaildApiKey = '123456';


export const authenticate =(req:Request,res:Response,next:NextFunction)=>{
    const apikey =req.headers['api-key'];

    if(apikey && apikey === vaildApiKey){
        next();
    }else{
        res.status(404).json({message:'Unauthorised'});
    }
}
