import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is one that allows people to buy and sell
           physical goods, services, and digital products over the internet 
           rather than at a brick-and-mortar location. Through an e-commerce 
           website, a business can process orders, accept payments, manage 
           shipping and logistics, and provide customer service.</p>

           <p>An e-commerce platform is a software that enables the commercial
              process of buying and selling over the internet. Key takeaways: An 
              e-commerce platform needs a search feature that lets customers find 
              a specific product, a cart feature that lets them manage their order,
               and a payment feature.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
