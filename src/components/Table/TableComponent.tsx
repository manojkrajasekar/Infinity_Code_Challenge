import * as React from 'react';
import './TableComponent.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Pagination from 'material-ui-pagination';
import ColumnHeaderLabel from './ColumnHeaderLabel/ColumnHeaderLabel';

import TableProps from '../../types/TableProps';
import TableState from '../../types/TableState';
import { SortOrder } from '../../types/SortOrder';
import Column from '../../types/Column';
import { DatePicker } from 'material-ui';

class TableComponent extends React.Component<TableProps, TableState>  {

    constructor(props: TableProps) {
        super(props);

        this.onColumnClick = this.onColumnClick.bind(this);
        this.onPageChange = this.onPageChange.bind(this);

        this.state = {
            columns: props.columns,
            data: props.data || [],

            pageNumber: props.pageNumber || 1,
            pageSize: props.pageSize || 10,
            total: props.total || 0,

            orderBy: props.orderBy || '',
            order: props.order || SortOrder.ASC
        };
    }

    componentWillReceiveProps(props: TableProps) {
        this.setState({
            columns: props.columns,
            data: props.data || [],

            pageNumber: props.pageNumber || 1,
            pageSize: props.pageSize || 10,
            total: props.total || 0,

            orderBy: props.orderBy || '',
            order: props.order || SortOrder.ASC
        });
    }

    onColumnClick(columnId: string, order: SortOrder) {
        const onSort = this.props.onSort || null;
        if (onSort) {
            onSort(columnId, order);
        }
    }

    onPageChange(pageNumber: number) {
        const onPageChange = this.props.onPageChange || null;
        if (onPageChange) {
            onPageChange(pageNumber, this.state.pageSize);
        }
    }

    processData(column: Column, data: string) {
        switch(column.type) {
            case 'currency':
                return column.currency_symbol + data;
            case 'date':
                let val;
                try {
                    val = new Date(parseFloat(data));
                } catch(e) {
                    val = undefined;
                }
                return <DatePicker value={val} container="inline" />;
            default:
                return data;
        }
    }

    render() {
        const columns = this.state.columns;
        if (columns.length === 0) {
            return (
                <div>
                    No data
                </div>
            );
        }

        const tableColumn = this.state.columns.map(col => {
            return (
                <TableHeaderColumn key={col.id}>
                    <ColumnHeaderLabel
                        id={col.id}
                        label={col.label}
                        isOrderBy={col.id === this.state.orderBy}
                        order={this.state.order}
                        onClick={this.onColumnClick}
                    />
                </TableHeaderColumn>
            );
        });
        
        let tableBody;
        if (this.state.data.length > 0) {
            tableBody = 
                this.state.data.map(row =>
                    (
                        <TableRow key={row.id}>
                            {
                                this.state.columns.map((col) => {
                                    return (
                                        <TableRowColumn key={row.id + '-' + col.id}>
                                            {this.processData(col, row[col.id])}
                                        </TableRowColumn>
                                    );
                                })
                            }
                        </TableRow>   
                    ));
        } else {
            tableBody = (
                <TableRow>
                    <TableRowColumn colSpan={this.state.columns.length}>
                        No Data
                    </TableRowColumn>
                </TableRow>
            );
        }

        return (
            <MuiThemeProvider>
                <div className="table-component">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {tableColumn}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableBody}
                        </TableBody>
                    </Table>
                    <Pagination
                        total={Math.floor(this.state.total/ this.state.pageSize)}
                        current={this.state.pageNumber}
                        display={10}
                        onChange={this.onPageChange}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TableComponent;