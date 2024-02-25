import { RedocStandalone } from "redoc";

import "./App.css";

function App() {
  const params = window.location.search;
  const url = params.split("=").length > 1 ? params.split("=")[1] : "";

  return (
    <RedocStandalone
      specUrl={url}
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: "#fb2645" } } },
      }}
    />
  );
}

export default App;
