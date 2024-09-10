import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Table';
import Loading from './loading';

const ReportPage = async ({ params }) => {
  return (
    <div className="container-fluid vh-100 p-0">
      <Suspense fallback={<Loading/>}>
        <Table userid={params.userid} />
      </Suspense>

    </div>
  );
};

export default ReportPage;
