import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {useLocation, useHistory} from 'react-router-dom';



import './collection-preview.styles.scss';

const CollectionPreview = ({title, items, routeName}) => {
    
    const {pathname} = useLocation();
    const history = useHistory();

   
    



    return (
        <div className="collection-preview">

            <h1 style={{cursor: 'pointer'}} onClick={() => history.push(`${pathname}/${routeName}`)} className="title">{title.toUpperCase()}</h1>
           
           

            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
            
        </div>
        
    )
}

export default CollectionPreview;