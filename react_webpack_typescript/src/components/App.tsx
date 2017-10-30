import * as React from "react";

import Hello from "./Hello";

export interface AppProps { welcome: string; }

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        {this.props.welcome} <br />
        <Hello compiler="TypeScript" framework="React!" />
      </div>

    );
  }
}

export default App;
