const formatProductProperties = (sizeName, typeName, sizeUnit = "") => {
  const hasSize = sizeName !== "none";
  const hasType = typeName !== "none";

  return `${hasSize ? sizeName + " " + sizeUnit : ""} ${
    hasType ? typeName : ""
  }`;
};

export default formatProductProperties;
