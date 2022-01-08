import Allitems from "./Allitems";
import InputField from "./InputField";
import Classes from "./Layout.module.css";
import Slider from "./Slider";
const Layout = () => {
  return (
    <>
      <div className={Classes.layout}>
        <InputField />
        <Slider />
        <Allitems/>
      </div>
    </>
  );
};

export default Layout;
