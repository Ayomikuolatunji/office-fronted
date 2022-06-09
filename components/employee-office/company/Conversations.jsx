/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Conversations = () => {
  return (
    <div className='w-[95%] mx-auto mt-8'>
        <div className="intro">
              <h4 className='text-gray-400 '>Conversations</h4>
        </div>
        <div className="chat-list-of-other-employees">
            <div className="chat-list-of-other-employees-item flex items-center">
                <div className="chat-list-of-other-employees-item-avatar space-x-2">
                    <img 
                    src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                    alt="img"
                    className='w-[80px] rounded-full h-[80px]'
                    />
               </div>
                <div className="chat-list-of-other-employees-item-content ml-3">
                    <div className="chat-list-of-other-employees-item-content-name">
                        <h5 className='text-gray-700'>John Doe</h5>
                        <p>Front-end developer and backend</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Conversations