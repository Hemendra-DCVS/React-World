
import React, { createContext, useContext, useState, useEffect } from 'react';
import {auth, db} from "./Cloud Firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);



export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState('');
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed up 
     
      navigate('/productlist'); // Redirect to Login page
      setFormData({}); // Clear the form fields
      toast.success('Signed up')
    })
    .catch((error) => {
      const errorCode = error.code;
      toast.error(errorCode)
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        navigate('/ProductList'); // Redirect to ProductList page
        setFormData({}); // Clear the form fields
        toast.success('Logged in')
    })
    .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode)
  });
  };

  useEffect(() => {
    //before rendering the page, get the user status using firebase listener,
    // if user is present then store user in a state variable 
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setLoading(false);
        if(currentUser) setUser(currentUser)
        else {setUser(null)}
    });
    return ()=>{
        if(unsubscribe) unsubscribe();
    } 
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirect the user to the login page after logout
      toast.warning('Logged out');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ formData, handleChange, handleRegister, handleLogin, handleLogout, errors, user, setUser }}>
      {!loading &&
      children}
    </AuthContext.Provider>
  );
};
