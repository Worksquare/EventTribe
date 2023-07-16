import styles from "./PublicPageLayout.module.scss";
import { Navbar, Footer } from "../../Components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeNavbar } from "../../redux/features/mobileNav/mobileNavSlice";

const PublicPageLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNavbar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    dispatch(closeNavbar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={styles.PublicPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar />
            </div>
          </div>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PublicPageLayout;
