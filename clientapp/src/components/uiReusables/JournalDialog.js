import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import JournalButton from '../uiReusables/JournalButton';
import { strings } from '../../strings';

export default function JournalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    console.log('send form data to server')
  }

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
