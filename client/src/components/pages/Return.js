import React from "react";

class Return extends Component {
  // function Available() {
    state = {
      fName: '',
      lName: '',
      email: '',
      custPhone: '',
      itemComment: '',
      custMemNum: 0,
      itemsRented: '',
      state: ''
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      })
    };

  Render() {
  return (
    <div className="container bg-light border">
      <div className="col-1-md"></div>
      <div className="col-10-md"></div>

      <h3 className= "mt-3 mb-5">Rent</h3>
      <form> 
        <div className="form-group mb-3">

          <div className="card">
            <div className="card-body">
              <h4 className="card-title mt-3 mb-3">Enter Customer's Rental</h4>






      </form>
      </div>
      <div className="col-1-md"></div>
    </div>
  );
}
}

export default Return;