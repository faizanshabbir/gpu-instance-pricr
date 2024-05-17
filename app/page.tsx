import Image from "next/image";
import InstanceSpecsPage from "./specs/page";
import NavigationPage from "./nav/navigation";

export default function Home() {
  return (
    <div>
      {/* <NavigationPage/> */}
      <InstanceSpecsPage/>
    </div>
  );
}
