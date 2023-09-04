import React, { useState } from "react";

let nextID = 0;

function App() {
  const [item, setItem] = useState(""); //input
  const [cItem, setCItem] = useState([]); //empty array to fill later
  const [activeLine, setActiveLine] = useState(false);//line the text
  var [headingText, setHeadingText] = useState(false);//colour the button


  function handleClick() {  //line the text
    setActiveLine(true);
  }

  function changeToState() {  //color the button
    setHeadingText(true);
  }
  function changeBackState() {  //uncolor the button
    setHeadingText(false);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="desc"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button
          onClick={() => {
            setCItem((prveItem) => [...prveItem, { id: nextID++, item: item }]);
            setItem("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {cItem.map((singleCItem) => (  //create item
              <li key={singleCItem.id}  onClick={handleClick} > {/*style={{ textDecoration: activeLine ? "line-through" : "" }}*/}
                {singleCItem.item} {"  "}
                <button className="deleteButton"
                  onClick={() => {
                    //delete item
                    setCItem(cItem.filter((e) => e.id !== singleCItem.id));
                  }}
                >
                  Delete Me!
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
