import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth';

const Fb = () => {
    const [name,setName] = useState("")
    const login_fb = async () => {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        auth().signInWithCredential(facebookCredential)
            .then((user) => {
                console.log(user)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <View style={style.container}>
            <Text>facebook Login</Text>
            <Button onPress={login_fb} title='Login' />
            <Text>{name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Fb;