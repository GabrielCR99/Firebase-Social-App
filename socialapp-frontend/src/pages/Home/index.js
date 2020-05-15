import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Axios from "axios";

import Scream from "../../components/Scream";

class Home extends Component {
  state = {
    screams: null,
  };

  componentDidMount() {
    Axios.get("/screams")
      .then((result) => {
        this.setState({
          screams: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let recentScreamMarkup = this.state.screams ? (
      this.state.screams.map((scream) => (
        <Scream key={scream.screamId} scream={scream}></Scream>
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
