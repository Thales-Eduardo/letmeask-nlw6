import React from 'react';
import { Route as ReactDomRoute, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouteData extends RouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

export const Route: React.FC<RouteData> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/rooms/new',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
