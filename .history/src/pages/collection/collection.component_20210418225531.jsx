import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';



const CollectionPage = ({match}) => {
    console.log(match.params.collectionId)
    return (
        <div className="category">
            <h2>Category page</h2>
        </div>
    )
}

export default CollectionPage;