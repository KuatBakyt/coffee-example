import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';
import { useAppSelector } from '../shared/hooks/useAppSelector';

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
