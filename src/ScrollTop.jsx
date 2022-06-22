import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
  Scrolls to the top of page whenever the user navigates between pages.
  It is included because some pages retain their scroll depth on nav
  which causes the new page to scroll all the way down.
*/
export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}