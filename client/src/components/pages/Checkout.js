import React, { Component } from "react";
import API from '../../utils/API';

class Checkout extends Component {
    state = {
        checkoutCart: [],
    }

    componentDidMount () {
        API.process().then(res => {
            this.setState({ checkoutCart: res.data });
            console.log(this.state.checkoutCart);
        })
    }

    render() {
        return (

            <div>
                <p>Hello World</p>
            </div>

        );
    }
}

export default Checkout;