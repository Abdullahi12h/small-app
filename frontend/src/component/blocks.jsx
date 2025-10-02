import axios from "axios";
import { useEffect, useState } from "react";
import Da from "../component/Da";

function Block() {
  const [postData, setPostData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // project la doortay

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
      <Da />

      {/* Haddii aan project la xulin → grid la tuso */}
      {!selectedProject && (
        <div className="grid grid-cols-4 px-2 gap-2 ml-28 mt-5">
          {postData.map((items) => (
            <div
              key={items._id}
              className="w-72 h-96 shadow-sm bg-white p-4 rounded-xl"
            >
              <img
                className="w-64 h-60 rounded-xl hover:scale-105 transition cursor-pointer"
                src={`http://localhost:4000/Allimages/${items.pImage}`}
                alt=""
              />

              {/* button ku xiraya project la xushay */}
              <button
                onClick={() => setSelectedProject(items)}
                className="bg-blue-700 rounded-2xl w-52 text-xl text-white h-12 mt-2"
              >
                View Details
              </button>

              <h1 className="text-xl font-semibold py-1">{items.title}</h1>
              <h2 className="text-lg text-gray-700">{items.price}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Haddii project la xushay → details page gudaha isla component */}
      {selectedProject && (
        <div className="p-10 w-full">
          <h1 className="text-3xl font-bold mb-4">
            {selectedProject.title}
          </h1>
          <img
            src={`http://localhost:4000/Allimages/${selectedProject.pImage}`}
            alt={selectedProject.title}
            className="w-96 h-72 rounded-lg shadow-md mb-5"
          />
          <h2 className="text-2xl text-gray-700 mb-2">
            Price: {selectedProject.price}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {selectedProject.description}
          </p>

          {/* Button dib ugu noqosho list-ka */}
          <button
            onClick={() => setSelectedProject(null)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Back to all projects
          </button>
        </div>
      )}
    </div>
  );
}

export default Block;
