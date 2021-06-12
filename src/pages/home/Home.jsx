import React from "react";

import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import WidgetLG from "../../components/widgetLarge/WidgetLG";
import WidgetSM from "../../components/widgetSmall/WidgetSM";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  );
};

export default Home;
