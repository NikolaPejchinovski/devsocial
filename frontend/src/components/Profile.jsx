import React from 'react'
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import Button from './Button';
import { useNavigate } from 'react-router';

const Profile = () => {
    const {user} = useUser();
    const navigate = useNavigate();

  return (
    <div className='profile-container'>
        <img src={user.profilePic.substring(user.profilePic.lastIndexOf('uploads\\'))} alt="" className="profile-pic" />
        <h4 className='username'>Username: <span className='username' style={{fontWeight:'400'}}>{user.username}</span></h4>
        <h4 className='email'>Email: <span className='email' style={{fontWeight:'400'}}>{user.email}</span></h4>
        <Button
            text='Dashboard'
            onClick={() => navigate('/dashboard')}
            className='dashboard-btn'
        />
    </div>
  )
}

export default Profile