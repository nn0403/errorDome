import createReducer from "../../../utils/createReducer";

export const schema = {
    id: 'id',
    name: 'user',
};

const reducer = createReducer(schema.name);

export default reducer;