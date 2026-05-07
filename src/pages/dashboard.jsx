import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  const handleLogout = () => {

    navigate("/");

  };

  return (

    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center">

        <h1 className="text-5xl font-bold mb-4">
          Welcome
        </h1>

        <h2 className="text-3xl text-blue-300 mb-6">
          {name}
        </h2>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Dashboard;