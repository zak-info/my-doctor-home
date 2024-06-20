"use client"
import React, { createContext, useState } from 'react';

// Create a context with an initial value
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [user,setUser] = useState({});
    const [routesTransition, setRoutesTransition] = useState(false);
    const [translations, setTranslations] = useState(
        {
            "m1":"Login",
            "m2":"Sign up",
            "m3":"Contact",
            "m4":"Info",
            "m5":"meet consultors ,engeneers and store owner in smart home in our platform ",
            "m6":"Build You home with latest Technologies",
            "m7":"Smart home automation systems allow you to control various aspects of your home through your smartphone or voice commands. This includes lighting, heating, cooling, security systems, and appliances",
            "m8":"Consultings Engeneers IOT-Products",
            "m9":"login",
            "m10":"login",
            "m11":"login",
            "m12":"login",
            "m13":"login",
            "m14":"login",
            "m15":"login",
            "m16":"login",
            "m17":"login",
            "m18":"login",
            "m19":"login",
            "m20":"Consultings",
            "m21":"Designs",
            "m22":"Products",
            "m23":"Profile",
            "m24":"Settings",
            "m25":"Home",
            "m26":"Orders",
            "m27":"Offers",
            "m28":"login",
            "m29":"login",
            "m30":"Estishara List",
            "m31":"Add Estishara",
            "m32":"Title",
            "m33":"Description",
            "m34":"created",
            "m35":"pending",
            "m36":"delevered",
            "m37":"login",
            "m38":"login",
            "m39":"login"
            
        
          }
);

    
    return (
        <GlobalContext.Provider
            value={{
                user,setUser,
                routesTransition,setRoutesTransition,
                translations, setTranslations, 
            }}
        >

            {children}

        </GlobalContext.Provider>
    );
};
