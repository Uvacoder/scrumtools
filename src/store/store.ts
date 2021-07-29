import { InjectionKey } from "vue";
import { createStore, Store, useStore as vUseStore } from "vuex";

export enum AppState {
  Home = "Home",
  Poker = "Poker",
}

export interface State {
  state: AppState;
  title: string;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    state: AppState.Home,
    title: "Scrum Tools",
  },
  mutations: {
    hostPoker(state) {
      state.state = AppState.Poker;
    },
  },
  actions: {},
  modules: {},
});

export function useStore(): Store<State> {
  return vUseStore(key);
}
