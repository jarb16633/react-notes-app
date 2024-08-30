import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <>
        <Navbar />

        <div className="flex justify-center items-center mt-28">
          <div className="bg-white px-7 py-10 rounded-lg shadow-sm w-96 border">
            <form onSubmit={() => {}}>
              <h4 className="text-2xl mb-7">Login</h4>

              <input type="text" placeholder="Email" className="input-box" />
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
