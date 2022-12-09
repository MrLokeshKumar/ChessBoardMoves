/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Chess from './src/Chess'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Chess);
