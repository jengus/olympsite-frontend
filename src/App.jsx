import React from "react";
import AppRoutes from "./routes/routes";
import MainLayout from "./components/layouts/MainLayout";
import { BrowserRouter  } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
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
