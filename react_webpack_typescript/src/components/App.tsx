import * as React from "react";
import * as _ from "lodash";
import Hello from "./Hello";

export interface AppProps { welcome: string; }

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        {console.log(_.findIndex([1,2,3], (a) => a === 2))}
        {this.props.welcome} <br />
        <Hello compiler="TypeScript" framework="React!" />
      </div>

    );
  }
}

export default App;
