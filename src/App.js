import { AppFooter } from "./cmps/app-footer";
import { AppHeader } from "./cmps/app-header";
import { BuildManage } from "./cmps/build-manage";
import { FindTalent } from "./cmps/find-talent";
import { GetStarted } from "./cmps/get-started";
import { SuccessStories } from "./cmps/success-stories";

function App() {
  return (
    <div className="App main-container">
      <header className="App-header">
        <AppHeader />
        <FindTalent />
        <BuildManage />
        <SuccessStories />
        <GetStarted />
        {/* <AppFooter /> */}
      </header>
    </div>
  );
}

export default App;
