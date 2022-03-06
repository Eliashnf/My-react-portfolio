import React from 'react'
import './loading.css'
import { TailSpin } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='over'>
        <TailSpin
        color='#00BFFF'
        height={100}
        width={100}
        />
    </div>
  )
}

export default Loading