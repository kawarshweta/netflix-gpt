import Header from "./Header";
import { useRef, useState } from "react";
import { checkValideData } from "../utils/validate";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValideData(
      email.current.value,
      password.current.value
    );
    // console.log(
    //   `Email: ${email.current.value}, Password: ${password.current.value}`
    // );
    setErrorMessage(message || "");
    if (message) return;
  };

  const toggleSignupForm = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 min-w-[320px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 bg-black bg-opacity-80 px-8 py-10 rounded-md"
      >
        <p className="font-bold text-3xl text-white mb-4">
          {isSignup ? "Sign In" : "Sign Up"}
        </p>

        <input
          type="text"
          placeholder="Name"
          className={`p-3 bg-[#333] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 ${
            isSignup ? "hidden" : "block"
          }`}
        />
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-3 bg-[#333] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 bg-[#333] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
        />
        <p className="text-md text-red-600">{errorMessage}</p>

        <button
          type="submit"
          onClick={handleButtonClick}
          className="bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition duration-200"
        >
          {isSignup ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between text-sm text-gray-400">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="accent-red-600" />
            Remember me
          </label>
          <a href="/" className="hover:underline">
            Need help?
          </a>
        </div>
        <p className="text-white">
          New to Netflix?{" "}
          <span className="cursor-pointer" onClick={toggleSignupForm}>
            {isSignup ? "Sign up now." : "Already a User Sign in Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
