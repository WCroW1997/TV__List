import React, { Component } from 'react'
import {AiFillStar} from 'react-icons/ai'

export class Banner extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
            <img className='wrapper__img' src='' alt='' />
            <div className='wrapper__text'>
                <h2 className='wrapper__title'>Title</h2>
                <p className='wrapper__description'>Desc</p>
                <div className='wrapper__rating'>
                    <AiFillStar/>
                    <p>9.0/10</p>
                </div>
                <button className='btn btn__watch'>Смотреть</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Banner