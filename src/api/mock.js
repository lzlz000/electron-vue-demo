import service from '@/api/service.js'


let e1 = (id, status)=>{
  return service({
    url: `/restful/${id}/list`,
    params:{id: id,status: status},
    method: 'get',
    
  })
}
let e2 = (id, status)=>{
  return service({
    url: `/`,
    params:{id: id,status: status},
    method: 'get'
  })
}
export default {
  e1,e2
}