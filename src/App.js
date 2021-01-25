import React from 'react';
import { App as F7App, View } from 'framework7-react';
import { StoreProvider } from 'contexts/store-context';
import config from 'app-config';
import './styles.css';

const App = () => (
  <StoreProvider>
    <F7App {...config}>
      <View main>
      </View>
    </F7App>
  </StoreProvider>
);

export default App;
