import { useLocation } from "react-router-dom";
import MenuText from "../components/common/MenuText";

function BatchPage() {
  const location = useLocation();
  const { menuName } = location.state || {};
  console.log(menuName);
  return <MenuText text={menuName} />;
}

export default BatchPage;
