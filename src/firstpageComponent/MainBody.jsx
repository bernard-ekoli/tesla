import React from 'react'
import './CSS/MainBody.css'
import CT from '../asset/Image/cyberTruck.png'
import { useState, useEffect } from 'react';


const MainBody = () => {
    return (
        <>
            <div id="main" className=''>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Model Y
                        </div>
                        <div>
                            0% APR Available
                        </div>
                        <div>
                            Lease Starting at $349/mo<sup>1</sup>
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Model 3
                        </div>
                        <div>
                            0% APR Available
                        </div>
                        <div>
                            Lease Starting at $299/mo<sup>1</sup>
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Model X
                        </div>
                        <div style={{
                            textDecoration: 'none',
                        }}>
                            From $65,990<sup
                                style={{
                                    fontSize: '10px'
                                }}
                            >3</sup>
                        </div>
                        <div style={
                            {
                                boxSizing: 'border-box',
                                paddingLeft: '20px',
                                paddingTop: '10px',
                                paddingRight: '20px',
                                textAlign: 'center',
                                textDecoration: 'underline',
                            }
                        }>
                            After Federal Tax Credit $7,500 and
                            Est. Gas Savings $6,500
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Model S
                        </div>
                        <div style={{
                            textDecoration: 'none',
                        }}>
                            From $68,490<sup
                                style={{
                                    fontSize: '10px'
                                }}
                            >4</sup>
                        </div>
                        <div style={
                            {
                                boxSizing: 'border-box',
                                paddingLeft: '20px',
                                paddingTop: '10px',
                                paddingRight: '20px',
                                textAlign: 'center',
                                textDecoration: 'underline',
                            }
                        }>
                            After Est. Gas Savings $6,500
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='cyberTruck'>
                    <div id="ctFirst">
                        <img src={CT} alt="" />
                    </div>
                    <div id="ctSecond">
                        <button
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.664)',
                                borderRadius: '0px',
                                color: 'white',
                                borderTop: '5px solid grey'
                            }}
                        >ORDER NOW</button>
                        <button
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.664)',
                                borderRadius: '0px',
                                color: 'grey',
                                paddingTop: '13px',
                                border: '1px solid black'
                            }}
                        >LEARN MORE</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Solar Panels
                        </div>
                        <div style={{
                            textDecoration: 'underline',
                        }}>
                            Schedule a Virtual Consultation
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Solar Roof
                        </div>
                        <div style={{
                            textDecoration: 'none',
                        }}>
                            Produce Clean Energy From Your Roof
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Powerwall
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>
                </div>
                <div id='mainBody'>
                    <div id="mBFirst">
                        <div>
                            Accessories
                        </div>
                    </div>
                    <div id="mBSecond">
                        <button id='special'>Shop Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainBody
