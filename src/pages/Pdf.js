import React, { useState} from 'react';
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import {Button, StyleSheet, View, Image, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTranslation} from "react-i18next";
import { Audio } from 'expo-av';
const Pdf = () => {

    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const [HS_Year, setHS_Year] = useState('');
    const [HS, setHS] = useState('');
    const [Uni, setUni] = useState('');
    const [Uni_Year, setUni_Year] = useState('');
    const [Faculty, setFaculty] = useState('');

    const [Job_1_Year, setJob_1_Year] = useState('');
    const [Company_1, setCompany_1] = useState('');
    const [Position_1, setPosition_1] = useState('');
    const [Job_2_Year, setJob_2_Year] = useState('');
    const [Company_2, setCompany_2] = useState('');
    const [Position_2, setPosition_2] = useState('');

    const [lang1, setLang1] = useState('');
    const [lang2, setLang2] = useState('');
    const [lang3, setLang3] = useState('');

    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');

    const [card, setCard] = useState('');
    const [hobby, setHobby] = useState('');
    const [city, setCity] = useState('');
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const [but, setBut] = useState(false);

    const [sound, setSound] = React.useState();

    async function playSound() {

        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/not.mp3')
        );
        setSound(sound);
        await sound.playAsync(); }

    React.useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);


    const pick = async () => {
        setBut(true)
        try {
            const value = await AsyncStorage.getItem('@name_Key')
            if (value !== null) {
                setName(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@address_Key')
            if (value !== null) {
                setAddress(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@email_Key')
            if (value !== null) {
                setEmail(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@tel_Key')
            if (value !== null) {
                setTel(value)
            }
        } catch (e) {
        }
        //--------------------------------------------------------------
        try {
            const value = await AsyncStorage.getItem('@HS_Year__Key')
            if (value !== null) {
                setHS_Year(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@HS_Key')
            if (value !== null) {
                setHS(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Uni_Year_Key')
            if (value !== null) {
                setUni_Year(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Uni_Key')
            if (value !== null) {
                setUni(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Faculty_Key')
            if (value !== null) {
                setFaculty(value)
            }
        } catch (e) {
        }
        //--------------------------------------------------------------
        try {
            const value = await AsyncStorage.getItem('@Job_1_Year_Key')
            if (value !== null) {
                setJob_1_Year(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Company_1_Key')
            if (value !== null) {
                setCompany_1(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Position_1_Key')
            if (value !== null) {
                setPosition_1(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Job_2_Year_Key')
            if (value !== null) {
                setJob_2_Year(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Company_2_Key')
            if (value !== null) {
                setCompany_2(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@Position_2_Key')
            if (value !== null) {
                setPosition_2(value)
            }
        } catch (e) {
        }
        //---------------------------------------------------
        try {
            const value = await AsyncStorage.getItem('@skill1_Key')
            if (value !== null) {
                setSkill1(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@skill2_Key')
            if (value !== null) {
                setSkill2(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@skill3_Key')
            if (value !== null) {
                setSkill3(value)
            }
        } catch (e) {
        }
        //--------------------------------------------------------
        try {
            const value = await AsyncStorage.getItem('@lang1_Key')
            if (value !== null) {
                setLang1(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@lang2_Key')
            if (value !== null) {
                setLang2(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@lang3_Key')
            if (value !== null) {
                setLang3(value)
            }
        } catch (e) {
        }
        //--------------------------------------------------------------
        try {
            const value = await AsyncStorage.getItem('@card_Key')
            if (value !== null) {
                setCard(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@hobby_Key')
            if (value !== null) {
                setHobby(value)
            }
        } catch (e) {
        }
        try {
            const value = await AsyncStorage.getItem('@city_Key')
            if (value !== null) {
                setCity(value)
            }
        } catch (e) {
        }
    }



    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cv Maker</title>
        <style>
            body {
                margin: 60px 60px 60px 60px;
            }
            p{
            font-size: small;
            }
            h2 {
                text-align: center;
            }
            .flex-container > div {
             margin-right: 50px;
                }
            .flex {
            display: flex;
            margin-left: 20%;
                } 
            .flex-container {
            display: flex;
                }
        </style>
    </head>
    <div>
    <h2>${t("Personal info")}</h2>
        <div><p>${name}</p></div>
        <div><p>${address}</p></div>
        <div><p>${email}</p></div>
        <div><p>${tel}</p></div>
        <h2>${t("School")}</h2>
        <div class="flex-container">
        <div><p>${HS_Year}</p></div>
        <div><p>${HS}</p></div>
        </div>
        <div class="flex-container">
        <div><p>${Uni_Year}</p></div>
        <div><p>${Uni}</p>
        <p>${Faculty}</p></div>
        </div>
        <h2>${t("Job")}</h2>
        <div class="flex-container">
        <div><p>${Job_1_Year}</p></div>
        <div><p>${Company_1}</p>
        <p>${Position_1}</p></div>
        </div>
         <div class="flex-container">
        <div><p>${Job_2_Year}</p></div>
        <div><p>${Company_2}</p>
        <p>${Position_2}</p></div>
        </div>
        <h2>${t("Language skills")}</h2>
        <p>${lang1}</p>
        <p>${lang2}</p>
        <p>${lang3}</p>
        <h2>${t("Skill")}</h2>
        <p>${skill1}</p>
        <p>${skill2}</p>
        <p>${skill3}</p>
        <h2>${t("Last info")}</h2>
        <p>${card}</p>
        <p>${hobby}</p>
         <div class="flex">
        <div><p>${date}.${month}.${year} ${city}</p></div> 
        <div><p>............................</p></div>
        <div><p>${name}</p></div>
        </div>
    </body>
    </html>
`;
    const createAndSavePDF = async (html) => {
     await playSound()
        try {
            const { uri } = await Print.printToFileAsync({ html });
            if (Platform.OS === "ios") {
                await Sharing.shareAsync(uri);
            } else {
                const permission = await MediaLibrary.requestPermissionsAsync();
                if (permission.granted) {
                    await MediaLibrary.createAssetAsync(uri);
                }
            }
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/pdf.png')} />
            {but ? (
                <Button title={t("Save")} type="submit" value="submit" onPress={() => createAndSavePDF(htmlContent)}/>

            ) : (
                <Button title={t("Generate")} type="submit" value="submit" onPress={() => pick()}/>
            )
            }

        </View>

    );
}
export default Pdf;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
