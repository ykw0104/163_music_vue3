import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000",
});

/* 获取轮播图 0: pc 1: android 2: iphone 3: ipad */
export const getBanner = (type = 0) => {
  return request({
    method: "GET",
    url: "/banner",
    params: {
      type,
    },
  });
};
