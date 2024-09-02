import { getInitials } from "../../utils/helper";
import { PropTypes } from "prop-types";

const ProfileInfo = ({ onLogout }) => {
  ProfileInfo.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Sahatsawat Rimphongern")}
      </div>
      <div>
        <p className="text-sm font-medium">Sahatsawat</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
