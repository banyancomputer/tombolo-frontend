import { useRecoilValue } from "recoil";

import { sessionStore } from "../stores";
import Authed from "../components/home/Authed";
import Public from "../components/home/Public";
import { useAuthedUser } from "../lib/auth/amplify-auth";

const HomeRoute = () => {
  return <Authed />;
};

export default HomeRoute;
