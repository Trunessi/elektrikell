import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function About() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  useEffect(() => {
    if (params.id === "999") navigate("/");
  }, [params, navigate]);

  return <div>
  This is a training project by Nina Naumenko in the Gamma Intelligence education course
  </div>;
}

export default About;
