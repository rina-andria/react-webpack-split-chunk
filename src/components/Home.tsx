import * as React from 'react';

interface HomeProps {
  firstname: string;
  lastname: string;
}

interface HomeState {
  sayBye: boolean;
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      sayBye: true
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.sayBye ? 'Hi' : 'Bye'} {this.props.firstname}{' '}
        {this.props.lastname}!
        <button onClick={() => this.setState({ sayBye: !this.state.sayBye })}>
          {!this.state.sayBye ? 'Say Hi' : 'Say Bye'}
        </button>
      </React.Fragment>
    );
  }
}
