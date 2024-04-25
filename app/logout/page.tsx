import { signOut } from './actions';

//TODO: This is temp! Remove this when we have a proper layout

export default function LogoutPage() {
  return (
    <form>
      <button formAction={signOut}>Log Out</button>
    </form>
  );
}
