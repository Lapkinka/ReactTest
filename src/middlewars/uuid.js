export default store => next => action =>{
  if(action.needRnd) return next({...action,randomId:store.randomId = Math.random() * Date.now().toString()})
  else return next(action)
}
