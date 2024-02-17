import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";

export default function Loading() {
  const isLoading = useSelector((state) => state.main.isLoading);

  return (
    isLoading && (
      <div className={"d-flex justify-content-center"}>
        <Spinner animation="grow" />;<h1> Loading...</h1>
      </div>
    )
  );
}

