//DashboardMainLayout

import Link from "next/link";

// function DashboardMainLayout({ feed, stats }) {
function DashboardMainLayout({ tab1, tab2 }) {
  return (
    <>
      <nav className="">
        <Link href={"/dashboard-main/tab1"}>Tab-1</Link> {"| "}
        <Link href={"/dashboard-main/tab2"}>Tab-2</Link>
      </nav>
      <br />
      <div>{tab1}</div>
      <br />
      <div>{tab2}</div>
    </>
  );
}

export default DashboardMainLayout;
