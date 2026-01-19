import React from 'react'

const WorksItem = ({item}) => {
    const hasSecondImage = item.images && item.images.length > 1;

  return (
    <div className='work__card' key={item.id}>
      <div
        className={`img-wrapper ${!hasSecondImage ? "no-hover" : ""}`}
       >

      <img src={item.images[0]} alt="" className='work__img' />
      {
        hasSecondImage && (

          <img src={item.images[1]} className='work__img2' alt="" />
        )
      }
      </div>
      <h3 className="work__title">{item.title}</h3>
      <div className="work__button-container">
        {item.live ? (
          /* Standard Demo Link */
        
                <a style={{cursor:'pointer'}} href={item.live} className="work__button" target='_blank'>Demo <i class='bxr  bx-arrow-right work__button-icon'  ></i>  </a>

        ) : (
          /* Dual Client/Admin Links */
          <>
            {item.client && (
                             <a style={{cursor:'pointer'}} href={item?.client} className="work__button" target='_blank'>Client link <i class='bxr  bx-arrow-right work__button-icon'  ></i>  </a>

            )}
            {item.admin && (
                            <a style={{cursor:'pointer'}} href={item?.admin} className="work__button" target='_blank'>Admin link <i class='bxr  bx-arrow-right work__button-icon'  ></i>  </a>

            )}
          </>
        )}
      </div>
    </div>
  )
}

export default WorksItem
