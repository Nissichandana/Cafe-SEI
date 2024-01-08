
import { useState } from "react";
import styles from './AuthPage.module.css'
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";

function AuthPage({setUser}) {
  const [ showLogin, setShowLogin ] = useState(true);
  return (
    <main className={styles.AuthPage}>
      <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      {showLogin ? <LoginForm setUser={setUser} /> : (
      <SignUpForm setUser={setUser} />
      
      )}
    </main>
  );
}

export default AuthPage;
