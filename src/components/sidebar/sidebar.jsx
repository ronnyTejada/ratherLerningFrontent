import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { GrClose } from "react-icons/gr";
import { useLocation } from "react-router-dom";

import "./style.css";
import MyContext from "../../context/Context";

const SideBar = ({ visible, setVisible }) => {
  const location = useLocation();
  const {logout}=useContext(MyContext)
  const springWidth = useSpring({
    from: { left: "-100%" },
    left: visible ? "0" : "-100%",
    // config: config.molasses,
    // delay: 200,
  });
 

  return (
    <animated.div className="sidebar" style={springWidth}>
      <h1 onClick={() => setVisible((prev) => !prev)}>
        <GrClose />
      </h1>
      {location.pathname !== "/add-course" && (
        <h2 className="sidebar__icon">
          <Link className="sidebar__link" to={"/add-course"}>
            Add Course
          </Link>
        </h2>
      )}
      {location.pathname !== "/dashboard" && (
        <h2 className="sidebar__icon">
          <Link className="sidebar__link" to={"/dashboard"}>
            Dashboard
          </Link>
        </h2>
      )}
      <h2 className="sidebar__icon">
        <Link className="sidebar__link" to={""} onClick={logout}>
          Log Out
        </Link>
      </h2>

      {/* {RoutesNav.map(item=>{
                return(
                    <h2 className='sidebar__icon'><Link className='sidebar__link' to={item.path}>{ item.icon}</Link></h2>
                )
            })

            } */}
    </animated.div>
  );
};

export default SideBar;
