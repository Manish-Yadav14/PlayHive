import type {NextApiRequest,NextApiResponse} from 'next';
import {connectDB} from '@/db/dbConfig';
import {User} from '@/models/userModal'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import * as cookie from 'cookie';
 
await connectDB();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {method} = req;
    console.log(method);

    if(method==="POST"){
        try {
            const {email,password} = req.body;
            //validation
            console.log(req.body);
            
            const user = await User.findOne({email});
            if(!user) {
                return res.status(404).json({"message":"User doesn't exist...",success:"false",user})
            }

            const isMatch = await bcryptjs.compare(password,user.password);
            if(!isMatch){
                return res.status(404).json({"message":"Check your credentials..."})
            }

            const tokenData = {
                id:user._id ,
                name:user.name,
                email:user.email,
            };

            const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'});
            res.setHeader('Set-Cookie',cookie.serialize('token',token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', 
                maxAge: 3600,
                path:'/'
            }))

            return res.json({"message":"Logged In Success",success:true,token});
        } catch (error:any) {
            console.log(error);    
            return res.json({"Error":error.message});
        }   
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
}
