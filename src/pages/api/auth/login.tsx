import type {NextApiRequest,NextApiResponse} from 'next';


export default function login(req:NextApiRequest,res:NextApiResponse){
    const {email,password} = req.body;
    // try {
    //     const user = findOne({email});
    //     if(user){
    //         if(user.password===password){
    //             res.send("authorise");
    //         }
    //         else {
    //             res.send("not authorised")
    //         }
    //     }
        
    // } catch (error) {
    //     res.send(err);
    // }
}