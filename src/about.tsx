import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { map } from 'lodash';

ReactDOM.render(
  <div>
    About page
    <ul>
      {map([1, 2, 3, 4], (item: number, index: number) => <li>{item}</li>)}
    </ul>
  </div>,
  document.getElementById('about')
);
