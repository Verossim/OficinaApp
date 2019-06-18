import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Description from './pages/description';

export default createStackNavigator({
    Main,
    Description
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#18A360'
        },
        headerTintColor: '#FFF',
        mode: 'modal'
    },
});
