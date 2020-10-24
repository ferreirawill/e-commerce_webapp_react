import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

export class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections:[
                {
                    title:"Item 1",
                    imageUrl:'https://picsum.photos/2048/1152',
                    size:"large",
                    id:1
                },
                {
                    title:"Item 2",
                    imageUrl:'https://picsum.photos/2048/1152',
                    size:"large",
                    id:2
                },
                {
                    title:"Item 3",
                    imageUrl:'https://picsum.photos/2048/1152',
                    size:"large",
                    id:3
                },
                {
                    title:"Item 4",
                    imageUrl:'https://picsum.photos/2048/1152',
                    size:"large",
                    id:4
                },
                {
                    title:"Item 5",
                    imageUrl:'https://picsum.photos/2048/1152',
                    size:"large",
                    id:5
                },
        ]
        }
    }
    
    render() {
        const {sections} = this.state;
        
        
        return (
            <div className='directory-menu'>
                {
                    sections.map(({title,imageUrl,id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
