import React, {Component} from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';



 class ShopPage extends Component {
   state = {
     loading: true
   }
  

   unsubscribeFromSnapshot = null

   componentDidMount(){
     const { updateCollections } = this.props;

     const collectionRef = firestore.collection('collections');
    
    collectionRef.get().then(snapshot =>{
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })
    
   }

   render (){
     
     return (
            
              <div className="shop-page">
                <CollectionsOverview />
            </div>
        )
   }
   
 }

const mapDispatchToprops = (dispatch) => ({
   updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
 })
   


export default connect(
  null,
  mapDispatchToprops
)(ShopPage);


