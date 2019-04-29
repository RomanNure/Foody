import React from 'react';
import { render } from 'react-dom';
import Root from '../imports/ui/router.js';
Meteor.startup(() => {
  render(<Root/>, document.getElementById('root'));
});


