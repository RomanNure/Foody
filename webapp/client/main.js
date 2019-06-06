import React from 'react';
import { render } from 'react-dom';
import Root from '../imports/ui/router.js';
import RecipeAdd from '../imports/ui/component/Form_Recipe_Add-Edit'
Meteor.startup(() => {
  //render(<Root/>, document.getElementById('root'));
  render(<RecipeAdd/>, document.getElementById('root'));
});


