import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active:{
        //     id:'ABC123',
        //     title:'',
        //     body:'',
        //     date: 1234567,
        //     imageURL:[],

        // }
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNote: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });
            state.messageSaved = `${action.payload.title} updated correctly`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNoteLogout: (state, action) => {
            state.isSaving = false;            
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },

        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id!== action.payload);
            state.messageSaved = `Note deleted successfully`;
            state.isSaving = false;

        }

    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearNoteLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNote, setSaving,
    setPhotosToActiveNote,
    updateNote,
} = journalSlice.actions;