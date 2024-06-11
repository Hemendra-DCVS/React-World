import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(-1), 5000);
  }, []);

  return (
    <>
      <h1> Page not found </h1>
    </>
  );
}

export default ErrorPage;
