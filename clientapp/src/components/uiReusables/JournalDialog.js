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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleCreate = () => {
    const data = { JournalName: journalName };
    axios.post('http://localhost:4400/journals/create', data)
        .then(response => {
            console.log(response);
            // Handle success or navigation to another page
        })
        .catch(error => console.log('error ', error));
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
            onChange={(e) => setJournalName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{strings.buttonCancel}</Button>
          <Button onClick={handleCreate}>{strings.butonCreate}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
