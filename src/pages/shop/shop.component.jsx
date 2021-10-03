import React, {Component} from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';


 class ShopPage extends Component {

   unsubscribeFromSnapshot = null
   componentDidMount(){
     const { fetchCollectionsStartAsync } = this.props;
     
     fetchCollectionsStartAsync()
   }

   render (){



     return (
            
              <div className="shop-page">
                {this.props.isCollectionFetching ? <p>Loading...</p> : (
                  <CollectionsOverview />
                )}
            </div>
        )
   }
   
 }

const mapStateToProps = createStructuredSelector({
   isCollectionFetching: selectIsCollectionFetching
 })

const mapDispatchToprops = (dispatch) => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
 })
   


export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ShopPage);


