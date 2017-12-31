import React from 'react';
import { Route , Router, IndexRoute } from 'react-router';
import Main from '../containers/main';
import Test from '../components/test';
import Gallery from '../components/gallery';
import Create from '../containers/create';
import Email from '../containers/email';
import notFound from '../components/notFound';


export default () => (
  <Router>
    <Route path="/" >
      <IndexRoute component={Main} />
      <Route path="gallery" component={Gallery} />
      <Route path="create" component={Create} />
      <Route path="mail" component={Email} />
      <Route path="test" component={()=>(<div><Main/><Test /></div>)} />
    </Route>
    <Route path="*" component={notFound} />
  </Router>
)
