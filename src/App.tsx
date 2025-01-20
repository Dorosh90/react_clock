import './App.scss';
import React from 'react';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock />}
      </div>
    );
  }
}
