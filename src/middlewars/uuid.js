export default store => next => action =>{
  console.log("state bebore",store.getState())
  console.log("dispatching",action)
  const  uuidv4  = require('uuid/[v1|v3|v4|v5]')
  console.log("---",uuidv4 ())
  uuidv4 (); // ⇨ '45db52e1-f95c-4b5f-99a2-8b8d978c99b4'
  next(action)
  console.log("state after",store.getState())
}
