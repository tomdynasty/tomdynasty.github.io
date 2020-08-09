import { notification } from 'antd';
import { RECEIVE_DRUG_STORES, RECEIVE_DRUG_STORES_ERROR } from '../Action/Types';

const drugStoresInitState = {
  list: [],
  errorCode: 0,
  errorText: '',
};

const drugStores = (state = drugStoresInitState, action) => {
  switch (action.type) {
    case RECEIVE_DRUG_STORES:
      return {
        ...state,
        list: action.list,
      };
    case RECEIVE_DRUG_STORES_ERROR:
      return {
        ...state,
        errorCode: action.errorCode,
        errorText: notification.error({
          message: '取得藥局清單失敗',
          description: action.errorText,
        }),
      };
    default:
      return state;
  }
};

export default drugStores;
