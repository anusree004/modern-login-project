import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {

    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful");

    navigate("/");

  };

  return (

    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">

      <form
        onSubmit={handleSignup}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px]"
      >

        <h1 className="text-4xl text-white font-bold mb-6 text-center">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded bg-white/20 text-white outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-white/20 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-white/20 text-white outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded"
        >
          Signup
        </button>

        <p className="text-white mt-4 text-center">

          Already have account?

          <Link
            to="/"
            className="text-blue-300 ml-1"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Signup;