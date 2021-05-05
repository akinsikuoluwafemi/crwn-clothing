import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';


import './collection-overview.styles.scss';

const CollectionsOverview = ({collections})=> {
    return (
        <div className="collections-overview">
              {
                  collections.map(({id, ...otherCollectionProps}) => (
                      <CollectionPreview key={id} {...otherCollectionProps}/>
                  ))
                }
        </div>
    )
}