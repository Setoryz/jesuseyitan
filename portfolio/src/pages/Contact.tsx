import Contact from "../components/Contact/Contact";
import RouteNav from "../components/layout/RouteNav/RouteNav";

const ContactPage = () => {
  return (
    <div>
      <Contact />
      <RouteNav prevLink={"/Portfolio"} />
    </div>
  );
};

export default ContactPage;
