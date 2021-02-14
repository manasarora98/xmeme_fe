import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

/*
* HeartFavouriteComponent is to display the functionality of Like(Heart) for each post(Presently not actively stored).
*/

export default function HeartFavouriteComponent() {
  return (
    <div
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checked"
          />
        }
      />
    </div>
  );
}
