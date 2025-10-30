import { useState } from "react";

function InlineStyling() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ea1414cc",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #e81111e7",
    margin: "10px",
    backgroundColor: "black",
    color: "white",
  });

  const [TextColor,setTextColor]=useState('black');
  const [grid,setGrid]=useState(true);

  const updateTheme=(bgColor,textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor,color:textColor})
    setTextColor({TextColor})

  }

  return (
    <>
      <h1
        style={{ backgroundColor: "red", color: "white", textAlign: "center" }}
      >
        Inline Style in React Js
      </h1>
      <button onClick={()=>updateTheme('#ccc','red')}>Gray Theme</button>
        <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
        <button onClick={()=>setGrid(!grid)}>Grid</button>

      <div style={{ display:grid?"flex":"block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.licdn.com/dms/image/v2/D5603AQGK8raxHAf4GQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732731769080?e=2147483647&v=beta&t=uX4MhYrdik7hXLe6z0Jlg7nEzQGZmhNp2swSCJURORY"
            alt="Pankaj Yadav image"
          />
          <div style={{ padding: "5px" }}>
            <h4>Pankaj Yadav</h4>
            <p>software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.licdn.com/dms/image/v2/D5603AQGK8raxHAf4GQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732731769080?e=2147483647&v=beta&t=uX4MhYrdik7hXLe6z0Jlg7nEzQGZmhNp2swSCJURORY"
            alt="Pankaj Yadav image"
          />
          <div style={{ padding: "5px" }}>
            <h4>Pankaj Yadav</h4>
            <p>software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.licdn.com/dms/image/v2/D5603AQGK8raxHAf4GQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732731769080?e=2147483647&v=beta&t=uX4MhYrdik7hXLe6z0Jlg7nEzQGZmhNp2swSCJURORY"
            alt="Pankaj Yadav image"
          />
          <div style={{ padding: "5px" }}>
            <h4>Pankaj Yadav</h4>
            <p>software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.licdn.com/dms/image/v2/D5603AQGK8raxHAf4GQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732731769080?e=2147483647&v=beta&t=uX4MhYrdik7hXLe6z0Jlg7nEzQGZmhNp2swSCJURORY"
            alt="Pankaj Yadav image"
          />
          <div style={{ padding: "5px" }}>
            <h4>Pankaj Yadav</h4>
            <p>software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.licdn.com/dms/image/v2/D5603AQGK8raxHAf4GQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732731769080?e=2147483647&v=beta&t=uX4MhYrdik7hXLe6z0Jlg7nEzQGZmhNp2swSCJURORY"
            alt="Pankaj Yadav image"
          />
          <div style={{ padding: "5px" }}>
            <h4>Pankaj Yadav</h4>
            <p>software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InlineStyling;
