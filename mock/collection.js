export default {
  'GET /collection/getList': (req, res) => {
    let item = {
      type: 1, // 藏品Type
      navName: '邮票', // 栏目名称
      navImage: 'http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png', // 栏目图标地址
      navUrl: 'https://s.click.taobao.com/1uI7UPw', // 栏目点击跳转页面地址
      userId: '10000', // 用户id
      userName: 'liangge', // 用户名_昵称
      title: '我的邮票3', // 藏品标题
      desc: '我的邮票真好看啊1!!', // 藏品简介
      images: 'http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png', // 图片地址，多个用逗号隔开
      price: 1000, // 藏品价格
      unit: '美元', // 藏品单位
      hotLevel: 1, // 藏品热度_即关注等级_值越小等级越高
      pubTime: '2018-09-09 10:10:10.0', // 添加时间
      mark: 0, // 审核状态，0未审核 1有效 2过期
      flag: 0, // 商品状态，0有效 1过期
    };
    let data = [item];
    for (let i = 1; i <= 12; i++) {
      const it = Object(item, { id: i });
      const index = i / 3;
      // it.flag = i === 3 ? 0 : 1
      data.push(it);
    }
    return res.status(200).send({
      data: { colList: data, total: 21 },
      success: 'true',
      msg: null,
      errorCode: 170000,
    });
  },
  'GET collection/deleteCollection': {
    success: 'true',
    msg: '藏品数据删除成功',
    errorCode: 170000,
    data: null,
  },
  'GET collection/verifyCollection': {
    success: 'true',
    msg: '藏品审核成功',
    errorCode: 170000,
    data: null,
  },
  'GET collection/upload': {
    success: 'true',
    msg: '藏品上传成功',
    errorCode: 170000,
    data: {
      id: 12, // 新生成的藏品id
    },
  },
};
