"use client"
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();

  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return <>{children}</>; 
};

export default PrivateRoute;


