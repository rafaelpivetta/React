import { AppRegistry } from 'react-native';
//import App from './src/App';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';

import { Routes } from './src/routes/Routes';
import { initializeFirebaseApi } from './src/services/FirebaseApi';

AppRegistry.registerComponent('ToDoManager_TurmaA_2017', () => {
    initializeFirebaseApi();
    return Routes;
} );
