import type {NextApiRequest,NextApiResponse} from 'next';
import {connectDB} from '@/db/dbConfig';
import * as cookie from 'cookie';
 
await connectDB();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {method} = req;
    console.log(method);

    if(method==="GET"){
        try {
            res.setHeader('Set-Cookie',cookie.serialize('token',"",{
                httpOnly: true,
                maxAge: 0,
            })) 

            return res.json({
                "message":"Logout Successfully",
                "success":true,
            });
        } catch (error:any) {
            console.log(error);
            return res.json({Error:error.message});
        }
    }

    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
}