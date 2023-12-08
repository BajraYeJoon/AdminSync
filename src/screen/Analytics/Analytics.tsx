import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import { userData } from "../../lib/data";

const Analytics = () => {
  return (
    <div className="flex flex-col flex-[4]">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      {/* <div className="homeWidgets"> */}
      {/* <WidgetSm/> */}
      {/* <WidgetLg/>  */}
    </div>
  );
};

export default Analytics;
