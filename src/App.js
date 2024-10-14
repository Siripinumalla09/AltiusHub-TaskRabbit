
import "./App.css";
import { React, useState } from "react";
import validator from 'validator';
function App() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");;
    const [photo, setPhoto] = useState("");
    const [about, setAbout] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] =useState("null");
    const [emailerror, setEmailError] = useState("");
    const [passworderror, setPasswordError] = useState("");;
    const handleReset = () => {
        setUsername("");
        setEmail("");
        setContact("");
        setPhoto("");
        setAbout("");
    };

    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
         setEmailError('Valid Email :)')
      } else {
         setEmailError('Enter valid Email!')
      }
    }

    const validatePassword = (e) => {
      var password = e.target.value
    
      if (password.length()>8) {
         setPasswordError('Valid Password :)')
      } else {
         setPasswordError('Minimum 8 digits!')
      }
    }
    const handleSubmit = (e) => {
      console.log(
          username,
          email,
          contact,
          photo,
          about
      );
    }
    return (
        <div className="App">
            <h1>Registration Form</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label for="username">
                        Username *
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        placeholder="Enter UserName"
                        required
                    />
            
                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                          validateEmail(e)
                        }
                        placeholder="Enter email"
                        required
                    />
                   

                <label for="password">Enter Password* </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) =>
                          validatePassword(e)
                        }
                        placeholder="Enter Password"
                        required
                    />
                  
                    <label for="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />
                     
                     <label for="file">Upload Photo*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setPhoto(e.target.files[0])
                        }
                        placeholder="Enter Upload File"
                        required
                    />

                   
                  

                    <label for="about">Feedback</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="give feedback"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
