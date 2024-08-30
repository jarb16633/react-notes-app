import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
  };

  return (
    <div>
      <>
        <Navbar />

        <div className="flex justify-center items-center mt-28">
          <div className="bg-white px-7 py-10 rounded-lg shadow-sm w-96 border">
            <form onSubmit={handleLogin}>
              <h4 className="text-2xl mb-7">Login</h4>
              <input
                type="text"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

              <button type="submit" className="btn-primary">
                Login
              </button>
              <p className="text-sm text-center mt-4">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
