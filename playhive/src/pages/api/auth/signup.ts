import type {NextApiRequest,NextApiResponse} from 'next';
import {connectDB} from '@/db/dbConfig';
import {User} from '@/models/userModal'
import bcryptjs from 'bcryptjs';
import * as cookie from 'cookie';
import jwt from 'jsonwebtoken';
 
await connectDB();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {method} = req;
    console.log(method);

    if(method==="POST"){
        try {
            const {name,email,password} = req.body;
            //validation
            console.log(req.body);
            
            const user = await User.findOne({email});
            if(user) {
                return res.json({error:"User already exists"});
            }

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password,salt);

            const newUser = new User({
                name,
                email,
                password:hashedPassword
            })

            const savedUser = await newUser.save();
            const tokenData = {
                id:savedUser._id ,
                name:savedUser.name,
                email:savedUser.email,
            };

            const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'});
            
            res.setHeader('Set-Cookie',cookie.serialize('token',token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', 
                maxAge: 3600,
                path:'/'
            }))

            return res.json({message:"User Registered Successfully...",success:true,savedUser,token})
 
        } catch (error:any) {
            console.log(error);
            return res.json({Error:error.message});
        }  
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
}