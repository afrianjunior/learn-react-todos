import React from 'react';
import { Route, Link } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>Selected topic {match.params.topicId}</div>
);

export default function ({ match }) {
  return (
    <div>
      Topic
      <div>
        <ul>
          <li><Link to={`${match.url}/js`}>JS</Link></li>
          <li><Link to={`${match.url}/css`}>CSS</Link></li>
        </ul>
      </div>
      <hr />
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => (
        <div>
          Please select topic.
        </div>  
      )} />
    </div>
  );
};