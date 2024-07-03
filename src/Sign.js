
// import React, { useState } from 'react';
// import styles from './Sing.module.css';
// import { useNavigate } from 'react-router-dom';
// import Login from './Login.js';
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";



// const Sign = ({ setFirstName, setLastName }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [firstNameInput, setFirstNameInput] = useState('');
//   const [lastNameInput, setLastNameInput] = useState('');
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignInClick = () => {
//     setFirstName(firstNameInput);
//     setLastName(lastNameInput);
//     navigate('/Login');
    
//   };

//   const handleEnterClick = () => {
//     setFirstName(firstNameInput);
//     setLastName(lastNameInput);
//   };

//   const handleFirstNameChange = (e) => {
//     setFirstNameInput(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastNameInput(e.target.value);
//   };

//   return (
//     <div>
//       <div className={styles.signContainer}>
//         <div className={styles.inputs}>
//           <p>SIGN UP</p>
//           <input
//             type="text"
//             placeholder="Surname"
//             className={styles.input}
//             value={firstNameInput}
//             onChange={handleFirstNameChange}
//           /><br />
//           <input
//             type="text"
//             placeholder="Lastname"
//             className={styles.input}
//             value={lastNameInput}
//             onChange={handleLastNameChange}
//           /><br />
//           <input type="email" placeholder="Email" className={styles.input} /><br />
//           <div className={styles.passwordInput}>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className={styles.input}
//             />
//             <button
//               type="button"
//               className={styles.toggleButton}
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <FaRegEyeSlash />
//  : <IoEyeSharp />
// }
//             </button>
//             <button onClick={handleEnterClick} className={styles.enterButton}>Enter</button>
//           </div>
//         </div>

//         <div className={styles.color}>
//           <h1>Welcome back!</h1>
//           <p>To keep connected with us please login with your personal info</p>
//           <button onClick={handleSignInClick} className={styles.signInButton}>Sign In</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign;
import React, { useState } from 'react';
import styles from './Sing.module.css';
import { useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const Sign = ({ setFirstName, setLastName }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInClick = () => {
    setFirstName(firstNameInput);
    setLastName(lastNameInput);
    navigate('/login');
  };

  const handleEnterClick = () => {
    setFirstName(firstNameInput);
    setLastName(lastNameInput);
  };

  const handleFirstNameChange = (e) => {
    setFirstNameInput(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastNameInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <div>
      <div className={styles.signContainer}>
        <div className={styles.inputs}>
          <p>SIGN UP</p>
          <input
            type="text"
            placeholder="First Name"
            className={styles.input}
            value={firstNameInput}
            onChange={handleFirstNameChange}
          /><br />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.input}
            value={lastNameInput}
            onChange={handleLastNameChange}
          /><br />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={emailInput}
            onChange={handleEmailChange}
          /><br />
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.input}
              value={passwordInput}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className={styles.toggleButton}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeSharp />}
            </button>
            <button onClick={handleEnterClick} className={styles.enterButton}>Enter</button>
          </div>
        </div>

        <div className={styles.color}>
          <h1>Welcome back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button onClick={handleSignInClick} className={styles.signInButton}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
