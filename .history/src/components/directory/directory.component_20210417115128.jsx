import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';




const Directory = ({sections}) => {

    const [directoryArr, setDirectoryArr] = useState(sections)

        return (
            <div className="directory-menu">
                {
                    directoryArr.map(({ id, ...otherSectionProps}) =>  <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
}

const mapStateToProps = ({directory : {sections}}) => {
    console.log(sections)
    return {
        sections
    }    

}

export default connect(mapStateToProps)(Directory);