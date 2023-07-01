import React, { useEffect } from 'react';
import Card from './components/Card';
import Home from './components/Home';
import Auth from './components/Auth';
import AchievementSection from './components/AchievementSection';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import FilterTab from './components/FilterTab';
import Dashboard from './components/Dashboard';
import PersonalDataCard from './components/PersonalDataCard';
import PersonalDataInformation from './components/PersonalDataInformation';
import PersonalData from './components/PersonalData';
import ModifyDataForm from './components/ModifyDataForm';
import ModifyAchievement from './components/ModifyAchievement';
import AboutUs from './components/AboutUs';
import AddData from './components/AddData';
import AddDataCo from './components/AddDataCo';
import AddDataMisc from './components/AddDataMisc';
import AddDataHighStud from './components/AddDataHighStud';
import AddDataPlacement from './components/AddDataPlacement'
 
import './App.css';
import './tailwind.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Accordian from './components/Accordian';
import AcademicAchievement from './components/AcademicAchievement';
import CocurricularAchievement from './components/CocurricularAchievement';
import Placement from './components/Placement';
import HigherStudies from './components/HigherStudies';
import Miscellaneous from './components/Miscellaneous';
import AOS from "aos";
import "aos/dist/aos.css";
{/* its for Moon Patel
        Please check the Dashboard.jsx first and There i Mention comment for you
*/}
export default function App() {
    useEffect(() => {
        AOS.init({
            duration: "1000"
        });
        AOS.refresh();
      }, []);
    return (
        <>
        <Router>
            <Routes>
                <Route exact path='/signup/' element={<Auth signup={true} />} />
                <Route exact path='/login/' element={<Auth signup={false} />} />
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/card' element={<Card/>} />
                <Route exact path='/achievement' element={<AchievementSection/>} />
                <Route exact path='/contactUs' element={<ContactUs/>} />
                <Route exact path='/carousel' element={<Carousel/>} />
                <Route exact path='/nav' element={<Navbar/>} />
                <Route exact path='/filtertab' element={<FilterTab/>} />
                <Route exact path='/academic_achievement' element={<AcademicAchievement/>} />
                <Route exact path='/cocurricular_achievement' element={<CocurricularAchievement/>} />
                <Route exact path='/placement_section' element={<Placement/>} />
                <Route exact path='/higher_studies' element={<HigherStudies/>} />
                <Route exact path='/miscellaneous_achievement' element={<Miscellaneous/>} />
                <Route exact path='/personalDataCard' element={<PersonalDataCard/>} />
                <Route exact path='/personalDataInformation' element={<PersonalDataInformation/>} />
                <Route exact path='/personalData' element={<PersonalData/>} />
                <Route exact path='/modifyDataForm' element={<ModifyDataForm/>} />
                <Route exact path='/modifyAchievement' element={<ModifyAchievement/>} />
                <Route exact path='/aboutUs' element={<AboutUs/>} />
                <Route exact path='/accordian' element={<Accordian/>} />
                <Route exact path='/addData' element={<AddData/>} />
                <Route exact path='/addDataCo' element={<AddDataCo/>} />
                <Route exact path='/addDataMisc' element={<AddDataMisc/>} />
                <Route exact path='/addDataPlacement' element={<AddDataPlacement/>} />
                <Route exact path='/addDataHighStud' element={<AddDataHighStud/>} />
                
            </Routes>
        </Router>
        </>
    );
}
