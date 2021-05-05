import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';




const Directory = () => {

    const [directoryArr, setDirectoryArr] = useState([])

        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) =>  <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        directory: state
    }    

}

export default connect(mapStateToProps)(Directory);