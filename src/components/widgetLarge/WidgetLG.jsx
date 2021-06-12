import React from "react";
import "./WidgetLG.css";

const WidgetLG = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://avatars.githubusercontent.com/u/45060771?v=4"
              alt=""
            />
            <span className="widgetLgName">Kalu Bekalu</span>
          </td>
          <td className="widgetLgDate">9 Sep 2022</td>
          <td className="widgetLgAmount">$1022.00</td>
          <td className="widgetLgStatus">
            <Button className="widgetLgButton" type="approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://avatars.githubusercontent.com/u/45060771?v=4"
              alt=""
            />
            <span className="widgetLgName">Kalu Bekalu</span>
          </td>
          <td className="widgetLgDate">9 Sep 2022</td>
          <td className="widgetLgAmount">$1022.00</td>
          <td className="widgetLgStatus">
            <Button className="widgetLgButton" type="declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://avatars.githubusercontent.com/u/45060771?v=4"
              alt=""
            />
            <span className="widgetLgName">Kalu Bekalu</span>
          </td>
          <td className="widgetLgDate">9 Sep 2022</td>
          <td className="widgetLgAmount">$1022.00</td>
          <td className="widgetLgStatus">
            <Button className="widgetLgButton" type="approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://avatars.githubusercontent.com/u/45060771?v=4"
              alt=""
            />
            <span className="widgetLgName">Kalu Bekalu</span>
          </td>
          <td className="widgetLgDate">9 Sep 2022</td>
          <td className="widgetLgAmount">$1022.00</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLG;
