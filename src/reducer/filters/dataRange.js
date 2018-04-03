import {DATARANGE} from '../../constants'

export default (mainState = null,action) =>{
    const {type,payload} = action;
    console.log(payload,"payload DATARANGE")
    switch (type){
        case DATARANGE :return mainState
    }
    return mainState
}