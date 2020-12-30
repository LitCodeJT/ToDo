const Main = (props) => {
  const mystyle = {
    margin: "auto",
    width: "50%",
    padding: "10px",
    fontFamily: "Arial"
  }
    return(
      <div style={{ 
        backgroundImage: `url("https://wallpaperaccess.com/full/1489369.jpg")`,
        backgroundRepeat: 'no-repeat',
        width:'1080px' ,
        margin: "auto",
        width: "50%",
      }}>
      <div style={mystyle}>
        <h1>What is on your Agenda</h1>
        <Body />
      </div></div>
    )
}