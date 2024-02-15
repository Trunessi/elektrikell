import { useParams } from "react-router-dom";
import AboutMe from "./AboutMe";
import AboutGamma from "./AboutGamma";

function About() {
  //const location = useLocation();
  const { who } = useParams();
  //const navigate = useNavigate();

  //useEffect(() => {
  //  if (params.id === "999") navigate("/");
  //}, [params, navigate]);

  if(who === 'me') return <><AboutMe/></>;
  if(who === 'gamma') return <><AboutGamma/></>;

  return <div className="about container">
  This is a training project by Nina Naumenko in the Gamma Intelligence education course.
  </div>;
}

export default About;
