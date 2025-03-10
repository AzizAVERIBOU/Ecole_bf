import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "./routes";

function TitleUpdater() {
    const location = useLocation()
  
    useEffect(() => 
    {
      const currentRoute = routes.find(route => route.path === location.pathname)
      if(currentRoute)
      {
        document.title = currentRoute.title + ' | CPGE - MENAPLN';
      }
    }, [location])
  
    return null;
}

export default TitleUpdater;