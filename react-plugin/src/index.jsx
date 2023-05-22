const { render, StrictMode } = wp.element;
import App from "./App";
const root = document.getElementById("bisnu_div");

if (root) {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    root
  );
}
