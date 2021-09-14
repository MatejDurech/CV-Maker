import React, {useState} from 'react';
import {Actions} from "react-native-router-flux";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Skills = () => {
    const { t } = useTranslation();
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');

const handleChange1 = (text) => {
    setSkill1(text);
}
const handleChange2 = (text) => {
    setSkill2(text);
}
const handleChange3 = (text) => {
    setSkill3(text);
}

const store = async () => {
    try {

        await AsyncStorage.setItem('@skill1_Key', skill1)
    } catch (e) {

    }
    try {
        await AsyncStorage.setItem('@skill2_Key', skill2)
    } catch (e) {

    }
    try {
        await AsyncStorage.setItem('@skill3_Key', skill3)
    } catch (e) {

    }
    Actions.language();
}

    return(
        <View>
            <View  style={styles.TextImp} >
                <TextInput placeholder={t("e.g. Excel professional")} type="text" onChangeText={(text) => handleChange1(text)} /></View>

            <View style={styles.TextImp}>
                <TextInput placeholder={t("e.g. Word professional")}  type="text" onChangeText={(text) => handleChange2(text)} /></View>

            <View  style={styles.TextImp} >
                <TextInput placeholder={t("e.g. Java beginner")} type="text" onChangeText={(text) => handleChange3(text)} /></View>
            <Button title={t('Next')} type="submit" value="submit" onPress={() => store()} />
        </View>
    )
}
export default Skills;
const styles = StyleSheet.create({
    TextImp: {
        alignContent: "center",
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 10,
        borderRightColor:'white',
        borderLeftColor:'white',
        borderTopColor:'white',
        margin: 10
    }
});
