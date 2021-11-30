import DashboardLayout from "../../../layouts/dashboard-layout";
import WhiteCard from "../../../white-card/white-card";
import CustomTable from "../../../custom-table/custom-table";
import ReuseIcon from "../../../common/reuse-icons/reuse-icons";

import Dropzone from "react-dropzone";
import "./employees.scss";

const DashboardEmployees = () => {
  return (
    <DashboardLayout>
      <h1 className="page-heading"> Employees</h1>
      <WhiteCard className="mt-4">
        <div className="d-flex justify-content-between">
          <div className="steps">
            <h3 className="page-heading mb-3">
              {" "}
              Step - 1
              <span>
                {" "}
                Download the template to enrol your employees and send them
                invite to join{" "}
              </span>
            </h3>
          </div>

          <ReuseIcon className="mb-3">
            <svg
              className="comman-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="47.54"
              height="43.884"
              viewBox="0 0 47.54 43.884"
            >
              <path
                id="download"
                d="M36.57,38.4a1.854,1.854,0,1,0-.543,1.286A1.758,1.758,0,0,0,36.57,38.4Zm7.313,0a1.854,1.854,0,1,0-.543,1.286A1.758,1.758,0,0,0,43.883,38.4ZM47.54,32v9.142A2.732,2.732,0,0,1,44.8,43.884H2.743a2.645,2.645,0,0,1-1.943-.8A2.645,2.645,0,0,1,0,41.141V32a2.645,2.645,0,0,1,.8-1.943,2.645,2.645,0,0,1,1.943-.8H16.028l3.857,3.885a5.516,5.516,0,0,0,7.77,0l3.885-3.885H44.8A2.732,2.732,0,0,1,47.54,32ZM38.255,15.743a1.648,1.648,0,0,1-.4,2l-12.8,12.8a1.8,1.8,0,0,1-2.572,0l-12.8-12.8a1.648,1.648,0,0,1-.4-2,1.708,1.708,0,0,1,1.685-1.115h7.313V1.829A1.758,1.758,0,0,1,18.826.543,1.758,1.758,0,0,1,20.112,0h7.313a1.758,1.758,0,0,1,1.286.543,1.758,1.758,0,0,1,.543,1.286v12.8h7.313a1.706,1.706,0,0,1,1.685,1.115Z"
                fill="#103458"
              />
            </svg>
          </ReuseIcon>
        </div>
        <CustomTable />
      </WhiteCard>
    </DashboardLayout>
  );
};
export default DashboardEmployees;
