import React from 'react'
import { NavLink } from 'react-router-dom';
const Home = () => {

    return (
        <>
            <h1>Home </h1>
            App With Functional componenet :  <NavLink to='/Functional'>Functional Increment App</NavLink><br /><br />
            App With Class componenet :  <NavLink to="Class">Functional Increment App</NavLink>
        </>
    )
}
export default Home;
