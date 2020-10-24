import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import SECTIONS_DATA from './sections.data';

export class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: SECTIONS_DATA
        }
    }
    
    render() {
        const {sections} = this.state;
        
        
        return (
            <div className='directory-menu'>
                {
                    sections.map(({title,imageUrl,id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
