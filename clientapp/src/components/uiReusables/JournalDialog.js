import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import JournalButton from '../uiReusables/JournalButton';
import { strings } from '../../strings';
import axios from 'axios';

export default function JournalDialog() {
  const [open, setOpen] = React.useState(false);
  const [journalName, setJournalName] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // TODO: Add validation for journal name (no empty strings, not more than 255 characters, strings and numbers only)
  // TODO: close the dialog when the button 'create' is clicked
  // TODO: show new list items in the list view (how to update the list items without reloading (visibly?) the page?)
  const handleCreate = () => {
    // validate if the journal name is not empty
    if (journalName.length === 0) {
      setErrorMessage('Journal name cannot be empty');
      return;
    }

    const data = { JournalName: journalName };
    axios.post('http://localhost:4400/journals/create', data)
        .then(response => {
            console.log(response);
            // Handle success or navigation to another page
        })
        .catch(error => console.log('error ', error));
      setOpen(false);
  };


  return (
    <div>
      <JournalButton variant="outlined" onClick={handleClickOpen} btntext={'+'}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{strings.journalCreateDialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Journal Name"
            type="string"
            fullWidth
            variant="standard"
            value={journalName}
            onChange={ (e) => {
              setJournalName(e.target.value);
              setErrorMessage('');
            }}
          />
        {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{strings.buttonCancel}</Button>
          <Button onClick={handleCreate}>{strings.butonCreate}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
