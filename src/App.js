import './App.css';

// MSAL imports
import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

import { loginRequest } from './authConfig';
import User from './ui-components/User';

function App({ pca }) {
  return (
    <MsalProvider instance={pca}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
      >
        <User />
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
}

export default App;
