import styled from "styled-components";

function StylecComponent() {
    // const Heading = styled.h1`
    // color: red;
    // background-color: yellow;  // first method.
    // padding:5px;
    // text-align: center;
    // border-radius:10px;
    // border: 2px solid green;
    // `

    // 2nd method.
    const Heading = styled.h1({
    color: "red",
    backgroundColor: "yellow",  // 2nd method.
    padding:"5px",
    textAlign: "center",
    borderRadius:"10px",
    border: "2px solid green",

    })

    const StyleBtn=styled.button`
    color:red;
    width:100px;
    height:40px;
    margin:20px;
    `


  return (
    <div>
        <h1>Styled Component</h1>
        <Heading>Hello i am styled component 1 </Heading>
        <Heading>Hello i am styled component 2 </Heading>
        <Heading>Hello i am styled component 3 </Heading>
        <Heading>Hello i am styled component 4 </Heading>
        <Heading>Hello i am styled component 5 </Heading>
        <StyleBtn>Log in</StyleBtn>
        <StyleBtn>Sign up</StyleBtn>
        <StyleBtn>Go to Home</StyleBtn>
    </div>
  )
}

export default StylecComponent