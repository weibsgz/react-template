
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// 这个东西就是reducer
export function counter(state = 0 , action){
    switch(action.type){
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return 10
    }
}
//action 同步的action 这里不用dispatch了 页面调用的时候
export function addGun(){
    return {type:ADD_GUN}
}
export function removeGun(){
    return {type:REMOVE_GUN}
}
//这就是异步了  需要手动触发dispatch
export function addGunAnsyc(){
    return dispatch=>{
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}
