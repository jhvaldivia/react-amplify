import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';

const User = () => {
  const { instance } = useMsal();
  const [name, setName] = useState(null);

  const activeAccount = instance.getActiveAccount();
  useEffect(() => {
    if (activeAccount) {
      console.log('Current user: ', activeAccount);
      setName(activeAccount.name);
    } else {
      setName(null);
    }
  }, [activeAccount]);

  if (name) {
    return <h6>Welcome, {name}</h6>;
  } else {
    return null;
  }
};

export default User;
