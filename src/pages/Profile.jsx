import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import '../style/Profile.css';

function Profile() {
  return (
    <div className="main-container">
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
}

export default Profile;
