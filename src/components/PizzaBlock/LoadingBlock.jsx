import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="79" cy="59" r="2" />
      <circle cx="147" cy="130" r="122" />
      <rect x="0" y="267" rx="3" ry="3" width="282" height="17" />
      <rect x="0" y="301" rx="6" ry="6" width="280" height="84" />
      <rect x="148" y="398" rx="20" ry="20" width="132" height="45" />
      <rect x="0" y="407" rx="0" ry="0" width="90" height="26" />
    </ContentLoader>
  );
}

export default LoadingBlock;
