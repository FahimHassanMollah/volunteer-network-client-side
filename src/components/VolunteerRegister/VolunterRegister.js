import React from 'react';
import { useParams } from 'react-router-dom';
import LogoHeader from '../logoHeader/LogoHeader';

const VolunterRegister = () => {
   const{name}= useParams()
    return (
        <div>
            <LogoHeader></LogoHeader>
    <h2>volunter register for {name}</h2>
        </div>
    );
};

export default VolunterRegister;