
// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Main from './Main3';
// import Sign from './Sign';
// import Stayses from './Stayses';
// import Attractions from './Tickets';
// import Login from './Login';
// import './App.css'; // Использование обычного CSS файла

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       <div className='navbar'>
//         <div className='logo'>
//           <Link to='/'>MyApp</Link>
//         </div>
//         <div className={`links ${menuOpen ? 'open' : ''}`}>
//           <div className='links1'>
//             <Link to='Stayses' onClick={() => setMenuOpen(false)}>STAYS</Link>
//             <Link to='/' onClick={() => setMenuOpen(false)}>FLIGHTS</Link>
//             <Link to='/Attractions' onClick={() => setMenuOpen(false)}>ATTRACTIONS</Link>
//           </div>
//           <div className='login'>
//             {firstName && lastName ? (
//               <span>{firstName} {lastName}</span>
//             ) : (
//               <>
//                 <Link to='/Sign/*' onClick={() => setMenuOpen(false)}>SIGN</Link>
//                 <button>Login</button>
//               </>
//             )}
//           </div>
//         </div>
//         <div className='hamburger' onClick={toggleMenu}>
//           &#9776;
//         </div>
//       </div>
//       <Routes>
//         <Route path='/' element={<Main />} />
//         <Route path='Stayses' element={<Stayses />} />
//         <Route path='Attractions' element={<Attractions />} />
//         <Route path='/Sign/*' element={<Sign setFirstName={setFirstName} setLastName={setLastName} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main3';
import Sign from './Sign';
import Stayses from './Stayses';
import Attractions from './Tickets';
import Login from './Login';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>MyApp</Link>
        </div>
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <div className='links1'>
            <Link to='/Stayses' onClick={() => setMenuOpen(false)}>STAYS</Link>
            <Link to='/' onClick={() => setMenuOpen(false)}>FLIGHTS</Link>
            <Link to='/Attractions' onClick={() => setMenuOpen(false)}>ATTRACTIONS</Link>
          </div>
          <div className='login'>
            {firstName && lastName ? (
              <span>{firstName} {lastName}</span>
            ) : (
              <>
                <Link to='/Sign' onClick={() => setMenuOpen(false)}>SIGN</Link>
                {/* <button onClick={() => navigate('/Login')}>Login</button> */}
              </>
            )}
          </div>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Stayses' element={<Stayses />} />
        <Route path='/Attractions' element={<Attractions />} />
        <Route path='/Sign' element={<Sign setFirstName={setFirstName} setLastName={setLastName} />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
