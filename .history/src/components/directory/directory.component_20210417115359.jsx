import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';




const Directory = ({sections}) => {


        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionProps}) =>  <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
}

const mapStateToProps = ({directory : {sections}}) => {
    return {
        sections
    }    

}

export default connect(mapStateToProps)(Directory);