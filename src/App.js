import './App.css';
import '@shopify/polaris/dist/styles.css';
import {Page} from '@shopify/polaris';
import SettingForm from './components/SettingForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Page title="Settings">
        <SettingForm></SettingForm>
      </Page>
    </div>
  );
}

export default App;
