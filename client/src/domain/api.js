import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  // ping: 'ping.json',
  register: 'user/register',
  login: 'user/login',
  get_profile: 'user/get-profile',
  postJourney: 'post/create',
  myPost: 'post/my-post',
  allPost: 'post',
  detailPost: 'post/detail/',
  getBookmark: 'bookmark',
  addBookmark: 'bookmark/create'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

// export const ping = () => callAPI(urls.ping, 'get');

export const register = (dataUser) => {
  return callAPI(urls.register, 'POST', {}, {}, dataUser)
}

export const login = (data) => {
  return callAPI(urls.login, 'POST', {}, {}, data)
}

export const profileUser = () => {
  return callAPI(urls.get_profile, 'GET')
}

export const createPost = (data) => {
  const header = {
    'Content-Type': 'multiplatform/data; charset=UTF-8',
  };
  return callAPI(urls.postJourney, 'POST', header, {}, data)
}

export const getMyPost = () => {
  return callAPI(urls.myPost, 'GET')
}

export const getAllPost = () => {
  return callAPI(urls.allPost, 'GET')
}

export const getDetailPost = (id) => {
  return callAPI(`${urls.detailPost}${id}`, 'GET')
}

export const getDataBookmark = () => {
  return callAPI(urls.getBookmark, 'GET')
}

export const addBookmark = (data) => {
  return callAPI(urls.addBookmark, 'POST', {}, {}, data)
}