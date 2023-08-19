const routePaths = {
  SPLASHPAGE: "/",
  HOMEPAGE: "/home",
  ABOUT_US: "/about",
  GET_A_TICKET: "/event-listings",
  EVENT_LISTINGS: "/event-listings",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  FORGOT_PASSWORD: "/auth/reset-password",
  GOT_EMAIL: "/auth/got-email",
  PASSWORD_SUCCESSFUL: "/auth/password-successful",
  CREATE_EVENT: "/create-event",
  EVENT: "/event/:eventId",
  TICKET_INFO: "/ticket-info/:eventId",
  CHECKOUT: "/event/:eventId/checkout",
  TICKET_PRINTOUT: "/event/:eventId/ticket_printout"
};

export default routePaths;
