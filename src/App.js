import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Movies} />
                    <Route path="/:id" component={MovieDetails} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
