import React from 'react';
import { App as F7App, View } from 'framework7-react';
import config from 'app-config';
import './styles.css';

const App = () => (
  <F7App {...config}>
    <View main>
    </View>
  </F7App>
);

export default App;
