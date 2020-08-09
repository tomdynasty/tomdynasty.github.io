import { RECEIVE_DRUG_STORES, RECEIVE_DRUG_STORES_ERROR } from './Types';
import callGetDrugStores from '../../Api/DrugStore';
import store from '../store';

export const receiveDrugStores = (json) => (
  {
    type: RECEIVE_DRUG_STORES,
    list: json,
  }
);

export const receiveDrugStoresError = (errorCode, errorText) => (
  {
    type: RECEIVE_DRUG_STORES_ERROR,
    errorCode,
    errorText,
  }
);

export const dispatchReceiveDrugStores = () => (
  () => (
    callGetDrugStores()
      .then((json) => {
        if (json) {
          // json.forEach((item) => (
          //   item.show = false
          // ));
          store.dispatch(receiveDrugStores(json));
        }
      })
      .catch((error) => {
        store.dispatch(receiveDrugStoresError(error.response.status, error.response.statusText));
      })
  )
);
