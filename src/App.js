import React, { Suspense } from "react";

import Main from "./Main";
import Loader from "./Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
}

export default App;
