import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  ActiveSession: string;
  HamburgerMenuOpen: boolean;
  ProfileModalIsOpen: boolean;
  NotificationModalIsOpen: boolean;
  ProfilePopOver: boolean;
}

const initialState: UiState = {
  ActiveSession: "Home",
  HamburgerMenuOpen: false,
  ProfileModalIsOpen: false,
  NotificationModalIsOpen: false,
  ProfilePopOver: false,
};

const UiSlice = createSlice({
  name: "uiReduc",
  initialState,
  reducers: {
    setActiveSession: (state, action: PayloadAction<string>) => {
      state.ActiveSession = action.payload;
    },
    setHamburgerMenu: (state) => {
      state.HamburgerMenuOpen = !state.HamburgerMenuOpen;
    },
    HamburgerMenuClose: (state) => {
      state.HamburgerMenuOpen = false;
    },
    HamburgerMenuOpen: (state) => {
      state.HamburgerMenuOpen = true;
    },
    setProfileModalOpen: (state) => {
      state.ProfileModalIsOpen = true;
    },
    setProfileModalClose: (state) => {
      state.ProfileModalIsOpen = false;
    },
    setNotificationModalOpen: (state) => {
      state.NotificationModalIsOpen = true;
    },
    setNotificationModalClose: (state) => {
      state.NotificationModalIsOpen = false;
    },
    setNotificationModalToggle: (state) => {
      state.NotificationModalIsOpen = !state.NotificationModalIsOpen;
    },
    setProfilePopOverOpen: (state) => {
      state.ProfilePopOver = true;
    },
    setProfilePopOverClose: (state) => {
      state.ProfilePopOver = false;
    },
    setProfilePopOverToggle: (state) => {
      state.ProfilePopOver = !state.ProfilePopOver;
    },
  },
});

export const {
  setActiveSession,
  setHamburgerMenu,
  HamburgerMenuClose,
  HamburgerMenuOpen,
  setProfileModalOpen,
  setProfileModalClose,
  setNotificationModalOpen,
  setNotificationModalClose,
  setNotificationModalToggle,
  setProfilePopOverOpen,
  setProfilePopOverClose,
  setProfilePopOverToggle,
} = UiSlice.actions;
export default UiSlice.reducer;
