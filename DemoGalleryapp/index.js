/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import ImagePicker from './src/Component/ImagePicker';


AppRegistry.registerComponent(appName, () => ImagePicker);
