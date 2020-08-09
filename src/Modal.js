import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const modalroot = document.getElementById("modal-root");

//Custom hooks - create a modal into react dom when we have to render the overlay
function Modal(props) {
  const appendChildren = document.createElement("div");

  useEffect(() => {
    modalroot.appendChild(appendChildren);
    return function cleanup() {
      modalroot.removeChild(appendChildren);
    };
  });
  return ReactDOM.createPortal(props.children, modalroot);
}

export default Modal;
