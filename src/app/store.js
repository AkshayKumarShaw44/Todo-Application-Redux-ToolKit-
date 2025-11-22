import { configureStore } from '@reduxjs/toolkit';
import todoreducer from '../features/Todo/todoSlice';

const store = configureStore({
    reducer: {
        todo: todoreducer
    }
});

export default store;
