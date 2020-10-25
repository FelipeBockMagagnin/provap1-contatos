import React from "react";
import ContactForm from "../ContactForm";
import ContactTable from "../ContactTable";
import { ContactContextProvider } from "../../Components/ContactContextProvider";

export default function ContactView() {
  return (
    <ContactContextProvider>
      <div>
        <ContactForm />
        <ContactTable />
      </div>
    </ContactContextProvider>
  );
}
