import React from 'react'
import {Computer} from '../../types/index';


export default function Card({computer}:{computer:Computer}){
    return(
        <div className='computer-card'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10'>
                        <h2>{computer.Name}</h2>
                    </div>
                    <div className='col-md-2'>
                        <div className={`isOn ${computer.IsOn ? 'on' : 'off'}`}></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='vl'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        Ip: 
                    </div>
                    <div className='col-md-9'>
                        {computer.Ip}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        Mac:
                    </div>
                    <div className='col-md-9'>
                        {computer.Mac}
                    </div>
                </div>
            </div>
        </div>
    )
}