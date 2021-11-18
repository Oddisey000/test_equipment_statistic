import {store} from '../root.store';

import { GET_ORDER_NUMBERS } from "./app-reducer.types";
import { GetOrdersInfo } from "./app-reducer.utils";

export const getOrdersFromDB = () => ({
  type: GET_ORDER_NUMBERS,
  payload: GetOrdersInfo(store.getState())
});