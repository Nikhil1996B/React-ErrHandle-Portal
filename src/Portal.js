import React, { useState } from "react";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";

const PortalExample = () => {
  const [show, handleShow] = useState(false);

  const modal = show ? (
    <>
      <Modal>
        <div className="modal">
          This child is created as a protal in modal-root container by react on
          mount, which is an overlay.
          <button onClick={() => handleShow(false)}>close x</button>
        </div>
      </Modal>
    </>
  ) : null;

  return (
    <ErrorBoundary>
      <button onClick={() => handleShow(true)}>ShowOverLay</button>
      {modal}
    </ErrorBoundary>
  );
};

export default PortalExample;
