import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from "../context/contextprovider";






export default function Logout() {
    const {  setUserInfo } = useContext(userContext);

    useEffect(() => {

        async function fn() {
            // Perform logout operation, e.g., making a request to the server
            try {
                // Your logout API request here
                const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/user/logout', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.ok) {
                    setUserInfo("");
                }

                if(!response.ok){
                    alert("Login first");
                }

            } catch (error) {
                console.error('Error during logout:', error);
                // Handle error, show a message, or perform any other actions
            }
        }
        fn();

    }, [])

    return (
        <div>
        </div>
    )
}