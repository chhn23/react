import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <> Please Log In</>;
  return <> Welcome {user.userName}</>;
}

export default Profile;
