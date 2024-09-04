import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Table from './Table';

const ReportPage = async ({ params }) => {
  return (
    <div className="container-fluid vh-100">
      <Navbar className="fixed-top" />
      <div className="w-100 overflow-auto h-100">
        <Table userid={params.userid} />
      </div>

    </div>
  );
};

export default ReportPage;
