import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import ServiceToXmeme from "../services/Service.js";

/*
* Form component is to display a dialog to input all the detail before posting memes 
* and also shows the button required to be displayed on homepage.
*/

export default function FormComponent() {
  const startValue = { name: "", caption: "", url: "" };
  const [state, setState] = React.useState(startValue);
  const [open, setOpen] = React.useState(false);

  const submitMemes = () => {
    var finalValue = {
      name: state.name,
      caption: state.caption,
      url: state.url,
      id: state.id,
    };
    ServiceToXmeme.postMemes(finalValue);
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
      <div id="container">
        <div id="left">
          <p className="fontMe"> Meme Feed </p>
        </div>
        <div id="middle"></div>
        <div id="right">
          <button class="btn btn-3 btn-3e" onClick={handleClickOpen}>
           Post Meme &nbsp; ✒️
          </button>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={submitMemes}>
          <DialogTitle id="form-dialog-title">
            You got memes, bro? (Memes laaya?)
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              We are really thankful to you for the meme submission. (150 rupaya
              dega...) Fill all fields please!
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
              Submit 🚀
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
