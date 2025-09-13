import { useRoutes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes";

export default function App() {
  const element = useRoutes(routes);
  const location = useLocation();

  const getAnimation = (pathname) => {
    switch (pathname) {
      case "/about":
        return "page-right";
      case "/contact":
        return "page-left";
      case "/gallery":
        return "page-zoom";
      case "/register":
        return "page-rotate";
      case "/favorites":
        return "page-flip";
      default:
        return "page";
    }
  };

  return (
    <>
      <div style={{ position: "relative", zIndex: 99999 }}>
        <Navbar />
      </div>

      <div className="d-flex flex-column min-vh-100">
        <main
          className="flex-fill"
          style={{
            paddingTop: "72px",
            paddingBottom: "60px",
          }}
        >
          <div
            className="container hide-scrollbar"
            style={{
              overflowY: "auto",
              height: "100%",
              padding: "0 15px",
              paddingBottom: "20px",
            }}
          >
            <TransitionGroup component={null}>
              <CSSTransition
                key={location.pathname}
                timeout={800}
                classNames={getAnimation(location.pathname)}
                unmountOnExit
              >
                {element}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
