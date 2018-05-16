import * as React from 'react';

interface IHomeProps {
  firstname: string;
  lastname: string;
}

interface IHomeState {
  sayBye: boolean;
}

export class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      sayBye: true
    };
  }

  public handleClick = () => this.setState({ sayBye: !this.state.sayBye });

  public render() {
    return (
      <React.Fragment>
        {this.state.sayBye ? 'Hi' : 'Bye'} {this.props.firstname}{' '}
        {this.props.lastname}!
        <button onClick={this.handleClick}>
          {!this.state.sayBye ? 'Say Hi' : 'Say Bye'}
        </button>
      </React.Fragment>
    );
  }
}
