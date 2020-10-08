import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import http from "../../services/api";
import { Entry } from '../../interfaces/entry.interface'
import { RootState } from "../../app/rootReducer";
interface postEntry {
    params: string;
    title: string;
    content: string
}
export const createDiaryEntry: any = createAsyncThunk(
    "diary/entry",
    async (data: postEntry) => {
        const response = await http.post(`/diaries/entry/${data?.params}`, {
            title: data?.title,
            content: data?.content
        })
        console.log(response)
        return response
    }
)

export const EntrySlice = createSlice({
    name: "entry",
    initialState: [] as Entry[],
    reducers: {
        setEntries(state, { payload }: PayloadAction<Entry[] | null>) {
            return (state = payload != null ? payload : []);
        }
    },
    extraReducers: {
        [createDiaryEntry.fulfilled]: (state, { payload }: PayloadAction<any>) => {
            const { entry } = payload
            state.push(entry)
        },
        [createDiaryEntry.pending]: (state) => state,
    }})

export default EntrySlice.reducer 
export const GET_ENTRIES = (state : RootState) => state.entry 