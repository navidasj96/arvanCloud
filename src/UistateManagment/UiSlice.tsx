import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  ActiveSession: string;
  HamburgerMenuOpen: boolean;
  ProfileModalIsOpen: boolean;
  NotificationModalIsOpen: boolean;
  ProfilePopOver: boolean;
  MiniSearchModalIsOpen: boolean;
  SearchBigModal: boolean;
  ActiveSideMenu: string;
  Direction: "rtl" | "ltr";
  selectedOption: string;
}

const initialState: UiState = {
  ActiveSession: "Home",
  HamburgerMenuOpen: false,
  ProfileModalIsOpen: false,
  NotificationModalIsOpen: false,
  ProfilePopOver: false,
  MiniSearchModalIsOpen: false,
  SearchBigModal: false,
  ActiveSideMenu: "",
  Direction: "rtl",
  selectedOption: "",
};

const UiSlice = createSlice({
  name: "uiReduc",
  initialState,
  reducers: {
    setActiveSession: (state, action: PayloadAction<string>) => {
      state.ActiveSession = action.payload;
    },
    setActiveSideMenu: (state, action: PayloadAction<string>) => {
      state.ActiveSideMenu = action.payload;
    },
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setLangPer: (state) => {
      state.Direction = "rtl";
    },
    setLangEng: (state) => {
      state.Direction = "ltr";
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
    setMiniSearchModalOpen: (state) => {
      state.MiniSearchModalIsOpen = true;
    },
    setMiniSearchModalClose: (state) => {
      state.MiniSearchModalIsOpen = false;
    },
    setSearchBigModalToggle: (state) => {
      state.SearchBigModal = !state.SearchBigModal;
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
  setMiniSearchModalOpen,
  setMiniSearchModalClose,
  setSearchBigModalToggle,
  setActiveSideMenu,
  setSelectedOption,
  setLangPer,
  setLangEng,
} = UiSlice.actions;
export default UiSlice.reducer;
