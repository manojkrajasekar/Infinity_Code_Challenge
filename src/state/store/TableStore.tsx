import {createStore, applyMiddleware} from 'redux';
import { TableReducer } from '../reducers/TableReducer';
import logger from 'redux-logger';

export const store = createStore(TableReducer, applyMiddleware(logger));