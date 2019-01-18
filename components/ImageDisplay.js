import React, { Component } from 'react';
import Diode from 'react-diode';
// import Diode from '../react-diode/src/DiodePublic';
import ImageDisplayQuery from '../queries/ImageDisplayQuery';
// import ContentResourceQuery from '../queries/ContentResourceQuery';

class ImageDisplay extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        { this.props.contentResource ? 'Yes' : 'No' }
      </div>
    );
  }
}

export default Diode.createRootContainer(ImageDisplay, {
  children: [],
  queries: {
    fetchImage: Diode.createQuery(ImageDisplayQuery, {
      image: 'fragment',
    }),
    // contentResource: Diode.createQuery(ContentResourceQuery, {
    //   hello: {
    //     world: null,
    //   },
    // }),
  },
}); 
