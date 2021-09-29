import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state=  {
            sections: [
                {
                    title : 'Headphones',
                    img : 'https://i.ibb.co/cvpntL1/hats.png',
                    id : 1

                },
                {
                    title : 'Speakers',
                    img : 'https://i.ibb.co/px2tCc3/jackets.png',
                    id : 2
                },
                {
                    title : 'Phone Covers',
                    img : 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id : 3
                },
                {
                    title : 'Accessories',
                    size : 'large',
                    img : 'https://i.ibb.co/GCCdy8t/womens.png',
                    id : 4
                },
                {
                    title : 'Smart Watches',
                    size : 'large',
                    img : 'https://i.ibb.co/R70vBrQ/men.png',
                    id : 5
                },
            
            ]
        }
    }

    render() {

        return(
            <div className="directory-menu">
                {
                    this.state.sections.map((section)=>(
                        <MenuItem key = {section.id} title= {section.title} img={section.img} size={section.size}></MenuItem>
                    ))
                }
            </div>
        )
        
    }
}

export default Directory;