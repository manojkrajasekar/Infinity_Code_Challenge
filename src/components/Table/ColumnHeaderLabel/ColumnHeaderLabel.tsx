import * as React from 'react';
import { SortOrder } from '../../../types/SortOrder';

import './ColumnHeaderLabel.css';

interface ColumnHeaderLabelProps {
    id: string;
    label: string;
    isOrderBy: boolean;
    order?: SortOrder;
    onClick: Function;
}

interface ColumnHeaderLabelState {
    id: string;
    label: string;
    isOrderBy: boolean;
    order?: SortOrder;
}

class ColumnHeaderLabel extends React.Component<ColumnHeaderLabelProps, ColumnHeaderLabelState> {
    constructor(props: ColumnHeaderLabelProps) {
        super(props);
        this.onColumnHeaderClicked = this.onColumnHeaderClicked.bind(this);

        this.state = {
            id: props.id,
            label:props.label,
            isOrderBy: props.isOrderBy,
            order: props.order
        };
    }

    componentWillReceiveProps(props: ColumnHeaderLabelProps) {
        this.setState({
            id: props.id,
            label:props.label,
            isOrderBy: props.isOrderBy,
            order: props.order
        });
    }
    
    render() {
        return (
            <span className="column-header" onClick={this.onColumnHeaderClicked}>
                {this.state.label}
                {
                    this.state.isOrderBy
                        ? (
                            this.state.order === SortOrder.ASC
                                ? <i className="material-icons">arrow_downward</i>
                                : <i className="material-icons">arrow_upward</i>
                        ) 
                        : <span />
                }
            </span>
        );
    }

    private onColumnHeaderClicked<span>(event: React.MouseEvent<span>) {
        event.preventDefault();
        this.props.onClick(this.props.id, !this.state.order);
    }
}

export default ColumnHeaderLabel;