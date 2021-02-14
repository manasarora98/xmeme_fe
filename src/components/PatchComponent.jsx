import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useEffect } from "react";
import ServiceToXmeme from "../services/Service.js";

/*
* PatchComponent is to display dialog to edit an already submitted meme on the go on the feed.
*/

export default function PatchComponent(arg) {
  const startValue = { id: "", name: "", caption: "", url: "" };
  const [state, setState] = React.useState(startValue);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchMeme(arg.id);
  }, [arg.id]);

  const fetchMeme = (id) => {
    ServiceToXmeme.fetchMemeById(id).then((res) => {
      setState(res.data);
    });
  };

  const submitUpdatedMeme = () => {
    var finalValue = {
      id: state.id,
      name: state.name,
      caption: state.caption,
      url: state.url,
    };
    ServiceToXmeme.updateMeme(finalValue.id, finalValue);
    setOpen(false);
  };

  const inputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button class="edit" onClick={handleClickOpen}>
        Edit 📝
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={submitUpdatedMeme}>
          <DialogTitle id="form-dialog-title">
            Update memes, bro, seriously?
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Woah, you are editing your meme post? (Ooohh oohhhh oohhhh)
            </DialogContentText>
          </DialogContent>
          <div className="form-elements">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your name"
              name="name"
              id="name"
              value={state.name}
              onChange={inputChange}
              required
              disabled
            />

            <label for="caption">Caption:</label>
            <input
              name="caption"
              value={state.caption}
              onChange={inputChange}
              type="text"
              class="form-control"
              placeholder="Enter caption"
              id="caption"
              required
            />

            <label for="url">Url:</label>
            <input
              name="url"
              value={state.url}
              onChange={inputChange}
              type="url"
              class="form-control"
              placeholder="Enter url"
              id="url"
              required
            />
          </div>

          <DialogActions>
            <button onClick={handleClose} class="btn btn-secondary">
              Cancel ↩️
            </button>
            <button type="submit" class="btn btn-primary">
              Update 👌
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
