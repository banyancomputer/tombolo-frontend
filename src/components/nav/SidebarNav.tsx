import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getRecoil } from "recoil-nexus";
import { sessionStore } from "../../stores";
import AlphaTag from "./AlphaTag";
import BrandLogo from "../icons/BrandLogo";
import BrandWordmark from "../icons/BrandWordmark";
import Disconnect from "../icons/Disconnect";
import Dashboard from "../icons/Dashboard";
import NavItem from "./NavItem";
import DealPortalIcon from "../icons/DealPortalIcon";
import Account from "../icons/Account";
import Support from "../icons/Support";
import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "@chakra-ui/react";
import { AddIcon, ArrowLeftIcon } from "@chakra-ui/icons";
const navItemsUpper = [
  {
    label: "Dashboard",
    href: "/",
    icon: Dashboard,
  },
  {
    label: "Deal Portal",
    href: "/dealportal/",
    icon: DealPortalIcon,
  },
  {
    label: "Account",
    href: "/settings/",
    icon: Account,
  },
  {
    label: "Support",
    href: "https://discord.gg/PVeg4PAqqC",
    icon: Support,
  },
];

const SidebarNav = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleCloseDrawer = (): void => {
    setChecked(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="drawer drawer-mobile h-screen">
      <input
        id="sidebar-nav"
        className="drawer-toggle"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <div className="drawer-content flex flex-col">{children}</div>
      <div
        className={`drawer-side ${
          location.pathname.match(/register|backup|delegate|recover/)
            ? "!hidden"
            : ""
        }`}
      >
        <label
          htmlFor="sidebar-nav"
          className="drawer-overlay !bg-[#262626] !opacity-[.85]"
        />
        <div className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content border-r border-r-black">
          {/* Brand */}
          <div
            className="flex items-center gap-2 cursor-pointer mb-8"
            onClick={() => {
              handleCloseDrawer();
              navigate("/");
            }}
          >
            <BrandLogo />
            <BrandWordmark />
            <AlphaTag />
          </div>
          {/* Upper Menu */}
          <ul className="mt-auto ">
            {navItemsUpper.map((item, key) => (
              <NavItem
                handleCloseDrawer={handleCloseDrawer}
                item={item}
                key={key}
              />
            ))}
          </ul>
          {/* Lower Menu */}
          <ul className="mt-auto">
            <Authenticator loginMechanisms={["email"]}>
              {({ signOut }) => (
                <Button onClick={signOut} colorScheme="black" variant="ghost">
                  Log Out
                  {/* placeholder */}
                </Button>
              )}
            </Authenticator>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SidebarNav;
