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
  theme: "day" | "night";
  lang: "en" | "fa";
  addItemState: {};
}

var initialState: UiState = {
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
  theme: "day",
  lang: "fa",
  addItemState: {},
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
    setDirection: (state, action: PayloadAction<"rtl" | "ltr">) => {
      state.Direction = action.payload;
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
    setInitialTheme: (state, action: PayloadAction<"rtl" | "ltr">) => {
      state.Direction = action.payload;
    },
    setTheme: (state, action: PayloadAction<"day" | "night">) => {
      state.theme = action.payload;
    },
    setLang: (state, action: PayloadAction<"en" | "fa">) => {
      state.lang = action.payload;
    },
    setAddItemState: (state, action: PayloadAction<any>) => {
      state.addItemState = { ...state.addItemState, ...action.payload };
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
  setDirection,
  setInitialTheme,
  setTheme,
  setLang,
  setAddItemState,
} = UiSlice.actions;
export default UiSlice.reducer;
