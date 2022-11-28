import React, { createContext, useReducer, useState } from 'react';

const INITIAL_STATE = {
    city: null,
    date: [],
    options: {
        adult: null,
        children: null,
        room: null
    }
}

const DataContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;

        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export const DataProvider = (props) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <DataContext.Provider value={
            {city: state.city, date: state.date, options: state.options, dispatch}
        }>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;