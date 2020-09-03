import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { getAds } from "../../redux/actions/action";
import AddAd from "../../components/AddAd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridList: {
    width: 830,
    height: 450,
  },
  gridListTile: {
    maxWidth: 270,
    minHeight: 200,
  },
  content: {
    height: 190,
    borderRadius: "15px",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    margin: 0,
  },  
  image: {
    width: 268,
  },
  icon: {
    color: "white",
  },
}));

function Callboard() {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAds);
    axios
      .get("https://simple-blog-api.crew.red/posts?_limit=7")
      .then((data) => {
        setState(data.data);
      })
      .catch((err) => {
        console.log("Error!", err);
      });
  }, []);

  function addAd(title) {
    setState(state.concat([{
      title,
    }]))
  }

  return (
    <div className={classes.container}>
    <AddAd onCreate={addAd} />
      <div className={classes.root}>
        <GridList cellHeight={100} spacing={10} className={classes.gridList}>
          {state.map((ads) => (
            <GridListTile
              key={ads.id}
              cols={ads.featured ? 2 : 1}
              rows={ads.featured ? 2 : 1}
              className={classes.gridListTile}
            >
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

  // const IDS = {
  //   TITLE: "title",
  //   CONTENT: "content",
  // };

  // const [state, setState] = useState({
  //   [IDS.TITLE]: "",
  //   [IDS.CONTENT]: "",
  // });

  // console.log("state", state);

  // const onChange = (event) => {
  //   const { id, value } = event.target;

  //   setState((currentState) => ({
  //     ...currentState,
  //     [id]: value,
  //   }));
  // };

  // const addAds = (event) => {
  //   event.preventDefault();
  //   alert("Ваше оголошення додано");
  //   setState({ [IDS.TITLE]: "", [IDS.CONTENT]: "" });
  // };

// <h1>Дошка оголошень</h1>
//       <Button variant="contained" color="primary">
//         Додати оголошення
//       </Button>
//       <div className={classes.formContainer}>
//         <form onSubmit={addAds}>
//           <input
//             id={IDS.TITLE}
//             value={state[IDS.TITLE]}
//             onChange={onChange}
//             placeholder="Назва..."
//           />
//           <input
//             id={IDS.CONTENT}
//             value={state[IDS.CONTENT]}
//             onChange={onChange}
//             placeholder="Опис..."
//           />
//           <button type="submit">Створити оголошення</button>
//         </form>
//       </div>

// <div className={classes.root}>
//         <GridList cellHeight={100} spacing={5} className={classes.gridList}>
//           {state.map((ads) => (
//             <GridListTile
//               key={ads.id}
//               cols={ads.featured ? 2 : 1}
//               rows={ads.featured ? 2 : 1}
//               className={classes.gridListTile}
//             >
//               <img src={image} alt={ads.title} className={classes.image} />
//               <GridListTileBar
//                 title={ads.title}
//                 titlePosition="bottom"
//                 actionIcon={
//                   <IconButton
//                     aria-label={`star ${ads.title}`}
//                     className={classes.icon}
//                   >
//                     <FavoriteBorderIcon />
//                   </IconButton>
//                 }
//                 actionPosition="right"
//                 className={classes.titleBar}
//               />
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>

//   const [ads, setAds] = useState([
//     {
//       id: 1,
//       title: "Title 1",
//       author: "author fdbdnd",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Title 2",
//       author: "author fdbdnd",
//       featured: true,
//     },
//     {
//       id: 3,
//       title: "Title 3",
//       author: "author fdbdnd",
//       featured: true,
//     },
//     {
//       id: 4,
//       title: "Title 4",
//       author: "author fdbdnd",
//       featured: true,
//     },
//     {
//       id: 5,
//       title: "Title 5",
//       author: "author fdbdnd",
//       featured: true,
//     },
//     {
//       id: 6,
//       title: "Title 6",
//       author: "author fdbdnd",
//       featured: true,
//     },
//     {
//       id: 7,
//       title: "Title 7",
//       author: "author fdbdnd",
//       featured: true,
//     },
//   ]);
