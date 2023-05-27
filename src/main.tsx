// ** React Imports
import ReactDOM from "react-dom/client"
import App from "./App"

// ** Style Imports
import "./assets/font/font.css"
import "./main.css"

// ** Redux Imports
import { Provider } from "react-redux"
import { store } from "./store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
