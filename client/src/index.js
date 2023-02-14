import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import JournalStore from "./store/JournalStore";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
          user: new UserStore(),
          journal: new JournalStore()
      }}>
          <App />
      </Context.Provider>

  </React.StrictMode>
);
reportWebVitals();
