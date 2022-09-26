import { Component } from 'react';

import './card-list.styles.css';

class CardList extends Component {

  render() {
    console.log(this.props.monsters);
    console.log('render from Cardlist');
    const { monsters } = this.props;

    return ( 
     
    )
  }
}

export default CardList;