/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable prefer-rest-params */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-return-await */
// const axios = require("axios");
// const md5 = require("js-md5");
/* eslint-disable */
  import axios from 'axios';

const CONFIG = {
  INTERFACE_URL: '',
};

const API_OBJ = {
  PREFIX: `${CONFIG.INTERFACE_URL}?s=`,
  USER_REGISTER: 'App.User.Register',
  USER_LOGIN: 'App.User.Login',
  USER_CHANGE_PROPS: 'App.User.UpdateExtInfo',
  USER_CHECK_IF_LOGIN: 'App.User.Check',
  USER_EXT_INFO: 'App.User.OtherProfile',
  USER_SELF_INFO: 'App.User.Profile',
  USER_CHANGE_ROLE: 'App.User.ChangeRole',
  USER_LOGOUT: 'App.User.Logout',
  USER_SEARCH: 'App.User.Search',

  TABLE_CREATE: 'App.Table.Create',
  TABLE_READ: 'App.Table.FreeFindOne',
  TABLE_READ_ID: 'App.Table.Get',
  TABLE_UPDATE_WHERE: 'App.Table.FreeUpdate',
  TABLE_UPDATE: 'App.Table.Update',
  TABLE_READ_PAGE: 'App.Table.FreeQuery',
  TABLE_UNION_QUERY: 'App.Table.FreeLeftJoinQuery',
  TABLE_COUNT: 'App.Table.FreeCount',

  OTHERS_UNIQUE_ID: 'App.Common_UniqueId.GetUniqueId',

  WEIXIN: {
    LOGIN: 'App.Wxmini_User.Login',
    GET_INFO: 'App.Wxmini_User.GetBindInfo',
    GET_WRCODE: 'App.Wxmini_QrCode.Getwxacodeunlimit',
  },
};

async function HGet(url) {
  try {
    let res = await axios.get(url);
    res = res.data;
    return new Promise((resolve) => {
      // @ts-ignore
      if (res.ret === 200) {
        resolve(res);
      } else {
        resolve(res);
      }
    });
  } catch (err) {
    console.log(err);
  }
}


