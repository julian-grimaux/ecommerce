import React, { useState, useEffect, Fragment} from 'react';
import {BrowserRouter, Link,Routes,Route} from 'react-router-dom';


const UserProfile = ({currentUser}) => {
    const {first,last} = currentUser.name
    return (
        <Fragment>
            <h1>{first}{last}</h1>
        </Fragment>
    )
}

export default UserProfile

