import { TableActions } from '../../types/TableActions';
import TableState from '../../types/TableState';

const defaultTableState: TableState = {
	columns: [],
	data: [],
	
	pageNumber: 1,
	pageSize: 10,
	total: 0
};

interface Actions {
	type: TableActions;
	payload: any;
}

// const processIssues = (issues) => {
// 	return issues.map(issue => {

// 		issue.body = issue.body.substring(0, 140) + (issue.body.length > 140 ? `...` : ``);
// 		issue.created_at = utils.formatDate(issue.created_at);
// 		issue.updated_at = utils.formatDate(issue.updated_at);

// 		return issue;
// 	})
// }

export const TableReducer = (state = defaultTableState, action: Actions) => {
	switch (action.type) {
		case TableActions.LOADDATA:
			return { 
				...state, 
				data: action.payload.data, 
				columns: action.payload.columns,
				total: action.payload.pagination.total
			};
		case TableActions.CHANGEPAGE:
            return { ...state, data: action.payload.data, ...action.payload.pagination };
        case TableActions.SORT:
			return { ...state, data: action.payload.data, ...action.payload.sort };
		default:
			return state;
	}
};