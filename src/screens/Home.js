import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import database from '@react-native-firebase/database';



const Home = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const save_data = () => {
        let user = {
            email,
            pass
        }
        console.log(user)
        database().ref('/').child('users').push(user)

        setEmail("")
        setPass("")
    }
    return (
        <View style={style.container}>
            {/* <TouchableOpacity
                style={style.btn}
                onPress={() => props.navigation.navigate('Todo')}   >
                <Text style={style.btntext}>Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.btn}
                onPress={() => props.navigation.navigate('Camera')}  >
                <Text style={style.btntext}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.btn}
                onPress={() => props.navigation.navigate('Fb')}  >
                <Text style={style.btntext}>Fb_login</Text>
            </TouchableOpacity> */}

            <Text style={{ fontSize: 25 }}>Login</Text>
            <View style={{ borderWidth: 1, borderColor: "black", width: "80%", margin: 10 }} >
                <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder='email' />
            </View>
            <View style={{ borderWidth: 1, borderColor: "black", width: "80%", }}>
                <TextInput value={pass} secureTextEntry={true} onChangeText={(e) => setPass(e)} placeholder='password' />
            </View>
            <View style={{ margin: 10, width: "80%" }}>
                <Button onPress={save_data} title='login' />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    btn: {
        width: "80%",
        backgroundColor: 'gray',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10
    },
    btntext: {
        fontSize: 20,
        color: 'white'
    }
})

export default Home;