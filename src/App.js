import "./App.css";
import { Typography, makeStyles, Box, Button, Avatar } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#cccccc",
    width: "100vw",
    minHeight: "100vh",
  },
  outerBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    height: "200px",
    background: "#ffffff",
    margin: "20px",
    borderRadius: "10px",
  },
  margin: {
    margin: "20px",
  },
  border: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: '1080px',  
    padding: "20px",
    borderRadius: "10px",
    background: "#cccccc",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  img: {
    width: "100px",
    height: "100px"
  }
});

function App() {
  let classes = useStyles();
  let [playerScore, setPlayerScore] = useState(0);
  let [comScore, setComScore] = useState(0);
  let [text, setText] = useState("Make A Choice");
  let [player, setPlayer] = useState("");
  let [computer, setComputer] = useState("");
  let [playerImg, setPlayerImg] = useState("");
  let [comImg, setComImg] = useState("");
  let list = ["Rock", "Paper", "Scissors"];
  let listImg = ['/images/rock2.png', '/images/paper2.jpeg', '/images/scissors2.png'];
  let handleClick = (playerChoice) => {
    setPlayer(list[playerChoice]);
    setPlayerImg(listImg[playerChoice]);

    let random = Math.floor(Math.random() * 3);
    setComputer(list[random]);
    setComImg(listImg[random]);

    if (playerChoice === random) {
      setText("It's A Tie");
    } else if (
      (list[playerChoice] === "Rock" && list[random] === "Scissors") ||
      (list[playerChoice] === "Paper" && list[random] === "Rock") ||
      (list[playerChoice] === "Scissors" && list[random] === "Paper")
    ) {
      setText("You Win!");
      setPlayerScore(playerScore + 1);
    } else {
      setText("You Loose!");
      setComScore(comScore + 1);
    }
  };

  let handleReset = () => {
    setPlayer("");
    setComputer("");
    setPlayerScore(0);
    setComScore(0);
    setComImg("");
    setPlayerImg("");
    setText("Make A Choice");
  };

  return (
    <div className={classes.root}>
      <Box className={classes.border}>
        <Typography variant="h2">Rock Paper Scissors</Typography>

        <Typography className={classes.margin} variant="h6">
          {text}
        </Typography>

        <Box className={classes.outerBox}>
          <Box className={classes.innerBox}>
            <Typography style={{margin: "10px" }} variant="h6">You: {playerScore}</Typography>
            {/* <Typography variant="h4">{player}</Typography> */}
            <Avatar alt={player} src={playerImg} className={classes.img} />
          </Box>
          <Box className={classes.innerBox}>
            <Typography style={{margin: "10px" }} variant="h6">Computer: {comScore}</Typography>
            {/* <Typography variant="h4">{computer}</Typography> */}
            <Avatar alt={computer} src={comImg} className={classes.img} />
          </Box>
        </Box>

        <Typography className={classes.margin} variant="h6">
          Choose One
        </Typography>

        <Box className={classes.outerBox}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={() => handleClick(0)}
          >
            Rock
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={() => handleClick(1)}
          >
            Paper
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={() => handleClick(2)}
          >
            Scissors
          </Button>
        </Box>

        <Button
          variant="contained"
          className={classes.margin}
          size="large"
          color="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </div>
  );
}

export default App;