let { PREFIX } = API_OBJ;
const yesapi = {
  config: {
    configServerUrl: function(url) {
      CONFIG.INTERFACE_URL = url;
    }
  },
  table: {
    /**
     * 创建一条数据
     * @param table_name string
     * @param uuid string
     * @param token string
     * @param funcs retFunc
     */
    create: async function (table_name, data) {
      // let uuid = localStorage.getItem('uuid');
      // let token = localStorage.getItem('token');
      //app_key data model_name s uuid token
      let PORT, url;
      let dataStr;
      //Define User Data
      dataStr = JSON.stringify(data);
      //Define Post Data
      PORT = API_OBJ.TABLE_CREATE;
      url =
        PREFIX +
        PORT +
        `&data=${dataStr}&model_name=${table_name}`;
      //Execute Post
      return await HGet(url);
    },
    /**
     * 使用ID查询查询一条数据
     * @param table_name string
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param uuid string
     * @param funcs
     */
    readOneViaID: async function (table_name, id) {
      //app_key logic model_name s uuid where
      let PORT, url;
      //Define Post Data
      PORT = API_OBJ.TABLE_READ_ID;
      url =
        PREFIX +
        PORT +
        `&id=${id}&model_name=${table_name}`;
      //Execute Post
      return await HGet(url);
    },
    /**
     * 查询一条数据
     * @param table_name string
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param uuid string
     * @param funcs
     */
    read: async function (table_name, where, logic) {
      // let uuid = localStorage.getItem('uuid');
      // let token = localStorage.getItem('token');
      //app_key logic model_name s uuid where
      let PORT, url;
      let dataStr;
      //Define User Data
      dataStr = JSON.stringify(where);
      //Define Post Data
      PORT = API_OBJ.TABLE_READ;
      url =
        PREFIX +
        PORT +
        `&logic=${logic}&where=${dataStr}&model_name=${table_name}`;
      console.log(url);
      return await HGet(url);
    },
    /**
     * 查询一条数据
     * @param table_name string
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param uuid string
     * @param funcs
     */
    read_order: async function (table_name, where, order) {
      // let uuid = localStorage.getItem('uuid');
      // let token = localStorage.getItem('token');
      //app_key logic model_name s uuid where
      let PORT, url;
      let dataStr;
      //Define User Data
      dataStr = JSON.stringify(where);
      //Define Post Data
      PORT = API_OBJ.TABLE_READ_PAGE;
      url =
        PREFIX +
        PORT +
        `&order=["${order}"]&where=${dataStr}&model_name=${table_name}`;
      console.log(url);
      return await HGet(url);
    },
    /**
     * 使用UUID来以页为单位查询数据
     * @param table_name
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param page number
     * @param perPage number
     * @param uuid
     * @param funcs
     */
    readPage: async function (table_name, where, logic, page, perPage) {
      //app_key logic model_name page perpage s uuid where
      let PORT, url, dataStr;
      //Define User Data
      dataStr = JSON.stringify(where);
      //Define Post Data
      PORT = API_OBJ.TABLE_READ_PAGE;
      url =
        PREFIX +
        PORT +
        `&logic=${logic}&where=${dataStr}&page=${page}&perpage=${perPage}&model_name=${table_name}`;
      //Execute Post
      return await HGet(url);
    },
    /**
     * 使用UUID来以页为单位查询数据
     * @param table_name
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param page number
     * @param perPage number
     * @param uuid
     * @param funcs
     */
    readPageSelect: async function (
      table_name,
      where,
      logic,
      page,
      perPage,
      select,
    ) {
      //app_key logic model_name page perpage s uuid where
      let PORT, url, dataStr;
      //Define User Data
      dataStr = JSON.stringify(where);
      //Define Post Data
      PORT = API_OBJ.TABLE_READ_PAGE;
      url =
        PREFIX +
        PORT +
        `&logic=${logic}&where=${dataStr}&page=${page}&perpage=${perPage}&model_name=${table_name}&select=${select}`;
      //Execute Post
      return await HGet(url);
    },
    /**
     * 使用UUID来进行联合查询
     * @param table_name
     * @param join_table_name
     * @param join_select
     * @param on
     * @param where
     * @param logic
     * @param page
     * @param perPage
     * @example on：{'cate_id':'id'} cate_id是主表中的字段名，id是副表中的字段名
     * @example where：[ ['TL.view_times','>=',100], ['TR.is_show','=',1]] TL代表主表中的查询，TR代表副表中的查询
     * @example join_select： cate_id,id,views
     */
    readUnion: async function (
      table_name,
      join_table_name,
      join_select,
      on,
      where,
      logic,
      page,
      perPage,
    ) {
      //app_key join_model_name join_select logic model_name on page perpage s uuid where
      let PORT, url, dataStr1, dataStr2;
      //Define User Data
      dataStr1 = JSON.stringify(where);
      dataStr2 = JSON.stringify(on);
      //Define Post Data
      PORT = API_OBJ.TABLE_UNION_QUERY;
      url =
        PREFIX +
        PORT +
        `&logic=${logic}&where=${dataStr1}&page=${page}&perpage=${perPage}&model_name=${table_name}&join_model_name=${join_table_name}&join_select=${join_select}&on=${dataStr2}`;
      //Execute Post
      return await HGet(url);
    },
    /**
     * 使用UUID和Order来进行联合查询
     * @param table_name
     * @param join_table_name
     * @param join_select
     * @param on
     * @param where
     * @param logic
     * @param page
     * @param perPage
     * @param order
     * @param uuid
     * @param funcs
     * @example on：
     * {'cate_id':'id'} cate_id是主表中的字段名，id是副表中的字段名
     * @example where：
     * [ ['TL.view_times','>=',100], ['TR.is_show','=',1]] TL代表主表中的查询，TR代表副表中的查询
     * @example join_select：
     * cate_id,id,views
     * @example order：
     * 每一组排序格式为：'字段名 + 空格 + ASC|DESC'，其中：
     * ASC：为指定列按升序排列
     * DESC：为指定列按降序排列。
     */
    readUnion_Order: async function (
      table_name,
      join_table_name,
      join_select,
      on,
      where,
      logic,
      page,
      perPage,
      order,
    ) {
      //app_key join_model_name join_select logic model_name on order page perpage s uuid where
      let PORT, url, dataStr1, dataStr2, dataStr3;
      //Define User Data
      dataStr1 = JSON.stringify(where);
      dataStr2 = JSON.stringify(on);
      dataStr3 = JSON.stringify(order);
      //Define Post Data
      PORT = API_OBJ.TABLE_UNION_QUERY;
      url =
        PREFIX +
        PORT +
        `&logic=${logic}&where=${dataStr1}&page=${page}&perpage=${perPage}&model_name=${table_name}&order=${dataStr3}&join_model_name=${join_table_name}&join_select=${join_select}&on=${dataStr2}`;
      //Execute Post
      return await HGet(url);
    },
    /**
     * 使用条件查询更新一条数据
     * @param table_name string
     * @param data {a:23123, app:'list'}
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param uuid string
     * @param funcs
     */
    update: async function (table_name, data, where, logic) {
      //app_key data logic model_name s uuid where
      let PORT, url;
      let whereStr, dataStr;
      //Define User Data
      whereStr = encodeURI(JSON.stringify(where));
      dataStr = encodeURI(JSON.stringify(data));
      //Define Post Data
      PORT = API_OBJ.TABLE_UPDATE_WHERE;
      url =
        PREFIX +
        PORT +
        `&data=${dataStr}&logic=${logic}&where=${whereStr}&model_name=${table_name}`;
      //Execute Post
      console.log(dataStr);
      return await HGet(url);
    },
    /**
     * 使用id更新一条数据
     * @param table_name string
     * @param data {a:23123, app:'list'}
     * @param where [['a','=','3142'],[...],...]
     * @param logic 'and'/'or'
     * @param uuid string
     * @param funcs
     */
    updateViaID: async function (table_name, data, id) {
      //app_key data logic model_name s uuid where
      let PORT, url;
      let dataStr;
      //Define User Data
      dataStr = JSON.stringify(data);
      //Define Post Data
      PORT = API_OBJ.TABLE_UPDATE;
      url =
        PREFIX +
        PORT +
        `&data=${dataStr}&id=${id}&model_name=${table_name}`;
      //Execute Post
      return await HGet(url);
    },
    count: async function (table_name, where, logic) {
      // let uuid = localStorage.getItem('uuid');
      // let token = localStorage.getItem('token');
      //app_key logic model_name s uuid where
      let PORT, url;
      let dataStr;
      //Define User Data
      dataStr = JSON.stringify(where);
      //Define Post Data
      PORT = API_OBJ.TABLE_COUNT;
      url =
        PREFIX +
        PORT +
        `&logic=${logic}&where=${dataStr}&model_name=${table_name}`;
      console.log(url);
      return await HGet(url);
    },
  },
  others: {
    /**
     * 唯一id生成接口
     * @param uuid string
     * @param token string
     */
    getUniqueId: async function () {
      //app_key,password,s,username,secret
      let url =
        PREFIX + API_OBJ.OTHERS_UNIQUE_ID;
      return await HGet(url);
    },
  },
  weixin: {
    login: async function (code) {
      let url =
        PREFIX + API_OBJ.WEIXIN.LOGIN;
      return await HGet(url, { code });
    },
    getInfo: async function (openid) {
      let url =
        PREFIX + API_OBJ.WEIXIN.GET_INFO;
      return await HGet(url, { openid });
    },
    getWRcode: async function (scene, page) {
      let url =
        PREFIX + API_OBJ.WEIXIN.GET_WRCODE;
      return await HGet(url, { scene, page, return_format: 'url' });
    },
  },
  cs: {
    queryRoom: async function(code) {
      let {data: {data:{channelRTM}}} = await yesapi.table.readOneViaID("cs_channel",code);
      return channelRTM;
    },
    newRoom: async function() {
      let {data: {id: rtmId}}  = await yesapi.others.getUniqueId();
      let {data: {id: roomId}} = await yesapi.table.create("cs_channel",{channelRTM: rtmId});
      return [roomId,rtmId];
    }
  }
};

export default yesapi;