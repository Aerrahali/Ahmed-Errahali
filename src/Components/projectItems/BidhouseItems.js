import React from 'react'

// <a href={item.link2}>{item.icon2}</a>
function BidhouseItems({ menuItem }) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data2">
                            <img src={item.image} alt="" />
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default BidhouseItems;