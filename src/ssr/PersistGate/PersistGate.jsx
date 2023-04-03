import { PersistGate as PersistGateClient } from "redux-persist/integration/react";

const PersistGate = ({ children, ...rest }) => {
  const runtime = process.env.RUNTIME;

  if (runtime === "browser") {
    return <PersistGateClient {...rest}>{children}</PersistGateClient>;
  }

  return children;
};

export default PersistGate;
