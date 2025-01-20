import React from 'react';

type State = {
  today: string;
  clockName: string;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
    clockName: 'Clock-0',
  };

  timerTimeId = 0;

  timerNameId = 0;

  timerConsoleId = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  //This code starts a timer

  componentDidMount(): void {
    this.timerTimeId = window.setInterval(() => {
      this.setState({ today: `${new Date().toUTCString().slice(-12, -4)}` });
    }, 1000);

    this.timerConsoleId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }, 1000);

    this.timerNameId = window.setInterval(() => {
      this.setState(prevState => {
        const newClockName = this.getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newClockName}`);

        return { clockName: newClockName };
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTimeId);
    window.clearInterval(this.timerNameId);
    window.clearInterval(this.timerConsoleId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
