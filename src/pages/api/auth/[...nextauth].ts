import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
    providers:[
        GithubProvider({
            clientId:"Ov23lijGyTVBzvI6nESG",
            clientSecret:"2ec99ef09edeeccfca9812671c5cbfa1e5fe3eb7",
        }),
    ]
}

export default NextAuth(authOptions);