import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("olympsite"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setUser(null);
        setLoading(false);
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
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
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
    <UserContext.Provider value={{ token, setToken, user, loading }}>
      {props.children}
    </UserContext.Provider>
  );
};
