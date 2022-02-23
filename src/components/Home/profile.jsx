import React from 'react'
import "./profile.css"
import Home from './Home/home'
import Footer from './Footer/footer'
import TopBar from './TopBar/topBar';

export default function Profile() {
  return (
    <div className="main-profile-container">
        <TopBar />
        <Home />
        <Footer />

    </div>
  )
}
