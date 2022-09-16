import React from 'react';
import Header from "./adminHeader/Header";
import InfoElem from './infoElem/InfoElem';
import AdminPanel from "./adminPanel/AdminPanel";

const AdminMain = () => {
    return (
        <div className="mainAdmin">
            <AdminPanel/>
            <Header/>
            <InfoElem/>
        </div>
    );
};

export default AdminMain;