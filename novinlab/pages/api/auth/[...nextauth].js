import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import databaseConnection, { userData } from "../../../util/database";
import mysql2 from "mysql2/promise";

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
        const users = await userData();
        // const [data] = await databaseConnection.execute("SELECT * FROM users");
        // databaseConnection.end();
        console.log(users);

        const { username: InpUsername, password: InpPassword } = credentials;
        const user = users.find(
          (item) => item.username == InpUsername && item.password == InpPassword
        );
        // check error and handle wrong password or user not found
        // throw error in if check
        if (!user) {
          return null;
        }

        // this will mix with jwt
        return {
          identifier: user.id,
          user: user.username,
          mail: user.email,
          number: user.phone,
        };
      },
    }),
  ],
});
