import React from 'react';
// import Diode from 'react-diode';
import Diode from '../react-diode/src/DiodePublic';

// Component
import ImageDisplay from '../components/ImageDisplay';

// Diode
import DiodeNetworkLayer from '../utils/DefaultDiodeNetworkLayer';
// import CRNetworkLayer from '../utils/FakeNetworkLayer';

Diode.injectNetworkLayer(new DiodeNetworkLayer(''));
// Diode.injectNetworkLayer(new CRNetworkLayer());

class Home extends React.Component {
  static async getInitialProps(ctx) {
    if (ctx.req) {
      // Diode setup
      const cache = await Diode.Store.forceFetch(ImageDisplay);

      return { 
        cache,
        isServer: true, 
      };

      return {};
    }
    
    return { cache: window.__NEXT_DATA__.props.pageProps.cache, isServer: false };
  }

  constructor(props) {
    super(props);

    const cache = props.cache;

    if (!props.isServer && !props.cache) {
      cache = window.__NEXT_DATA__.props.pageProps.cache
    }

    this.cache = Diode.createCache(cache);
    // this.cache = Diode.createCache({});
  }

  render () {
    return (
      <div>
        <Diode.CacheProvider value={this.cache}> 
          <ImageDisplay />
        </Diode.CacheProvider>
      </div>
    );
  }
}

export default Home;
