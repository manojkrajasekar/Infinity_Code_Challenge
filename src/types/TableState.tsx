import Column from './Column';
import CoinDetail from './CoinDetail';
import { SortOrder } from './SortOrder';

export default interface TableState {
    error?: string;
    columns: Column[];
    data: CoinDetail[];
    pageNumber: number;
    pageSize: number;
    total: number;
    orderBy?: string;
    order?: SortOrder;
}