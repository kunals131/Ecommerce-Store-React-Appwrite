import React from 'react'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/preview-collection/preview-collection.component';
 
class shopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            collections : SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return <div className='shop-page'>
            {
                collections.map(collection=>{
                    return(
                        <CollectionPreview key = {collection.id}
                        items = {collection.items}
                        title = {collection.title}
                        ></CollectionPreview>
                    )
                })
            }

        </div>
    }
}

export default shopPage