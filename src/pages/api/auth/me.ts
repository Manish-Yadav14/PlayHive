import type {NextApiRequest,NextApiResponse} from 'next';
import {connectDB} from '@/db/dbConfig';
import * as cookie from 'cookie';
import { getDataFromToken } from '@/utils/getDataFromToken';
import { User } from '@/models/userModal';
 
await connectDB();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {method} = req;
    console.log(method);

    if(method==="GET"){
        const userId = await getDataFromToken(req);
        const user = await User.findOne({_id:userId}).select("-password");

        if(!user){
            return res.json({"message":"No User Found , Invalid Token"});
        }

        return res.json({"message":"User found",data:user})
    }

    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
}