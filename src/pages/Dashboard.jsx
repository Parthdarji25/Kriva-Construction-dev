import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>

      {/* dashboard part starts from here */}
      <div className="dashboard-page-sec">
        <div className="dashboard-wrap">
          <select name="voucher" className="voucher">
            <option value="sel-voher">Select Voucher</option>
          </select>
        </div>
        <div className="vendor-wrap">
          <select name="voucher" className="voucher">
            <option value="sel-voher">Select Vender</option>
          </select>
          <select name="voucher" className="voucher">
            <option value="sel-voher">Select Site</option>
          </select>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Bill No</th>
              <th>
                Items
                <select className="dashboard-select">
                  <option value="volvo">Wood</option>
                  <option value="saab">Cement</option>
                  <option value="mercedes">Bricks</option>
                  <option value="audi">Concerete</option>
                </select>
              </th>
              <th>SubItem
                <select className="dashboard-select">
                  <option value="volvo">Wood</option>
                  <option value="saab">Cement</option>
                  <option value="mercedes">Bricks</option>
                  <option value="audi">Concerete</option>
                </select>
              </th>
              <th>Quantity</th>
              <th>Unit
                <select className="dashboard-select">
                  <option value="volvo">Wood</option>
                  <option value="saab">Cement</option>
                  <option value="mercedes">Bricks</option>
                  <option value="audi">Concerete</option>
                </select>
              </th>
              <th>Buying Rate</th>
              <th>Market Rate</th>
              <th>Discount</th>
              <th>Buying Amt</th>
              <th>Market Amt</th>
              <th>Bill Paid</th>
              <th>Bill Paid By
                <select className="dashboard-select">
                  <option value="volvo">Wood</option>
                  <option value="saab">Cement</option>
                  <option value="mercedes">Bricks</option>
                  <option value="audi">Concerete</option>
                </select>
              </th>
            </tr>
            <tr>
              <td>01/01/98</td>
              <td>01</td>
              <td>ex</td>
              <td>ex</td>
              <td>ex</td>
              <td>20</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>10</td>
              <td>10</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
