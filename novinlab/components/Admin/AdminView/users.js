const UsersView = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen ">
        <div className=" flex flex-col space-y-5 justify-center items-center shadow-xl shadow-slate-500 w-1/2 h-1/2 rounded-2xl">
          <h1 className="mb-12 text-3xl font-extrabold">کاربران سایت</h1>
          <table className="text-xl w-full border-separate">
            <thead dir="rtl">
              <tr className="">
                <th scope="col" className="py-3 px-6">
                  ویرایش
                </th>
                <th scope="col" className="py-3 px-6">
                  شماره تلفن همراه
                </th>
                <th scope="col" className="py-3 px-6">
                  ایمیل
                </th>
                <th scope="col" className="py-3 px-6">
                  نام کاربری
                </th>
                <th scope="col" className="py-3 px-6">
                  آیدی
                </th>
              </tr>
            </thead>
            <tbody dir="rtl">
              <tr className="bg-white border-b text-2xl">
                <td className="text-center p-2">
                  <button className="bg-blue-500 text-white p-3 rounded-md">
                    ویرایش
                  </button>
                </td>
                <td className="text-center p-2">09198923619</td>
                <td className="text-center p-2">triton.halley@gmail.com</td>
                <td className="text-center p-2">Ali Geshani</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap p-2"
                >
                  1
                </th>
              </tr>
              <tr className="bg-white text-2xl">
                <td className="text-center p-2">
                  <button className="bg-blue-500 text-white p-3 rounded-md">
                    ویرایش
                  </button>
                </td>
                <td className="text-center p-2">09107847164</td>
                <td className="text-center p-2">Aligeshani.dev@gmail.com</td>
                <td className="text-center p-2">Admin</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap p-2"
                >
                  2
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersView;
