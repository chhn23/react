import { useEffect, useState } from "react";

function GithubUsingUseEffect() {
  const [data, setData] = useState([]);
  //use effect maked the fetch api call at the time of loading
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followeres::::{data.followers}
        <img src={data.avatar_url} alt="git picture" width={300}></img>
      </div>
    </>
  );
}
export default GithubUsingUseEffect;
