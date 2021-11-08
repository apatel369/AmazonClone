import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import countryList from 'country-list';
import Button from '../components/button';

const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code)
    return (
        <View>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    {countries.map((country)=> <Picker.Item value={country.code} label={country.name}/>)}                 
                </Picker>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} placeholder="Full Name"/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput style={styles.input} keyboardType={'phone-pad'} placeholder="Phone Number"/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} placeholder="Address"/>
            </View>
            <Button text='Checkout'/>
        </View>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    root:{
        padding:10
    },
    raw:{

    },
    label:{
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'white',
        marginVertical:5,
        padding:5,
        height:30,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:2
    }
})


