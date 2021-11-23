import React, { useState, useEffect} from 'react';
import {BrowserRouter, Link,Routes,Route} from 'react-router-dom';
import data from '../data/items.json'
import UsersList from '../UserList/UsersList'

const UserProfile = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<UsersList usersList={users}/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default UserProfile

