import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import store from "./store";
import { Provider, connect } from "react-redux";

window.renderWorkflows = (containerId, history) => {
  const container = document.getElementById(containerId);
  const root = createRoot(container);
  root.render(<Provider store={store}><App /></Provider>);
};

window.unmountWorkflows = containerId => {
  const container = document.getElementById(containerId);
  const root = createRoot(container);
  root.unmount();
};

if (!document.getElementById('Workflows-container')) {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<Provider store={store}><App /></Provider>);
}
