import { database } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const option: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      // @ts-ignore
      async authorize(credentials:any, req) {
        // Add logic here to look up the user from the credentials supplied
      
        if(credentials.role.toLowerCase() !== "admin"){
          let user;
          const userColl = collection(database, "akun")
          const queryUser = query(userColl, where("email", "==", credentials.email), where("password", "==", credentials.password))
          const raw = await getDocs(queryUser)
  
  
          raw.forEach(d=>{
            console.log(d.data())
            user = d.data()
          })

          if (user && credentials) {
            // Any object returned will be saved in `user` property of the JWT
            return {user, role: "pegawai"};
          } 
        }else{
          if(credentials.email === "admin@pelindo.com" && credentials.password === "admin123"){
            return {username: "Admin", role:"admin"}
          }
        }

        return null;

      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {

    async jwt({ user, session, token }) {
      return {...token,...user};
    },

    async session({ session, token }) {
     session.user = {...token};
      return session;
    },
  },
};
