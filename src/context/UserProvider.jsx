import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("olympsite"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setUser(null);
        return;
      }

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/customusers/me`,
          requestOptions
        );
        if (!response.ok) {
          setToken(null);
          throw new Error("Unauthorized");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Fetch user error:", error.message);
        setToken(null);
        setUser(null);
      }
    };

    fetchUser();
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("olympsite", token);
    } else {
      localStorage.removeItem("olympsite");
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, user }}>
      {props.children}
    </UserContext.Provider>
  );
};
