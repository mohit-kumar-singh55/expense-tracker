import Details from "./components/Details/Details"
import { Grid } from "@material-ui/core";
import useStyles from "./appStyles";
import Main from "./components/Main/Main";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui";

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        {/* for mobile */}
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
