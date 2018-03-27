import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import TableProps from '../../types/TableProps';
import TableState from '../../types/TableState';

import TableComponent from '../Table/TableComponent';
import * as TableActions from '../../state/actions/TableActions';

import './App.css';

interface StateProps {
  table: TableProps;
}

function mapStateToProps(state: TableState) {
  return {
    table: state
  };
}

const actions = {
  loadData: TableActions.LoadData,
  onPageChange: TableActions.ChangePage,
  onTableSort: TableActions.Sort
};

interface DispatchProps {
  loadData: typeof TableActions.LoadData;
  onPageChange: typeof TableActions.ChangePage;
  onTableSort: typeof TableActions.Sort;
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    ...bindActionCreators({ ...actions }, dispatch)
  };
}

class App extends React.Component<StateProps & DispatchProps, any> {

  componentWillMount() {
    this.props.loadData(1, 10);
  }

  render() {
    const { columns, data, total, pageNumber, pageSize, orderBy, order } = this.props.table;

    return (
      <div>

        <div className="Summary">
          CryptoCurrency Details
        </div>

        <div className="App">
          <TableComponent 
            columns={columns} 
            data={data}
            pageNumber={pageNumber}
            pageSize={pageSize}
            orderBy={orderBy}
            order={order}

            onPageChange={this.props.onPageChange}
            onSort={this.props.onTableSort}
            total={total}
          />
        </div>
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);