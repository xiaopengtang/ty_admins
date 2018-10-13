import { queryList, check, del } from '@/services/collect';
export default {
  namespace: 'collect',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const res = yield call(queryList, payload);
      yield put({
        type: 'updateList',
        payload: res,
      });
    },
    *check({ payload }, { call }) {
      const res = yield call(check, payload);
      return res && res.success;
    },
    *del({ payload }, { call }) {
      const res = yield call(del, payload);
      return res && res.success;
    },
  },
  reducers: {
    updateList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
