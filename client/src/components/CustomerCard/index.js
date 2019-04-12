import React, { Component, Fragment } from 'react';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';

class CustomerCard extends Component {

    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <ReturnResults>
                    <ReturnResultsItem>
                        {children}
                    </ReturnResultsItem>
                </ReturnResults>
            </Fragment>
        );
    }
}

export default CustomerCard;