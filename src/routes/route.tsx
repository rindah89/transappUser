import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AppRouteProps {
  component: React.ComponentType;
  layout: React.ComponentType<{ children: React.ReactNode }>;
  path: string;
  isAuthProtected?: boolean;
  exact?: boolean;
}

const AppRoute: React.FC<AppRouteProps> = ({
  component: Component,
  layout: Layout,
  isAuthProtected = false,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (isAuthProtected && typeof window !== 'undefined') {
      const authClient = localStorage.getItem('authClient');
      if (!authClient) {
        router.push('/login');
      }
    }
  }, [isAuthProtected, router]);

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default AppRoute;
