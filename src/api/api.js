import axios from '.' // import axios from './index'

export function login(data) { // 登录
  return axios({
    method: 'post',
    url: `/user/login`,
    data
  })
}

export function logout() { // 退出
  return axios({
    method: 'post',
    url: `/user/logout`,
  })
}

export function loanCreate(data) { // 贷款申请
  return axios({
    method: 'post',
    url: `/loan/create`,
    data
  })
}

export function loanList(data) { // 申请管理
  return axios({
    method: 'get',
    url: `/loan/list`,
    params: data
  })
}

export function submitToApprove(data) { // 申请管理 --提交
  return axios({
    method: 'post',
    url: `/loan/submitToApprove`,
    data
  })
}

export function submitDelete(id) { // 申请管理 --提交
  return axios({
    method: 'delete',
    url: `/loan/delete/${id}`,
  })
}


export function approve(data) { // 贷款审批 -初审-查询
  return axios({
    method: 'get',
    url: `/approve/first/list?pageNo=${data.pageNo}&pageSize=${data.pageSize}$name=${data.name}`,
  })
}

export function loanchakan(id) { // 贷款审批 -初审-查看详情
  return axios({
    method: 'get',
    url: `/loan/query?id=${id}`,
  })
}

export function approvefirst(data) { // 贷款审批 -初审-通过
  return axios({
    method: 'post',
    url: `/approve/first/pass`,
    data
  })
}


export function zongshenc(data) { // 贷款审批 -终审-查询
  return axios({
    method: 'get',
    url: `/approve/end/list?pageNo=${data.pageNo}&pageSize=${data.pageSize}$name=${data.name}`,
  })
}