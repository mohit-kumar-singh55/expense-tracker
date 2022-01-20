import Details from "./components/Details/Details"
import { Grid } from "@material-ui/core";
import useStyles from "./appStyles";
import Main from "./components/Main/Main";

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expenses" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
