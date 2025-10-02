import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Da from "./Da";

function Block() {
  const [postData, setPostData] = useState([]);

  function handleRead() {
    axios.get("http://localhost:4000/read/block").then((res) => {
      setPostData(res.data);
    });
  }

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <div className="flex">
    <Da/>
      <div className="grid grid-cols-4 px-2 gap-2 ml-28 mt-5">
        {postData.map((items) => (
          <div
            key={items._id}
            className="w-72 h-96 shadow-sm bg-white p-4 rounded-xl"
          >
            <img
              className="w-64 h-60 rounded-xl hover:scale-105 transition cursor-pointer"
              src={`http://localhost:4000/Allimages/${items. title}`}
              alt=""
            />

            {/* Button u gudbinaya details page */}
            <Link to={`/block/${items.description}`}>
              <button className="bg-blue-700 rounded-2xl w-52 text-xl text-white h-12 mt-2">
                View Details
              </button>
            </Link>

            <h1 className="text-xl font-semibold py-1">{items.pImage}</h1>
            <h2 className="text-lg text-gray-700">{items.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block;
