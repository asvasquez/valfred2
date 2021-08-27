import React, { Component } from 'react';
import { ItemComponent } from "../../components/Item";

export const ItemDetailContainer = () =>{
   class ItemDetailContainer extends Component {
        constructor(props) {
        super(props);
  }
  render() {
    return (
        
      <div className="container main-content">
        <ItemComponent />
        <ItemComponent />
      </div>
    );
  }
}
console.log(ItemDetailContainer);
}