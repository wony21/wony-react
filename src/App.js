import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Card, Elevation, FormGroup } from "@blueprintjs/core";
import './App.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/normalize.css/normalize.css';
import { ALIGNMENT_BOTTOM } from '@blueprintjs/icons/lib/esm/generated/iconContents';


class App extends Component {
  render() {
    return (
      <div className="docs-root bp3-dark">
        <header className="App-header">
          <Card interactive={false} elevation={Elevation.TWO}>
              <h2>basic#base;</h2>
              <div className="bp3-input-group bp3-large">
                <span class="bp3-icon bp3-icon-user"></span>
                <input type="text" className="bp3-input bp3-round" placeholder="아이디를 입력하세요."></input>
              </div><br />
              <div className="bp3-input-group bp3-large">
                <span class="bp3-icon bp3-icon-lock .modifier"></span>
                <input type="password" className="bp3-input bp3-round" placeholder="비밀번호를 입력하세요."></input>
              </div><br />
              <Button className="bp3-intent-success bp3-large" fill={true}>로그인</Button>
              <a className="bp3-text-small" href="#">로그인이 안되세요?</a>
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
