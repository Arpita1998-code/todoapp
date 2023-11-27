const initialData = {
    list: []
}

const reducer = (state=initialData, action)=>{
    switch (action.type) {
        case "ADDTODO":
            const {id, data}= action.payload;

            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            case "DELETETODO":
            const newList= state.list.filter((element) => element.id !== action.id)

            return{
                ...state,
                list: newList
            }

            case "EDITTODO":
            const updatedList = state.list.map((element) =>
            element.id === action.payload.id ? { ...element, data: action.payload.data } : element
        );

            return {
            ...state,
            list: updatedList,
            };

            default: return state;
    }
}
export default reducer;