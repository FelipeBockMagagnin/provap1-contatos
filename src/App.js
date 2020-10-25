import React from "react";
import ContactView from "./Pages/ContactView";
import AppBar from '@material-ui/core/AppBar';
import 'typeface-roboto';

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <h1>Gestão de contatos</h1>
      </AppBar>
      <ContactView />
    </div>
  );
}
export default App;