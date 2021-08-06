import React from 'react';
import { Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';
import { AdminHome } from '../pages/AdminHome';

import { Route } from './route';

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} isPrivate />
      <Route path="/admin/home" component={AdminHome} isPrivate />
      <Route path="/rooms/:id" component={Room} />

      <Route path="/admin/rooms/:id" component={AdminRoom} isPrivate />
    </Switch>
  );
};
