import { ADD_JOB } from "./actiontype";
import { IS_LOADING} from "./actiontype";
import {IS_ERROR} from "./actiontype";

const init= { jobs:[], loading:false, error:false }
export const reducer = (state=init,{type,payload})=>{
    switch(type){
        case ADD_JOB:
            return (
                {
                    ...state,
                    jobs: [...state.jobs,payload],
                    loading:false
                }
            );

            case IS_LOADING:
                return (
                    {
                        ...state,
                        loading:true
                        
                    }
                );

                
            case IS_ERROR:
               return (
                   {
                       ...state,
                       error:true
                   }
               );


        default:
            return state;    
    }
}