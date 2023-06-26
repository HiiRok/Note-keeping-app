import React from 'react';
import SignIn from './SignIn';
import Login from './Login';
import CustomPage from './Custompage';
import { Routes ,Route} from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import "./index.css";
import useLocalStorage from 'use-local-storage';
import { MdBrightness4 } from 'react-icons/md';


const App = () => {

  const [theme,setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className='app' data-theme={theme}>
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/custompage" element={ <ProtectedRoute> <CustomPage /> </ProtectedRoute> } />
    </Routes>
    </AuthContextProvider>
    <div className='theme-toggle'>
    
    <i onClick={switchTheme}><MdBrightness4 size={30} /></i>
    </div>
    </div>    
  );
};

export default App;
