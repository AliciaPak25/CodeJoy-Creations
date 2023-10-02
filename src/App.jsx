import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import JoinTheTeam from "./pages/JoinTheTeam";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Disclaimer from "./pages/Disclaimer";
import PreLoader from "./components/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className="w-full overflow-hidden">
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/join-the-team" element={<JoinTheTeam />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;

/* import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {View, ActivityIndicator, Text} from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Text style={styles.vasi}>VASI</Text>
      ) : (
        <>
          <StatusBar />
          <Navigation />
        </>
      )}
    </>
  );
}; */
