import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';




const Directory = () => {

    
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) =>  <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
}

const mapStateToProps = (state) => {
   
    

}

export default connect()(Directory);