import React from 'react';
import { StyleSheet, Image } from 'react-native';

export const Logo = () => {
    return (
        <Image
            style={styles.logo}
            source={require('../../../assets/layout/logo.png')}
        />
    )
}
const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: 40,
    },
})