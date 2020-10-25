import React, { useContext } from "react";
import { ContactContext } from "../../Components/ContactContextProvider";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ContactTable() {
  const [state, dispatch] = useContext(ContactContext);
  const delContact = id => {
    dispatch({
      type: "DEL_CONTACT",
      payload: id
    });
  };

  const onRemoveUser = () => {
    if (state.contacts[0] !== undefined) {
      // Exclui o primeiro regisTableRowo
      const firstId = state.contacts[0].id;
      delContact(firstId);
    }
    else {
      alert("Não existem mais contatos");
    }
  };

  const rows = state.contacts.map(contact => (
    <TableRow key={contact.id}>
      <TableCell>{contact.id}</TableCell>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.email}</TableCell>
    </TableRow>
  ));

  const classes = useStyles();

  return (
    <Paper elevation={5} style={{display: "flex", alignItems: 'center', flexDirection: 'column', margin: 20}}>
      <p>Listagem de Contatos</p>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>        
      </Table>
      <Button variant="contained" color="secondary" style={{margin: 30}} onClick={onRemoveUser}>Remover</Button>
    </Paper>
  );
}