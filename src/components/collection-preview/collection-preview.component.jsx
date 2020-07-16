import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="container">
    <div className="mediotitulo">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem className="col mb-4 " key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
