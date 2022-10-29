import axios from 'axios'
import Vue from 'vue'
import {Toast} from 'vant'

Vue.use(Toast)

axios.interceptors.request.use((cfg)=>{
  // 判断token是否过期 过期则删除
  let time = parseInt(new Date().getTime() / 1000) - parseInt(localStorage.getItem('expire_in' / 1000))
  if(time>60*5){
    localStorage.removeItem('expire_in')
    localStorage.removeItem('token')
    console.log('dd');
  }
  // 判断token是否存在，携带token在请求header头
  try{
    if(localStorage.getItem('token')){
      cfg.headers.authorization = localStorage.getItem('token')
    }
  }catch(e){
    console.log(e);
  }
  return cfg
})

axios.interceptors.response.use((res)=>{
  try{
    if(res.data.data.token){
      localStorage.setItem('token',res.data.data.token)
      localStorage.setItem('expire_in',new Date().getTime())
    }
  }catch(e){
    console.log(e);
  }
  Toast.clear()
  return res.data
})

export default axios