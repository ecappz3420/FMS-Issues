import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import Header from "./Header";
import { fetchVehicles, refreshAccessToken } from "@/app/utils/zohoAuth";
const FormPage = async ({ params }) => {
  const access_token = await refreshAccessToken();
  const records = await fetchVehicles(access_token);
  return (
    <ChakraProvider>
      <div className="container-fluid p-2 vh-100 d-flex flex-column">
        <Header />
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          {/* <Form records={records} userid={params.userid}/> */}
          <div className="text-center">Page not found!</div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default FormPage;
