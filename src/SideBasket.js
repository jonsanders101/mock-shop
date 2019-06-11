import React from 'react';

export default class SideBasket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            basketItems: []
        }
    }
    render() {
        return <section className="side-basket">Basket<ul>{this.props.basketItems.map(basketItem => <li>{basketItem.productName}</li>)}</ul></section>
    }

}