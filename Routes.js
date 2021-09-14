import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './src/pages/Home.js'
import School from './src/pages/School.js'
import Job from "./src/pages/Job";
import Skills from "./src/pages/Skills";
import Language from "./src/pages/Language";
import Last from "./src/pages/Last";
import Loc from "./src/pages/Location";
import { useTranslation } from 'react-i18next';
import './i18n';
import Pdf from "./src/pages/Pdf";

const Routes = () => {
const { t } = useTranslation();
return(

    <Router>
        <Scene key="root">
            <Scene key="location" hideNavBar={true} component={Loc} titleinitial={true}/>
            <Scene key="home" component={Home} title={t("Personal info")}/>
            <Scene key="school" component={School} title={t("School")}/>
            <Scene key="job" component={Job} title={t("Job")}/>
            <Scene key="skills" component={Skills} title={t("Skill")}/>
            <Scene key="language" component={Language} title={t("Language skills")}/>
            <Scene key="last" component={Last} title={t("Last info")}/>
            <Scene key="pdf" component={Pdf} title={t("Generate pdf") } />
        </Scene>
    </Router>
)
}
export default Routes
