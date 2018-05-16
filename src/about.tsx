import { map } from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    About page
    <ul>
      {map([1, 2, 3, 4], (item: number, index: number) => <li>{item}</li>)}
    </ul>
  </div>,
  document.getElementById('about')
);
