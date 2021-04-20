import RouteNav from "../components/layout/RouteNav/RouteNav";
import Portfolio from "../components/Portfolio/Portfolio";

const PortfolioPage = () => {
  return (
    <div>
      <Portfolio />
      <RouteNav prevLink={"/WhatIDo"} nextLink={"/Contact"} />
    </div>
  );
};

export default PortfolioPage;
