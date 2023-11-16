import { useState, useRef, useEffect } from "react";
import "./styles.css";


function App() {
  //Refs
  const textBoxInput = useRef<HTMLInputElement | null>(null);;
  const nameTextBox = useRef<HTMLInputElement | null>(null);;
  const birthdayTextBox = useRef<HTMLInputElement | null>(null);;
  const birthdayTextBox1 = useRef<HTMLInputElement | null>(null);;
  const birthdayTextBox2 = useRef<HTMLInputElement | null>(null);;

  //State variables
  const [modal, setModal] = useState(false);
  const [welcomeWebsite, setWelcomeWebsite] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [verificationWebsite, setVerificationWebsite] = useState(false);
  const [customerDetailWebsite, setCustomerDetailWebsite] = useState(false);

  useEffect(() => {
    //onMount, first page is always displayed
    setWelcomeWebsite(true);
  }, []);

  const handlePhoneNumberChange = () => {
    let input = textBoxInput?.current?.value ;

    //if valid 9 digit phone number, proceed to next website
    if (input?.length === 9 && !isNaN(parseFloat(input))) {
      setWelcomeWebsite(false);
      setVerificationWebsite(true);

    } else {
      setShowErrorMessage(true);
      toggleModal();
    }
  };

  const checkLoyaltyPoints = () => {
    handlePhoneNumberChange();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleNameChange = () => {
    let nameText = nameTextBox?.current?.value;
    console.log("nameText", nameText);
  };
  return (
    <>
      {welcomeWebsite && (
        <div className="container">
          <div className="second-container">
            <div className="mulah-one">
              <p>MULAH</p>
            </div>
            <div className="greet-text">
              <p>Hello, Welcome!</p>
            </div>
            <div className="loyalty-points">
              <p>Check Your Loyalty Points & Rewards</p>
            </div>
            <div className="box">
              <div className="input-select-container">
                <select
                  className="select-textbox
                underline"
                >
                  <option value="+60">+60</option>
                </select>
                <input
                  className="input-textbox underline number"
                  ref={textBoxInput}
                  type="text"
                  placeholder="Enter Mobile Number"
                ></input>
              </div>
              {showErrorMessage && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <p className="modal-sentence-one">Invalid phone number.</p>
                    <div className="modal-button-container">
                      <button
                        className="modal-button"
                        onClick={() => setShowErrorMessage(false)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="button-container">
              <button
                className="button"
                onClick={() => {
                  checkLoyaltyPoints();
                }}
              >
                Check Loyalty Points
              </button>
            </div>
            <div className="powered-by-mulah">
              <p>
                Powered by{" "}
                <a
                  href="https://www.mulahrewards.com/"
                  style={{ pointerEvents: "none" }}
                >
                  MulahRewards.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      {verificationWebsite && (
        <>
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
                ref={nameTextBox}
                className="name-textbox-one"
                type="text"
                placeholder="Enter Name"
                onChange={handleNameChange}
              ></input>
              <p className="p-tag">*Please insert a name</p>
            </div>
            <div className="birthday">
              <p>Birthday</p>
            </div>
            <div className="date-box">
              <div className="one">
                <input
                  ref={birthdayTextBox}
                  className="date-box-one"
                  type="text"
                  placeholder="DD"
                ></input>
              </div>
              <div>
                <input
                  ref={birthdayTextBox1}
                  className="date-box-two"
                  type="text"
                  placeholder="MM"
                ></input>
              </div>
              <div>
                <input
                  ref={birthdayTextBox2}
                  className="date-box-three"
                  type="text"
                  placeholder="YYYY"
                ></input>
              </div>
            </div>
            <div className="p-tag-one">
              <p className="p-tag">*Please insert your birthday.</p>
            </div>

            <div className="email">
              <p>Email</p>
              <input
                className="email-textbox"
                type="text"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="p-tag-two">
              <p className="p-tag">*Please insert a valid email address</p>
            </div>
            <div className="email-checkbox">
              <input type="checkbox"></input>
              <p>No email address</p>
            </div>
            <div className="button-container-two">
              <button
                className="continue-button"
                onClick={() => {
                  setCustomerDetailWebsite(true);
                  setVerificationWebsite(false);
                }}
              >
                Continue
              </button>
            </div>
            <div className="powered-by-mulah">
              <p>
                Powered by{" "}
                <a
                  href="https://www.mulahrewards.com/"
                  style={{ pointerEvents: "none" }}
                >
                  MulahRewards.com
                </a>
              </p>
            </div>
          </div>
        </>
      )}
      {customerDetailWebsite && (
        <div className="third-website">
          <p>MULAH</p>
        </div>
      )}
    </>
  );
}

export default App;
