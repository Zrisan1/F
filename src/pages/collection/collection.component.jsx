import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
        {items.map((item) => (
          <CollectionItem className="col mb-4 " key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
