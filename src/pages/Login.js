import Classes from "./Login.module.css";
import LOGO from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className={Classes.login}>
      <img src={LOGO} alt="" />
      <h1>
        Welcome to iA Bucket, Organized Your <br /> Shopping using iA Bucket
      </h1>
      <button onClick={() => dispatch(login())}>Login With Google</button>
    </div>
  );
};

export default Login;
