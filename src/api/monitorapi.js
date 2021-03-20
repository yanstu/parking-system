//监控系统可视化接口api

import req from './http.js'

// 设备损坏报警
export const sonFindDamageList = params => req('get', '/api/camera/sonFindDamageList', params)

// 小区监控列表
export const sonFindCameraList = params => req('get', '/api/camera/sonFindCameraList', params)

// 设备总数 & 在线设备 & 损坏设备
export const sonGetCameraNum = params => req('get', '/api/camera/sonGetCameraNum', params)


// 总平台 > 授权申请 & 授权记录
export const totalFindApplyList = params => req('get', '/api/camera/totalFindApplyList', params)

// 总平台 > 设备损坏报警
export const totalFindDamageList = params => req('get', '/api/camera/totalFindDamageList', params)

// 总平台 > 设备统计下拉框
export const totalFindDataDay = params => req('get', '/api/camera/totalFindDataDay', params)

// 总平台 > 设备统计
export const totalFindDeviceStatistics = params => req('get', '/api/camera/totalFindDeviceStatistics', params)
