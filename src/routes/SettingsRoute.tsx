import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { sessionStore } from "../stores";
import AvatarUpload from "../components/settings/AvatarUpload";
import ConnectedDevices from "../components/settings/ConnectedDevices";
import FullScreenLoader from "../components/common/FullScreenLoader";
import ThemePreferences from "../components/settings/ThemePreferences";
import RecoveryKit from "../components/settings/RecoveryKit";
import Username from "../components/settings/Username";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

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

  return (
    <div>
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-xl">Profile</h1>
        <Accordion allowMultiple p={0} className="border-b border-b-black">
          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left" className="flex">
                  E-mail
                  {/* turn into mapping */}
                  <div className="ml-8 text-slate-400">@banyan.computer</div>
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
                  Name
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RecoveryKit />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left">
                  Phone number
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RecoveryKit />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left">
                  Company
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RecoveryKit />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left">
                  Job title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RecoveryKit />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <ThemePreferences /> */}
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-xl">Security</h1>
        <Accordion allowMultiple p={0} className="border-b border-b-black">
          <AccordionItem>
            <h2>
              <AccordionButton className="border-t-2 border-t-black">
                <Box as="span" flex="1" textAlign="left">
                  Connected Devices
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
                  Recovery Kit
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RecoveryKit />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SettingsRoute;
