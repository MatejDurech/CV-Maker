import React, {useEffect, useState} from 'react';
import {Actions} from "react-native-router-flux";
import {Button, TextInput, View, StyleSheet} from "react-native";
import { useTranslation } from 'react-i18next';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchableDropdown from 'react-native-searchable-dropdown';
const School = () => {
    const [serverData, setServerData] = useState([]);
    const [HS_Year, setHS_Year] = useState('');
    const [HS, setHS] = useState('');
    const [Uni, setUni] = useState('');
    const [Uni_Year, setUni_Year] = useState('');
    const [Faculty, setFaculty] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MatejDurech/sk-vysoke-skoly/main/vs.json')
            .then((response) => response.json())
            .then((responseJson) => {
                setServerData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleChange1 = (text) => {
        setHS_Year(text)
    }
    const handleChange2 = (text) => {
        setHS(text)
    }
    const handleChange3 = (text) => {
        setUni_Year(text)
    }
    const handleChange4 = (text) => {
        setFaculty(text)
    }


    const store  = async () => {
        try {
            await AsyncStorage.setItem('@HS_Year__Key', HS_Year)

        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@HS_Key', HS)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Uni_Year_Key', Uni_Year)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Uni_Key', Uni)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Faculty_Key', Faculty)
        } catch (e) {

        }
        Actions.job()
    }
    return (
        <View>
            <View>
                <TextInput style={styles.TextImp} placeholder={t("Years")} type="text" onChangeText={(text) => handleChange1(text)} />
                <TextInput style={styles.TextImp} placeholder={t("High school")}  type="text" onChangeText={(text) => handleChange2(text)} />
                <TextInput style={styles.TextImp} placeholder={t("Years")} type="text" onChangeText={(text) => handleChange3(text)} />

            <SearchableDropdown
                style={styles.TextImp}
                onTextChange={(text) => setUni(text)}
                onItemSelect={(item) => setUni(item.name)}
                containerStyle={{padding: 5}}
                items={serverData}
                defaultIndex={2}
                placeholder={t("University")}
                resetValue={false}
                textInputStyle={{

                    padding: 12,
                    borderWidth: 1,
                    borderBottomColor: 'lightgray',
                    borderLeftColor: 'white',
                    borderRightColor: 'white',
                    borderTopColor: 'white',
                }}
                itemStyle={{

                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#E8F3FF',
                    borderColor: 'lightgray',
                    borderRadius: 8,
                    borderWidth: 1,
                }}
                itemTextStyle={{
                    color: '#222',
                }}
                itemsContainerStyle={{
                    maxHeight: '55%',
                }}
            />
                <TextInput style={styles.TextImp} placeholder={t("Faculty")} type="text" onChangeText={(text) => handleChange4(text)} />
            </View>
            <Button title={t('Next')} onPress={() => store()} />
        </View>
    )
}
export default School;
const styles = StyleSheet.create({
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
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
