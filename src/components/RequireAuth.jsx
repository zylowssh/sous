import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getSession } from '../lib/clientApi';

export default function RequireAuth() {
  const location = useLocation();

  if (!getSession()) {
    const next = encodeURIComponent(`${location.pathname}${location.search}`);
    return <Navigate to={`/login?next=${next}`} replace />;
  }

  return <Outlet />;
}
