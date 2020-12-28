import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker'

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    },
};



function Picker() {

    const open_picker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response', response);
            if (response.didCancel) {
                console.log('canceled..')
            } else if (response.error) {
                console.log(response.error)
            } else if (response.customButtons) {
                console.log(response.customButtons)
            } else {
                const source = { uri: response.uri }
                console.log(source);
            }
        })
    }
    return (
        <View>
            <Button onPress={open_picker} title='Open Image Picker' />
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

export default Picker;