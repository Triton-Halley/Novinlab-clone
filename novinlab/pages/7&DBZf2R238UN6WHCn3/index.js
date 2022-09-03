/*** Admin Panel Route */
import { getSession } from "next-auth/react";
import Head from "next/head";
const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>
      <div>Admin panel</div>
    </>
  );
};

export default AdminPanel;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      notFound: true,
      redirect: {
        // login page path
        destination: "/ueCQUto1TR8Hzl63iye9SP",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
