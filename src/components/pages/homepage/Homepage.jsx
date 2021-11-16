
import Chart from "../../chart/Chart";
import FeatureInfo from "../../featuredInfo/FeatureInfo";
import "./homepage.css";
import {userData} from "../../dummyData"
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

export default function Homepage() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
