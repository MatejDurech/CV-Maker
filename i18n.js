import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import {Platform, Text} from "react-native";
import {NativeModules} from "react-native";
import React from "react";


    const resources = {
        sk_SK: {
            translation: {
                "Your name": "Celé meno",
                "Address": "Adresa",
                "Phone number": "Telefónne číslo",
                "Years": "Rok od - do",
                "Company": "Spoločnosť",
                "Position": "Pozícia",
                "Language - level": "Znalosť jazyka",
                "Next": "Ďalej",
                "Driving licence": "Vodičský preukaz",
                "Hobby": "Záľuby",
                "e.g. Excel professional": "napr. Exel profesionál",
                "e.g. Word professional": "napr. Word profesionál",
                "e.g. Java beginner": "napr. Java začiatočník",
                "High school": "Stredná škola",
                "University": "Vysoká škola",
                "Faculty": "Fakulta",
                "Personal info": "Osobné údaje",
                "School": "Škola",
                "Job": "Práca",
                "Skill": "Zručnosti",
                "Language skills": "Jazykové znalosti",
                "Last info": "Doplnkové informácie",
                "Start": "Štart",
                "Please waiting ..": "Prosím počkajte ..",
                "Welcome in the CV-Maker": "Vitajte v CV-Maker",
                "Generate": "Vygenerovať",
                "Sava": "Uložiť",
            }
        }
    };
const deviceLanguage =
Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;


i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: deviceLanguage,

            keySeparator: false,

            interpolation: {
                escapeValue: false
            }
        })

export default i18n;
