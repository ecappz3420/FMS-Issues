import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Table';

const ReportPage = async ({ params }) => {
  return (
    <div className="container-fluid vh-100 p-0">
        <Table userid={params.userid} />
    </div>
  );
};

export default ReportPage;
