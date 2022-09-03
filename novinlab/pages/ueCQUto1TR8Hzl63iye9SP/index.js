/** Login page */

import LoginForm from "../../components/Login/Login";
import { getSession } from "next-auth/react";
const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // console.log("sss : ", session);
  if (session) {
    return {
      redirect: {
        destination: "/7&DBZf2R238UN6WHCn3",
      },
    };
  }
  return {
    props: { session },
  };
}
