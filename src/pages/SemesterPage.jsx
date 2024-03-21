import { useState } from "react";

import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";

import { AiFillDelete } from "react-icons/ai";
import { RiLoader2Line } from "react-icons/ri";

import TextInput from "../components/common/TextInput";

function SemesterPage() {
  const [inputValue, setInputValue] = useState("");
  //   for the semester, user entered into the field
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { menuName } = location.state || {};
  console.log(menuName);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulating a delay of fe miliseconds
    setTimeout(() => {
      console.log("Submitted:", inputValue);
      setItems([...items, inputValue]);
      setInputValue("");
      setIsLoading(false);
    }, 600);
  };
  //   for deleting list item when trash icon is clicked
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <>
      <div className="container mx-auto mt-10 w-fit flex flex-col justify-center items-center font-mulish border border-primary-headingColor px-6 py-10 bg-secondary-detailsBackground box-shadow">
        <h1 className="text-3xl font-bold mb-6 font-robotSlab">{menuName}</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <TextInput
              placeholder={`Enter ${menuName} name`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              pattern="[A-Za-z ]+"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-transparent checked:border-transparent focus:outline-none focus:ring-2 focus:bg-primary-headingColor"
              style={{ borderRadius: "50%" }}
            />
            <label>Agree to terms and conditions</label>
          </div>
          <Button
            text={
              isLoading ? <RiLoader2Line className="animate-spin" /> : "Submit"
            }
            disabled={isLoading}
          />
        </form>
      </div>
      <div className="mt-12 px-4 md:px-10 lg:px-12 py-6 box-shadow w-fit mx-4 md:mx-12 lg:mx-26 xl:mx-24">
        <h2 className="text-2xl font-bold mb-2 text-primary-headingColor font-robotoSlab">
          {menuName}s :
        </h2>
        {items !== null && (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="mb-2 text-lg my-2 flex items-center justify-between"
              >
                {index + 1}. {item}
                <AiFillDelete
                  className="cursor-pointer ml-2 text-primary-btnColor"
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SemesterPage;
