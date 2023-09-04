import React from 'react';
import './App.css';
import Header from './Components/Header'; // Updated import path
import Navbar from './Components/Navbar'; // Updated import path
import EmailInput from './Components/EmailInput';
import AdvertisementContainer from './Components/AdvertisementContainer';
import InformationSection from './Components/InformationSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Navbar />
        <EmailInput/>
        <AdvertisementContainer/>
        <InformationSection/>
        {/* Other content goes here */}
      </main>
    </div>
  );
}

export default App;

