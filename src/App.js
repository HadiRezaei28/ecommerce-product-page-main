import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import store from "./redux-toolkit/store";
import { Provider } from "react-redux";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Main />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default App;
