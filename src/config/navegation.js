import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from '../screens/todo_app'
import Camera from '../screens/camera'
import Fb from '../screens/fb_login'
import Home from '../screens/Home'
import ImagePicker from '../screens/imagePicker'
import { createDrawerNavigator } from '@react-navigation/drawer'

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Navigeteion() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Home" component={Home} />
        //         <Stack.Screen name="Todo" component={Todo} />
        //         <Stack.Screen name="Fb" component={Fb} />
        //         <Stack.Screen name="Camera" component={Camera} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Todo" component={Todo} />
                <Drawer.Screen name="Camera" component={Camera} />
                <Drawer.Screen name="ImagePicker" component={ImagePicker} />
                <Drawer.Screen name="FaceBook Login" component={Fb} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigeteion;