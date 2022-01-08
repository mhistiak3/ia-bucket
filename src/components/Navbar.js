import Classes from "../pages/Home.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.action";
import { useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className={Classes.navbar}>
        <div>
          <h2>iA Bucket</h2>
          <img
            src={user ? user.photoURL : ""}
            alt=""
            title="Log Out"
            onClick={() => dispatch(logout())}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
