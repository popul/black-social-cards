import { StrictMode, useState } from "react";

import { Api, ApiContext } from "./Api";
import { AppCards } from "./AppCards";
import { fakePages, fakeWallets } from "./fakeData";
import { App as AppModel, Page } from "./model";

const groupByDomain = (pages: Page[]) => {
  const groups = pages.reduce<Record<string, AppModel>>((groups, page) => {
    const domain = new URL(page.url).hostname;
    if (!groups[domain]) {
      groups[domain] = {
        name: domain,
        image: page.image,
        pages: []
      };
    }
    groups[domain].pages.push(page);
    return groups;
  }, {});
  return Object.values(groups);
};

export const App = () => {
  const [pages, setPages] = useState(fakePages);
  const [wallets] = useState(fakeWallets);

  const api: Api = {
    getPages: () => pages,
    deleteApp: (url: string) => setPages(pages.filter((p) => p.url !== url)),
    toggleFavorite: (url: string) => {
      const page = pages.find((p) => p.url === url);
      if (page) {
        page.favorite = !page.favorite;
      }
      setPages([...pages]);
    },
    getWallets: () => wallets
  };

  return (
    <StrictMode>
      <ApiContext.Provider value={api}>
        <AppCards groupBy={groupByDomain} />
      </ApiContext.Provider>
    </StrictMode>
  );
};
