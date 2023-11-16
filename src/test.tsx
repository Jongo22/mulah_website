import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="mulah">
        <p className="mulah-word">MULAH</p>
      </div>
      <div className="registration">
        <p>Registration</p>
        <p className="details"> Please fill up your details</p>
      </div>
      <div className="name-textbox">
        <p>Name</p>
        <input
          className="name-textbox-one"
          type="text"
          placeholder="Enter Name"
        ></input>
      </div>
      <div className="birthday">
        <p>Birthday</p>
      </div>
      <div className="date-box">
        <div className="one">
          <input className="date-box-one" type="text" placeholder="DD"></input>
        </div>
        <div>
          <input className="date-box-two" type="text" placeholder="MM"></input>
        </div>
        <div>
          <input
            className="date-box-three"
            type="text"
            placeholder="YYYY"
          ></input>
        </div>
      </div>
      <div className="email">
        <p>Email</p>
        <input className="email-textbox" type="text" placeholder="Email Address"></input>
      </div>
      <div className="email-checkbox">
        <input type="checkbox"></input>
        <p>No Email Address</p>
      </div>
      <div className="button-container-two">
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}

export default App;
