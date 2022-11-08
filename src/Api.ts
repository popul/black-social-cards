import { createContext } from "react";

import { Page, Wallet } from "./model";

const defaultApi = {
  deleteApp: () => {},
  toggleFavorite: () => {},
  getPages: (): Page[] => [],
  getWallets: (): Wallet[] => []
};

type Api = typeof defaultApi;

export const ApiContext = createContext<Api>(defaultApi);
