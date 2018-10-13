import { stringify } from 'qs';
import request from '@/utils/request';
import $page from './page';
// 获取列表
export const queryList = param => {
  param = param || {};
  return $page(param).curl('/userManage/getUserList');
};
// 审核
// export const check = param => {
//   param = param || {};
//   return request(`userManage/deleteUser?${stringify(param)}`);
// };
// 删除
export const del = param => {
  param = param || {};
  return request(`/userManage/deleteUser?${stringify(param)}`);
};
