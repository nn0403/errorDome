import createReducer from "../../../utils/createReducer";

export const schema = {
    id: 'id',
    name: 'information'
};

const reducer = createReducer(schema.name);

export default reducer;