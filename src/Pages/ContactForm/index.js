import React, { useContext } from "react";
import _ from "lodash";
import { ContactContext } from "../../Components/ContactContextProvider";
import { useForm } from 'react-hook-form'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function ContactForm() {
  const { register, handleSubmit, watch, reset } = useForm()

  const [, dispatch] = useContext(ContactContext);
  const onAddContact = () => {
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id: _.uniqueId(10),
        name: watch('nome'),
        email: watch('email')
      }
    });

    reset()
  };

  return (
    <Paper elevation={5} style={{ padding: 10, margin: 20 }}>
      <form onSubmit={handleSubmit(onAddContact)} style={{ display: "flex", alignItems: 'center', flexDirection: 'column'}}>
        <p>Adicionar Novo Contato</p>

        <TextField label="Nome *" type="text" name="nome" inputRef={register({ required: true })} />
        <TextField label="Email *" type="text" name="email" inputRef={register({ required: true })} />

        <Button variant="contained" color="primary" type="submit" style={{margin: 20}}>Novo Contato</Button>
      </form>
    </Paper>

  );
}
export default ContactForm;