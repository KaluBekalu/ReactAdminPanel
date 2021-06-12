import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./FeaturedInfo.css"


const Info = () => {
  return (
    <div className="featured">
      <div className="feturedItem">
        <span className="featuredTitile">Revenue</span>

        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2334</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward className="featuredIcon  negative" />
          </span>
        </div>

        <span className="featuredSub">Compare to last Month</span>
      </div>

      <div className="feturedItem">
        <span className="featuredTitile">Sales</span>

        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1047</span>
          <span className="featuredMoneyRate">
            -4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>

        <span className="featuredSub">Compare to last Month</span>
      </div>

      <div className="feturedItem">
        <span className="featuredTitile">Cost</span>

        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1047</span>
          <span className="featuredMoneyRate">
            +6 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>

        <span className="featuredSub">Compare to last Month</span>
      </div>

    </div>
  );
};

export default Info;
