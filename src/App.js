import React from 'react';
import { App, View } from 'framework7-react';
import { MainPage } from 'pages';

export default () => (
  <App theme="ios" name="Money Costs" id="com.demoapp.test">
    <View main>
      <MainPage/>
    </View>
  </App>
)
