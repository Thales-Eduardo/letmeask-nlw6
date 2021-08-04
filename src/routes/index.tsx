import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';

export const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />
    <Route path="/rooms/:id" component={Room} />

    <Route path="/admin/rooms/:id" component={AdminRoom} />
  </Switch>
);
