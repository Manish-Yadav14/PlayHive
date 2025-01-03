import type { NextApiRequest } from "next";
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

interface TokenPayload {
    id: string;
    name: string;
    email: string;
}
export async function getDataFromToken(req:NextApiRequest) {
    try {
       const cookies = cookie.parse(req.headers.cookie || "");
       const token = cookies.token;

       const decodedToken:any = jwt.verify(token!,process.env.TOKEN_SECRET!);

       return decodedToken?.id;
    } catch (error:any) {
       throw new Error(error.message) 
    }
}