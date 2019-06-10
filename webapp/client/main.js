import React from 'react';
import { render } from 'react-dom';
import Root from '../imports/ui/router.js';
import RecipeAdd from '../imports/ui/component/Form_Recipe_Add-Edit';
import RecipeSmall from '../imports/ui/component/Recipe-small';
Meteor.startup(() => {
  render(<Root/>, document.getElementById('root'));
  //render(<RecipeSmall/>, document.getElementById('root'));
  //render(<RecipeAdd/>, document.getElementById('root'));
});


