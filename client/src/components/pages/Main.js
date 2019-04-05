import React, { Component } from "react";
import API from '../../utils/API';


class Main extends Component {
  state = {
    inventory: []
  }

  // loads saved books on initial page render
  componentDidMount() {
    API.findAll().then(res => {
      this.setState({
        inventory: res.data
      });

      console.log(this.setState.inventory)
    });
  }

  render() {
    return (
      <div className="container bg-light border">
        <div className="col-1-md"></div>
        <div className="col-10-md"></div>

        <h1>Main Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
          ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
          elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
            </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
          ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
          elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
            </p>
        <div className="col-1-md"></div>
      </div>
    );
  }

}

// const Main = () => {
//   return (
//     <div className="container bg-light border">
//       <div className="col-1-md"></div>
//       <div className="col-10-md"></div>

//       <h1>Main Page</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
//         varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
//         Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
//         imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
//         ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
//         elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
//         consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
//         malesuada fames ac ante ipsum primis in faucibus.
//             </p>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
//         varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
//         Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
//         imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
//         ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
//         elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
//         consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
//         malesuada fames ac ante ipsum primis in faucibus.
//             </p>
//       <div className="col-1-md"></div>
//     </div>
//   );
// }

export default Main;