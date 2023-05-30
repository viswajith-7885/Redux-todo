import{createSlice} from '@reduxjs/toolkit'

const todoslice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addtodo:(state,action)=>{
            state.push(action.payload)
        },
        removetodo:(state,action)=>{
            const {id} =action.payload
            return state.filter((e)=>e.id !==id)
         },
         UpdateData:(state,action)=>{
            const {id,activity}=action.payload
            const gg =state.find(e=>e.id==id)
            if(gg){
                gg.id=parseInt(id)
                gg.activity=activity

            }
         }

    }
})
export const {addtodo,removetodo,UpdateData} = todoslice.actions
export default todoslice.reducer;