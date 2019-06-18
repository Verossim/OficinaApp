import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';
import './config/statusBarConfig';

YellowBox.ignoreWarnings([
    'Failed child'
]);

const App = () => <Routes />;

export default App;
