import { useState, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const LoginForm = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [hasError, setHasError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  async function submitHandler(e) {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    if (!userName.trim().length > 0 && !password.trim().length > 0) {
      //Show Error
      setHasError(true);
      return;
    }

    //Request for Authentication
    if (status !== "authenticated") {
      const result = await signIn("credentials", {
        redirect: false,
        username: userName,
        password: password,
      });
      console.log(result?.error);
      if (!result?.error) {
        router.replace("/7&DBZf2R238UN6WHCn3");
      }
    }
  }

  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-indigo-400"
        style={{ direction: "rtl" }}
      >
        <form
          onSubmit={submitHandler}
          className=" flex justify-center flex-col space-y-8 w-[500px] border-2 text-xl border-white rounded-lg p-6"
        >
          <div className="w-full flex items-center ">
            <label className="w-[100px] cursor-pointer" htmlFor="username">
              نام کاربری
            </label>
            <input
              className=" w-full rounded-md h-16 text-2xl font-semibold outline-[#13382B]"
              type="text"
              name="username"
              id="username"
              ref={userNameRef}
            />
          </div>
          <div className="w-full flex items-center ">
            <label className="w-[100px] cursor-pointer" htmlFor="password">
              رمزعبور
            </label>
            <input
              className=" w-full rounded-md h-16 text-2xl font-semibold  outline-[#13382B]"
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
            />
          </div>
          <span className="text-lg font-semibold text-red-900">
            {hasError && "رمز عبور یا نام کاربری خود را وارد کنید"}
          </span>
          <div className="w-full flex justify-center">
            <button className="bg-green-400 py-3 px-16 rounded-md cursor-pointer text-lg font-bold">
              ورود
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
