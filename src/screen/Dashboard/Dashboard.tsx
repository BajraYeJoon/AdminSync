import SidebarPanel from "../Sidebar/Sidebar";
import Analytics from "../Analytics/Analytics";

const Dashboard = () => {
  return (
    <div className="flex mt-10 gap-4">
      <SidebarPanel />
      <Analytics />
    </div>
  );
};

export default Dashboard;
