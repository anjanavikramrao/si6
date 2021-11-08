import { Fragment } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "../../styles/Home.module.scss";

const Layout = (props) => {
    return (
        <Fragment>
          <div className={`app-container app-theme-white fixed-header fixed-sidebar fixed-footer body-tabs-shadow-btn ${props.getProp("collapse") ? "closed-sidebar" : ""}`}>
            <Fragment >
                <Header {...props} />
                <div className="app-main" >
                    <SideBar /> 
                    <div className="app-main__outer" >
                        <div className="app-main__inner" >
                            {props.children}
                        </div>
                    </div> 
                </div>
            </Fragment>
          </div>
        </Fragment>
      );
}

export default Layout;