import { TableActions } from '../../types/TableActions';
import { SortOrder } from '../../types/SortOrder';
import CoinDetail from '../../types/CoinDetail';
const Coins = require('../../model/Coins');
const Columns = require('../../model/Columns');

const getData = (pageNumber?: number, pageSize?: number, orderBy?: string, order?: SortOrder) => {
    let returnData = [ ...Coins];

    // Sort data
    if ((orderBy !== null && orderBy !== undefined) &&
        (order !== null && order !== undefined)) {
            let returnOrder = order ? 1: -1;

            returnData = 
                returnData.sort((a: CoinDetail, b: CoinDetail): number => {
                    if ( a[orderBy || ''] === b[orderBy || ''] ) {
                        return 0;
                    } else {
                        return a[orderBy || ''] > b[orderBy || ''] ? returnOrder : (-1 * returnOrder);
                    }
                });
    }

    // Paginate data
    if ((pageNumber !== null && pageNumber !== undefined) &&
        (pageSize !== null && pageSize !== undefined)) {
        let start = ((pageSize || 0) * (pageNumber || 0)) - 1;
        let end = pageSize;

        return returnData.splice(start, end);
    }

    return returnData;
};

const LoadData = (pageNumber: number, pageSize: number) => {
    return {
        type: TableActions.LOADDATA,
        payload: {
            data: getData(pageNumber, pageSize),
            columns: [ ...Columns ],
            pagination: {
                total: Coins.length
            }
        }
    };
};

const ChangePage =  (pageNumber: number, pageSize: number) => {
    return {
        type: TableActions.CHANGEPAGE,
        payload: { 
            data: getData(pageNumber, pageSize),
            pagination: {
                pageNumber, 
                pageSize 
            }
        }
    };
};

const Sort = (orderBy: string, order: SortOrder, pageNumber?: number, pageSize?: number) => {
    return {
        type: TableActions.SORT,
        payload: { 
            data: getData(pageNumber, pageSize, orderBy, order),
            sort: {
                orderBy, 
                order
            }
         }
    };
};

export {
    LoadData,
    ChangePage,
    Sort
};