import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { initialAds, addAdAction } from "../../redux/actions/action";
import AddAd from "../../components/AddAd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 60,
    marginBottom: 60,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridList: {
    width: 950,
    height: 550,
  },
  gridListTile: {
    maxWidth: 310,
    minHeight: 240,
  },
  content: {
    height: 210,
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
  },
  body: {},
  image: {
    width: 268,
  },
  icon: {
    color: "white",
  },
}));

function Callboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { ads } = useSelector((state) => state.reducer);

  useEffect(() => {
    axios
      .get("https://simple-blog-api.crew.red/posts?_limit=7")
      .then((data) => {
        dispatch(initialAds(data.data));
      })
      .catch((err) => {
        console.log("Error!", err);
      });
  }, []);

  const addAd = (newAd) => {
    dispatch(addAdAction(newAd));
  };

  return (
    <div className={classes.container}>
      <AddAd onCreate={addAd} />
      <div className={classes.root}>
        <GridList cellHeight={100} spacing={10} className={classes.gridList}>
          {ads.map((ads) => (
            <GridListTile key={ads.id} className={classes.gridListTile}>
              <div className={classes.content}>
                <h2 className={classes.title}>{ads.title}</h2>
                <p className={classes.body}>{ads.body}</p>
              </div>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Callboard;
