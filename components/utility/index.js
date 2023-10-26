import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const checkUserSession = (callback) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      callback(user);
    } else {
      // No user is signed in.
      callback(null);
    }
  });
};
