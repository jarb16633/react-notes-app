import { FaNoteSticky } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="flex items-center gap-2">
        <FaNoteSticky size={32} />
        <h2 className="text-3xl font-semibold text-black py-2">Notes</h2>
      </div>
      <SearchBar />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
