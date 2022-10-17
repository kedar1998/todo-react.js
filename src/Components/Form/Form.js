import { React, useState } from "react";

const Form = (props) => {
  const [userText, setuserText] = useState("");

  const btnHandler = () => {
    if(userText){
        const inputText = {'text': userText}
        props.usertext(inputText);
        // setuserText("");
    }
  };

  const textHandler = (event) => {
    setuserText(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-5 ">
      <div className=" md:max-w-xl mx-auto flex flex-col items-center md:items-end space-y-5">
        <input
          onChange={textHandler}
          type="text"
          value={userText}
          className="w-full border border-black focus:outline-none h-8"
        />
        <button
          onClick={btnHandler}
          className="bg-blue-500 text-white font-semibold px-6 py-1 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
