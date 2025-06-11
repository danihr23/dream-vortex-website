import { useEffect } from 'react';

const REDIRECT_URL = 'https://barcelona.dreamvortex.com/';

const ExternalRedirect = () => {
  useEffect(() => {
    const fullUrl = window.location.href;
    const redirectUrl = fullUrl
      .split('/barcelona')
      .map((value, index) => (index === 0 ? REDIRECT_URL : value))
      .join('');

    window.location.href = redirectUrl;
  }, []);

  return null;
};

export default ExternalRedirect;
