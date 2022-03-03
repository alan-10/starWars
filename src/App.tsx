import React from 'react';
import AppRoutes from './routes/Routes'
import StyleGlobal from './GlobalStyle';

import { ContextProvider } from './contextApi/userContext'

function App() {
  return (
    <div className="App">
      <ContextProvider>
          <AppRoutes />
      </ContextProvider>
      <StyleGlobal />
    </div>
  );
}

export default App;
