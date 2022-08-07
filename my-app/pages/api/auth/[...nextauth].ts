import NextAuth from 'next-auth';
import CognitoProvider from "next-auth/providers/cognito"
import { stringify } from 'querystring';

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID || '' ,
      clientSecret: process.env.COGNITO_CLIENT_SECRET || '',
      issuer: process.env.COGNITO_ISSUER 
    })
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.id_token = token.id_token
      return session;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      //jwtがsignIn時に複数回呼ばれるが初回しか情報入っていないので、ifでバカ除け
      if (account){
        token.id_token = account.id_token;
      } 
      
      return token;
    },
  },
})