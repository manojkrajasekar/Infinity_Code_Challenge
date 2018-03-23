import * as React from 'react';
import Dataformat  from '../interfaces/Dataformat';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Pagination from 'material-ui-pagination';
import './TableComponent.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

interface Istate {
    data: [ { id: string, name: string, symbol: string, rank: number, price_usd: number,
        price_btc: number, '24h_volume_usd': number,
        market_cap_usd: number, available_supply: number, total_supply: number,
       max_supply: number, percent_change_1h: number,
       percent_change_24h: number, percent_change_7d: number, last_updated: Date } ];
    num: number;
}

class TableComponent extends React.Component<Dataformat, Istate>  {
    constructor( props: Dataformat) {
        super(props);
        this.state = {
            data: this.props.data,
            num: 1
        };
    }

    //  sortBy(key: number) {
    //    this.setState ({
    //      data: this.state.data.sort((a, b) => a < b )
    //    })
    //  }
    
    render() {
        return (
            <MuiThemeProvider>
                <div className="TableAlignment">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>name</TableHeaderColumn>
                                <TableHeaderColumn>Symbol</TableHeaderColumn>
                                <TableHeaderColumn>rank</TableHeaderColumn>
                                <TableHeaderColumn>price_btc</TableHeaderColumn>
                                <TableHeaderColumn>24h_volume_usd</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.props.data.map((element) => 
                                (
                                    <TableRow>
                                        <TableRowColumn>{element.id}</TableRowColumn>
                                        <TableRowColumn>{element.name}</TableRowColumn>
                                        <TableRowColumn>{element.symbol}</TableRowColumn>
                                        <TableRowColumn>{element.rank}</TableRowColumn>
                                        <TableRowColumn>{element.price_usd}</TableRowColumn>
                                        <TableRowColumn>{element.price_btc}</TableRowColumn>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    <span className="Paginator">
                        <Pagination
                            total={20}
                            display={7}
                            current={4}
                            onChange={num => this.setState({ num })}
                        />
                    </span>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TableComponent;