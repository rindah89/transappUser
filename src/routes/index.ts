import UserForgot from "../pages/Users/UserForgot";
import UserReset from "../pages/Users/ResetPassword";
import Trips from "../pages/Users/Trips";
import DeleteAccount from "../pages/Users/DeleteAccount";
import Home from "../pages/Users";
import BookTicket from "../pages/Users/book";
import Privacy from "../pages/Users/Privacy";
import SearchResults from "../pages/Users/SearchResults";
import About from "../pages/Users/About";
import Login from "../pages/Users/Login";
import Register from "../pages/Users/Register";
import TripLogin from "../pages/Users/TripLogin";
import PayUnit from "../pages/Users/PayUnit";
import Terms from "../pages/Users/Terms";
import InAppPayment from "../pages/Users/InAppPayment";

interface Route {
  path: string;
  component: React.ComponentType;
  name?: string;
}

export const publicRoutes: Route[] = [
  { path: "/user-forgot", component: UserForgot },
  { path: "/pay", component: PayUnit },
];

export const authRoutes: Route[] = [
  { path: "/user-bookings", component: Trips },
];

export const userPublicRoutes: Route[] = [
  { path: "/trip-login", component: TripLogin },
  { path: "/register", component: Register },
  { path: "/user-forgot", component: UserForgot },
  { path: "/user-reset", component: UserReset },
  { path: "/transapp-delete-my-account", component: DeleteAccount },
  { path: "/login", component: Login },
  { path: "/trip-search", component: SearchResults },
  { path: "/search-results", component: SearchResults },
  { path: "/about-transapp", component: About },
  { path: "/privacy-policy", component: Privacy },
  { path: "/book", component: BookTicket },
  { path: "/terms", component: Terms },
  { path: "/", name: "Home", component: Home },
  { path: "/payunit-return", component: InAppPayment },
];
