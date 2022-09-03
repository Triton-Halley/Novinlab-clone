/*** Admin Panel Route */
import { getSession } from "next-auth/react";
import Head from "next/head";
import Panel from "../../components/Admin/Panel";
const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>
      <div className="overflow-hidden">
        <Panel />
      </div>
    </>
  );
};

export default AdminPanel;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  console.log("ththhththt", session);
  if (!session) {
    return {
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
