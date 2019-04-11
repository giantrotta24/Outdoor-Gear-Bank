import React, { Component } from "react";
import Modal from '../Modal';
import API from '../../utils/API';

// const modalContent = (
//   <div>
//     <p>Hello world Lorem ipsum dolor sit amet, <a href="#1">first link</a> consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus <a href="#2">second link</a> vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
//   </div>
// );


class Main extends Component {
  state = {
    rentedInventory: [],
    maintInventory: [],
  }

  componentDidMount() {
    API.findAll().then(res => {
      let inventory = res.data;
      console.log(inventory);
      inventory.map(item => {
        if (item.status === 'Out for Rent') {
          this.setState({ rentedInventory: item });
          console.log(this.state.rentedInventory);
        } else if (item.status === 'In Maintenance') {
          this.setState({ maintInventory: item });
          console.log(this.state.maintInventory);
        }
      })
    });
  }


  modalContent = (
    <div>
      <p>Hello world Lorem ipsum dolor sit amet, <a href="#1">first link</a> consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus <a href="#2">second link</a> vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
    </div>
  );


  render() {
    return (
      <div>
        <Modal>{this.modalContent}</Modal>
      </div>
    );
  }
}

export default Main;