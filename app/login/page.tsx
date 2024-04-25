import { loginWithEmailAndPassword, signup } from './actions';

//TODO: UI will be updated with a proper layout

export default function LoginPage() {
  return (
    <>
      <form>
        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='email' required />
        <label htmlFor='password'>Password:</label>
        <input id='password' name='password' type='password' required />
        <button formAction={loginWithEmailAndPassword}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </>
  );
}
