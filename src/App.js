import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import './App.css';


import Stories from "./containers/Stories/Stories";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import NewStory from "./containers/NewStory/NewStory";
import StoryWithComments from "./containers/StoryWithComments/StoryWithComments";

class App extends Component {
  render() {
    return (
        <Fragment>
          <header>
            <Toolbar/>
          </header>
          <main>
            <Container className="MainContainer">
              <Switch>
                <Route path='/' exact component={Stories} />
                <Route path='/stories/new' exact component={NewStory}/>
                <Route path='/stories/:id' exact component={StoryWithComments}/>
              </Switch>
            </Container>
          </main>
        </Fragment>
    );
  }
}

export default App;
