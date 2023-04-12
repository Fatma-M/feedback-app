import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React App to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>

      <Link to="/">Back to home</Link>
    </Card>
  );
}

export default AboutPage;
