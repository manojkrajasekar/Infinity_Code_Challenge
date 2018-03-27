import Column from './Column';
import CoinDetail from './CoinDetail';
import { SortOrder } from './SortOrder';

export default interface TableProps {
    columns: Column[];
    data: CoinDetail[];

    pageNumber?: number;
    pageSize?: number;
    total?: number;
    onPageChange?: Function;
    
    orderBy?: string;
    order?: SortOrder;
    onSort?: Function;
}