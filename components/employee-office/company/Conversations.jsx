/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Conversations = () => {
  return (
    <div>
        <div className="intro">
              <h4 className='text-gray-400 '>Conversations</h4>
        </div>
        <div className="chat-list-of-other-employees">
            <div className="chat-list-of-other-employees-item">
                <div className="chat-list-of-other-employees-item-avatar">
                    <img 
                    src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                    alt="img"
                    className='w-[30px]'
                    />
               </div>
                <div className="chat-list-of-other-employees-item-content">
                    <div className="chat-list-of-other-employees-item-content-name">
                        <h5>John Doe</h5>
                        <p>Front-end developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Conversations