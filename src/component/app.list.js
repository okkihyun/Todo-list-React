/**
 * Created by Kihyun Kim on 05/06/2017
 * As part of Development
 *
 * Written by Kihyun Kim <okkihyun1@gmail.com>, 05/06/2017
 *
 * Updater 수정자 - Kihyun Kim 05/06/2017
 */

import  React from  'react';

export default class TodoAppList extends React.Component {
  constructor() {
    super();
  }

  render() {
    var items = this.props.tasks.map((elem, i) => {
      return <li key={i}>{elem}</li>
    });
    return (
      <ul>
        {items}
      </ul>
    );
  }
}