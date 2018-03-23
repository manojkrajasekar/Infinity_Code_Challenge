import * as React from 'react';
import TableComponent from '../Table/TableComponent';
import './LandingPage.css';
var CoinsData = require('../../model/Coins.json');

class LandingPage extends React.Component {
  // constructor(props: any){
  //   super(props);

  //   this.state = {
  //     CoinsData: CoinsData
  //   };

  //   this.sortBy = this.sortBy.bind(this);
  // }

  // sortBy(key: number) {
  //   this.setState ({
  //     CoinsData: CoinsData.sort( (a:number, b:number) => a < b)
  //   })
  // }
  render() {
    return (
      <div>
        <div className="Summary">
          CryptoCurrency Details
        </div>
        <div className="App">
          <TableComponent
            data={CoinsData}
           // sortBy={this.sortBy}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
