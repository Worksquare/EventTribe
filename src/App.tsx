import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//layouts
import { PublicPageLayout, CredentialsPageLayout } from "./layouts";

//pages
import {
  SplashPage,
  HomePage,
  SignupPage,
  ForgotPasswordPage,
  LoginPage,
  AboutUsPage,
  CreateEvent
} from "./pages";

//routes
import { routePaths } from "./utils/";
import GotEmailpage from "./pages/GotEmailPage";
import PasswordSuccessPage from "./pages/PasswordSuccessPage";
import AuthorizedPageLayout from "./layouts/AuthorizedPageLayout";
import EventsListing from "./pages/EventsListingPage";
import Event from "./pages/EventPage";
import TicketInfoPage from "./pages/TicketInfoPage";
import CheckoutPage from "./pages/CheckoutPage";
import TicketPrintOutPage from "./pages/TicketPrintoutPage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={routePaths.SPLASHPAGE} element={<SplashPage />} />

          {/* public pages */}
          <Route element={<PublicPageLayout />}>
            <Route path={routePaths.HOMEPAGE} element={<HomePage />} />
            <Route path={routePaths.ABOUT_US} element={<AboutUsPage />} />
          </Route>

          {/* Credential pages i.e signup, login, forgot password, Got email,password success */}
          <Route element={<CredentialsPageLayout />}>
            <Route path={routePaths.SIGNUP} element={<SignupPage />} />
            <Route path={routePaths.LOGIN} element={<LoginPage />} />
            <Route path={routePaths.GOT_EMAIL} element={<GotEmailpage />} />
            <Route path={routePaths.PASSWORD_SUCCESSFUL} element={<PasswordSuccessPage />} />
            <Route
              path={routePaths.FORGOT_PASSWORD}
              element={<ForgotPasswordPage />}
            />
          </Route>

          {/* Authorized pages*/}
          <Route element={<AuthorizedPageLayout />}>
            <Route path={routePaths.CREATE_EVENT} element={<CreateEvent />} />
            <Route path={routePaths.EVENT_LISTINGS} element={<EventsListing />} />
            <Route path={routePaths.EVENT} element={<Event />} />
            <Route path={routePaths.TICKET_INFO} element={<TicketInfoPage/>} />
            <Route path={routePaths.CHECKOUT} element={<CheckoutPage />} />
            <Route path={routePaths.TICKET_PRINTOUT} element={<TicketPrintOutPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
