import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if(email === storedEmail && password === storedPassword){

      navigate("/dashboard");

    }else{

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">

      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px]"
      >

        <h1 className="text-4xl text-white font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-white/20 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded bg-white/20 text-white outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-white text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded mt-6"
        >
          Login
        </button>

        <p className="text-white mt-4 text-center">

          Don't have account?

          <Link
            to="/signup"
            className="text-blue-300 ml-1"
          >
            Signup
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Login;