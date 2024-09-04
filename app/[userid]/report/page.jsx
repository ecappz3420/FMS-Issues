import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Table from './Table';

const ReportPage = async ({ params }) => {
    return (
        <div className="container-fluid vh-100">
            <Navbar />
            <Table userid={params.userid} />
        </div>
    );
};

export default ReportPage;
