export default store => next => action =>{
    console.log("state bebore",store.getState())
    console.log("dispatching",action)
    next(action)
    console.log("state after",store.getState())
}