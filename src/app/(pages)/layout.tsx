import PrimaryNavBar from "@/appComponents/primaryNavbar";
// import SecondaryNavbar from "@/appComponents/secondary-navbar";
// import { menuData } from "@/appComponents/secondary-navbar/secondaryMenus";
import { NavigationMenuDemo } from "@/appComponents/secondary-navbar/test-menu";
import Footer from "@/pageComponent/footer/footer";
import {} from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimaryNavBar />
      {/* <SecondaryNavbar items={menuData} /> */}
      <NavigationMenuDemo />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
