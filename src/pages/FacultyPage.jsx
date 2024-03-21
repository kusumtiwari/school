import { useLocation } from "react-router-dom";
import MenuText from "../components/common/MenuText";

function FacultyPage() {
  const location = useLocation();
  const { menuName } = location.state || {};

  return <MenuText text={menuName} />;
}

export default FacultyPage;
