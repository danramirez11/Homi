import { configureStore } from '@reduxjs/toolkit'
import userSlice, { type UserState } from './userSlice'
import { useDispatch } from 'react-redux';

export type storeType = {
    user: UserState
}


export const loadState = (): UserState | undefined => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as UserState;
  } catch (err) {
    console.warn('Failed to load user state from localStorage:', err);
    return undefined;
  }
};

export const saveState = (state: UserState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (err) {
    console.warn('Failed to save user state to localStorage:', err);
  }
};


const preloadedUserState = loadState();

export const store = configureStore({
  reducer: {
    user: userSlice, 
  },
  preloadedState: preloadedUserState ? { user: preloadedUserState } : undefined
})

store.subscribe(() => {
  const state = store.getState();
  saveState(state.user); 
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();