import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import userService from "../services/userServices";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      return;
    }

    const getInfo = async () => {
      const { data } = await userService.getUserInfo();

      setUserInfo(data);
    };
    getInfo();
  }, [user, userInfo]);

  return userInfo;
};
