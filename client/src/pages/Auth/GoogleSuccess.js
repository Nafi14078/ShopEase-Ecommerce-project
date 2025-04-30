
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const name = params.get('name');
    const email = params.get('email');

    if (token) {
      const userData = {
        token,
        user: { name, email },
      };
      localStorage.setItem('auth', JSON.stringify(userData));
      navigate('/dashboard/user');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <p>Logging in with Google...</p>;
};

export default GoogleSuccess;
