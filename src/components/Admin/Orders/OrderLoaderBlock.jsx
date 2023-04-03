import React from "react"
import ContentLoader from "react-content-loader"

const OrderLoaderBlock = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="173" y="53" rx="0" ry="0" width="260" height="61"/>
    </ContentLoader>
)

export default OrderLoaderBlock;