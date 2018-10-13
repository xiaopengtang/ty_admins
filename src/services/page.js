import request from '@/utils/request';
import { stringify } from 'qs';

export default param => {
  return {
    curl(url) {
      const json = {
        page: param.currentPage,
        size: 10,
      };
      return pager(request(`${url}?${stringify(json)}`), param);
    },
  };
};

export const pager = (requestModel, param) =>
  new Promise(resolve => {
    let pagination = {
      current: param.currentPage || 1,
      pageSize: 10,
      total: 0,
    };
    requestModel
      .then(res => {
        const data = res && res.data;
        const list = data.colList || [];
        pagination.total = data.total || 0;
        return resolve({
          list,
          pagination,
        });
      })
      .catch(e =>
        resolve({
          list: [],
          pagination,
        })
      );
  });
