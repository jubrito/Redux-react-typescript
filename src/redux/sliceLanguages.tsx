import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Languages {
    name: string;
    favorite: boolean;
}

const initialState: Languages[] = [
    {
        name: "Java",
        favorite: false,
    },
    { name: "C#", favorite: false },
];

const sliceLanguages = createSlice({
    name: "languages",
    initialState,
    reducers: {
        addLanguages(state, action: PayloadAction<string>) {
            return [...state, { name: action.payload, favorite: false }];
        },
        favoriteLanguage(state, action: PayloadAction<string>) {
            return state.map((st) =>
                st.name === action.payload
                    ? { ...st, favorite: !st.favorite }
                    : st
            );
        },
    },
});

export default sliceLanguages.reducer;
export const { addLanguages, favoriteLanguage } = sliceLanguages.actions;
export const useLanguages = (state: any) => {
    return state.languages as Languages[];
};
