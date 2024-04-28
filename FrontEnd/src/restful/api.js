// 导入axios
import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:8000/api/'

Axios.create({
  headers: 'access_token'
});

import qs from 'qs'

// 登录
export const userLogin = (params) => {
  return Axios.post('account/login', qs.stringify(params)).then(res => res.data);
}
// 注册
export const userRegister = (params) => {
  return Axios.post('account/register', qs.stringify(params)).then(res => res.data);
}
// 退出
export const userLogout = () => {
  return Axios.get('account/logout').then(res => res.data);
}

// 分类列表API
export const getContent = (url) => {
  return Axios.get(url).then(res => res.data);
}

// 免费课程分类列表
export const getFreeCategory = () => {
  return Axios.get("free/category").then(res => res.data);
}
// 免费课程分类列表内的所有课程
export const getFreeCategoryCourse = (id) => {
  return Axios.get(`free/course/${id}`).then(res => res.data);
}
// 免费课程详情数据
export const courseDetail = (courseId) => {
  return Axios.get(`api/free/${courseId}/detail`).then(res => res.data);
}

// 实战课程分类列表
export const getPracticalCategory = () => {
  return Axios.get("practical/practicalcategory").then(res => res.data);
}
// 实战课程分类列表内的所有课程
export const getPracticalCategoryCourse = (id) => {
  return Axios.get(`practical/practicalcourse/${id}`).then(res => res.data);
}
// 实战课程详情数据
export const practicalCourseDetail = (courseId) => {
  return Axios.get(`practical/${courseId}/payment_info`).then(res => res.data);
}

// 就业班课程列表数据
export const getDegreeCourse = () => {
  return Axios.get(`course/degreecourse/list`).then(res => res.data);
}
// 就业班课程详情数据
export const degreeCourseDetail = (courseId) => {
  return Axios.post(`course/degreecourse/${courseId}`).then(res => res.data);
}

// 购物车结算页面列表
export const settlementList = () => {
  return Axios.get(`payment/list`,
    {params: {'token': localStorage.getItem('access_token')}}).then(res => res.data);
}
// 购物车结算支付接口
export const settlement = (paymentData) => {
  return Axios.post(`payment/pay`, qs.stringify(paymentData)).then(res => res.data);
}

// 购物车页面列表
export const shopCarList = () => {
  return Axios.get(`shopping/list`,
    {params: {'token': localStorage.getItem('access_token')}}).then(res => res.data);
}
// 商品课程添加到购物车
export const shopCartAdd = (goodsInfo) => {
  return Axios.post(`shopping/add`, qs.stringify(goodsInfo)).then(res => res.data);
}
// 删除购物车中的商品
export const shopCarDeleteGoods = (deleteCourseList) => {
  return Axios.delete(`shopping/delete`, deleteCourseList).then(res => res.data);
}

// 我的教室学生页面列表内容
export const classroomCourseList = () => {
  return Axios.get(`enroll/degree`,
    {params: {'token': localStorage.getItem('access_token')}}).then(res => res.data);
}
// 我的教室老师页面列表内容
export const getTeacherDetailList = () => {
  return Axios.get(`enroll/teacher`,
    {params: {'token': localStorage.getItem('access_token')}}).then(res => res.data);
}
// 提问
export const questions = (data) => {
  return Axios.post(`questions/askQuestions`, qs.stringify(data)).then(res => res.data);
}
// 作业
export const homeworkDetail = (id) => {
  return Axios.get(`homework/homeworkDetail/${id}`,
    {params: {'token': localStorage.getItem('access_token')}}).then(res => res.data);
}
// 作业批改
export const submitApproval = (data) => {
  return Axios.post(`homework/approval`,
    qs.stringify(data)).then(res => res.data);
}
// 问题回复
export const questionReply = (data) => {
  return Axios.post(`questions/reply`,
    qs.stringify(data)).then(res => res.data);
}
