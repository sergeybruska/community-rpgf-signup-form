import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type SessionContext = {
  isLoading: boolean;
  isAuthenticated: boolean;
};

const SessionContext = createContext<SessionContext>({
  isLoading: true,
  isAuthenticated: false,
});

export const SessionProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const token =
    typeof window !== 'undefined' && localStorage.getItem('authToken');

  useEffect(() => {
    const isAuthToken = !!token;
    setIsAuthenticated(isAuthToken);
    setIsLoading(false);
  }, [token]);

  const sessionContextValue: SessionContext = useMemo(() => {
    return {
      isLoading,
      isAuthenticated,
    };
  }, [isLoading, isAuthenticated]);

  return (
    <SessionContext.Provider value={sessionContextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
