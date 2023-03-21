import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { sessionStore } from "../stores";
import AvatarUpload from "../components/settings/AvatarUpload";
import ConnectedDevices from "../components/settings/ConnectedDevices";
import FullScreenLoader from "../components/common/FullScreenLoader";
import ThemePreferences from "../components/settings/ThemePreferences";
import RecoveryKit from "../components/settings/RecoveryKit";
import Username from "../components/settings/Username";
import { Auth } from "aws-amplify";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SettingsRoute = () => {
  // const session = useRecoilValue(sessionStore);
  //
  // if (!session.session && !session.loading) {
  //   return <Navigate to="/" />;
  // }
  //
  // if (session.loading) {
  //   return <FullScreenLoader />;
  // }

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUserEmail(user.attributes.email))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-xl">Profile</h1>
        {/* refactor to mapping */}
        <div className="flex flex-col">
          <div className="border-t-2 border-t-black border-b-2 border-b-black pt-2 pb-2 flex">
            E-mail
            <div className="ml-4 text-slate-600">{userEmail}</div>
          </div>
          <div className="border-b-2 border-b-black pt-2 pb-2">Name</div>
          <div className="border-b-2 border-b-black pt-2 pb-2">
            Phone number
          </div>
          <div className="border-b-2 border-b-black pt-2 pb-2">Company</div>
          <div className="border-b-2 border-b-black pt-2 pb-2">Job title</div>
        </div>
      </div>
      {/* <ThemePreferences /> */}
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-xl">Security</h1>
        <Accordion allowMultiple p={0} className="border-b border-b-black">
          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left">
                  Password
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ConnectedDevices />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left">
                  Safety Question
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RecoveryKit />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button colorScheme="red" variant="outline" bgColor="#CB35351A">
          Terminate all other sessions
        </Button>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-xl">Delete account</h1>
        <Button colorScheme="red" variant="outline" bgColor="#CB35351A">
          Terminate account
        </Button>
      </div>
    </div>
  );
};

export default SettingsRoute;
