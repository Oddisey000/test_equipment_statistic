import {store} from '../root.store';

import { 
  GET_ORDER_NUMBERS,
  GET_EQUIPMENT_LIST
} from "./app-reducer.types";

import { 
  GetOrdersInfo,
  GetEquipmentInfo
} from "./app-reducer.utils";

export const getOrdersFromDB = () => ({
  type: GET_ORDER_NUMBERS,
  payload: GetOrdersInfo(store.getState())
});

export const getEquipmentList = (request) => ({
  type: GET_EQUIPMENT_LIST,
  payload: GetEquipmentInfo(request)
});