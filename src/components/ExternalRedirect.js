import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ExternalRedirect = ({ baseUrl }) => {
  const location = useLocation();

  useEffect(() => {
    // location.pathname gives /barcelona/faq
    // Strip /barcelona/ and preserve the rest
    const subPath = location.pathname.replace(/^\/barcelona\/?/, "");

    // location.hash gives the fragment like "#section"
    const hash = window.location.hash; // optional, in case they typed /barcelona/#something

    const finalUrl = `${baseUrl}${subPath}${hash}`;

    window.location.href = finalUrl;
  }, [location, baseUrl]);

  return <p>Redirecting...</p>;
};

export default ExternalRedirect;
