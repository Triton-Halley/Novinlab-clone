import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import Provider;

export default NextAuth({
  session: {
    jwt: true,
    // maxAge: 30 * 24 * 60 * 60,
    // updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        //Connect to database and check data

        // check error and handle wrong password or user not found
        // throw error in if check

        // this will mix with jwt
        console.log("credentials : ", credentials);
        const user = {
          name: credentials.username,
        };
        return user;
      },
    }),
  ],
});
