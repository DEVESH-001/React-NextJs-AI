import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href={"/dashboard/reports"}>(ONE-Level)View-Report</Link>
      <br />
      <Link href={"/profile"}>(TWO-Level)View-Profile</Link>
    </div>
  );
};

export default Dashboard;
