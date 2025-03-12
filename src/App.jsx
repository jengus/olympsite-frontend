import React from "react";
import { AppRoutes } from "@routes";
import { MainLayout } from "@components";
import { BrowserRouter  } from "react-router-dom";
import { UserProvider } from "@context";

function App() {


  return (
    <>
    <BrowserRouter>
    <UserProvider>
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
      </UserProvider>
    </BrowserRouter>
    </>
  );
}

export default App
