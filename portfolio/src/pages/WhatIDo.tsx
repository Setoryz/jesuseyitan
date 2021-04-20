import RouteNav from "../components/layout/RouteNav/RouteNav";
import Skills from "../components/Skills/Skills";

const SkillsPage = () => {
  return (
    <div>
      <Skills />
      <RouteNav prevLink={"/"} nextLink={"/Portfolio"} />
    </div>
  );
};

export default SkillsPage;
