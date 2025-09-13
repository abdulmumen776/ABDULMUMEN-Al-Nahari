import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import FavoritesPage from "./pages/FavoritesPage";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Calendar from "./pages/calendar";   // لاحظ الاسم small
import Register from "./pages/register";   // لاحظ الاسم small

import "./styles/pageTransitions.css";

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  EVENTS: "/events",
  GALLERY: "/gallery",
  FAVORITES: "/favorites",
  FEEDBACK: "/feedback",
  CONTACT: "/contact",
  CALENDAR: "/calendar",
  REGISTER: "/register",
};

// تعريف الراوتات
const routes = [
  { path: PATHS.HOME, element: <Home /> },
  { path: PATHS.ABOUT, element: <About /> },
  { path: `${PATHS.EVENTS}/*`, element: <Events /> },
  { path: PATHS.GALLERY, element: <Gallery /> },
  { path: PATHS.FAVORITES, element: <FavoritesPage /> },
  { path: PATHS.FEEDBACK, element: <Feedback /> },
  { path: PATHS.CONTACT, element: <Contact /> },
  { path: PATHS.CALENDAR, element: <Calendar /> },
  { path: PATHS.REGISTER, element: <Register /> },
];

export default routes;
