import { useParams } from "react-router-dom";

function User() {
  const { userName } = useParams(); //NOTE: constant userName matches with the one mentioned in router
  return (
    <>
      <h1>Hello! {userName}</h1>
    </>
  );
}
export default User;
