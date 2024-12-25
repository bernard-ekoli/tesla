import React from 'react'
import './index.css'
import globe from '../asset/Image/custom/globe.png'
import { useState, useEffect, useRef } from 'react'
import stealthGrey from '../asset/Image/custom/Arch/sGrey.avif'
import pearlWhite from '../asset/Image/custom/White/white.avif'
import blue from '../asset/Image/custom/Blue/blue.avif'
import black from '../asset/Image/custom/Black/black.avif'
import red from '../asset/Image/custom/Red/red.avif'
import silver from '../asset/Image/custom/Silver/silver.avif'
import wheel1 from '../asset/Image/custom/10010.png'
import wheel2 from '../asset/Image/custom/10020.png'
import blackInterior from '../asset/Image/custom/10009.png'
import whiteinterior from '../asset/Image/custom/10008.png'
import sdVidImage from '../asset/Image/custom/driveVid/10054.jpeg'
import charger1 from '../asset/Image/custom/10007.png'
import charger2 from '../asset/Image/custom/10006.png'
import { imageObj } from './images'
const Orderindex = () => {
    /*     useEffect(() => {
            let scrollCon = document.getElementById('orderIndex');
            scrollCon.onscroll = () => console.log('bruh')
        }, []) */
    let [chanImage, setchanImage] = useState(0)
    const [isFading, setIsFading] = useState(false);
    let [changeCarCol, setChangeCC] = useState(0)
    let [winWidth, setWinWidth] = useState((prev) => prev = window.innerWidth)
    let [border, setBorder] = useState(0)
    let [checkImgRes, setCheckImgRes] = useState(null)
    function addBorder(index) {
        setBorder(index)
    }
    let defaultWidth = 1200
    useEffect(() => {
        setWinWidth((prev) => prev = window.innerWidth)
        if (winWidth > defaultWidth) {
            setCheckImgRes(true)
        } else if (winWidth < defaultWidth) {
            setCheckImgRes(false)
        }
    }, [])
    let [fullImg, setFullImg] = useState(null)
    let disFullCar = document.getElementById('imgFull');
    return (
        <div id="orIndex">
            <div id="apr">
                <span>0% APR available for qualified buyers</span>
                <div>{'>'}</div>
            </div>
            <div id="teslaLogo">
                <div id="tesName">
                    <svg
                        className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
                        viewBox="0 0 342 35"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                    </svg>
                </div>
                <div id="loc">
                    <div id="locImg">
                        <img src={globe} alt="" />
                    </div>
                    <span>US</span>
                </div>
            </div>
            <div id="orderIndex">
                <div id="carsViews">
                    <div id="fullCarImg"
                        onClick={
                            () => {
                                setFullImg(true)
                                /* if (fullImg === true) {
                                    disFullCar.style.display = 'flex'
                                    setFullImg(false)
                                } */
                            }
                        }
                    >
                        <svg class="tds-icon tds-icon-popout tds-icon-btn tds-icon-btn--small tds-o-icon-btn" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M19.25 4h-3.5a.75.75 0 0 0 0 1.5h2.75v2.75a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75M4.75 20a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v2.75h2.75a.75.75 0 0 1 0 1.5z"></path></svg>
                    </div>
                    <div id="carView">

                        <div className='moveImage'
                            onClick={
                                () => {
                                    setIsFading(true); // Start fade-out
                                    setTimeout(() => {
                                        setchanImage((prevChanImage) =>
                                            prevChanImage === 0 ? imageObj.lowRes[changeCarCol].img1.length - 1 : prevChanImage - 1
                                        );
                                        setIsFading(false); // Start fade-in
                                    }, 500); // Match transition duration (2s)
                                }
                            }
                        >{'<'}</div>
                        <div id="carImages">
                            <img
                                src={checkImgRes === true ? imageObj.highRes[changeCarCol].img1[chanImage] : imageObj.lowRes[changeCarCol].img1[chanImage]}
                                alt=""
                                className={isFading ? 'fading' : ''}
                            />
                        </div>
                        <div className='moveImage'
                            onClick={() => {
                                setIsFading(true); // Start fade-out
                                setTimeout(() => {
                                    setchanImage((prevChanImage) => (prevChanImage + 1) % imageObj.lowRes[changeCarCol].img1.length);
                                    setIsFading(false); // Start fade-in
                                }, 500); // Match transition duration (2s)
                            }}
                        >{'>'}</div>
                    </div>
                </div>
                <div id="carModel">
                    <div id="carName">Model Y</div>
                    <div id="carSpeed">
                        <span><b><span>337mi</span></b>
                            <span>Range (EPA est.)</span>
                        </span>
                        <span><b><span>135mph</span></b>
                            <span>Top SPeed</span>
                        </span>
                        <span><b><span>6.5sec</span></b>
                            <span>0-60 mph</span>
                        </span>
                    </div>
                    <div id="classification">
                        <div id="classificationHead">
                            <div id="cHDiv">
                                <span>Cash</span>
                                <span>Lease</span>
                                <span>Finance</span>
                            </div>
                        </div>
                        <div id="classificationTypes">
                            <div id="CTChild">
                                <span>Long Range Rear-Wheel Drive</span>
                                <span>$31,490</span>
                            </div>
                            <div id="CTChild">
                                <span>Long Range All-Wheel Drive</span>
                                <span>$34,490</span>
                            </div>
                            <div id="CTChild">
                                <span>Perfomance All-Wheel Drive</span>
                                <span>$37,990</span>
                            </div>
                        </div>
                        <span>
                            <input type="checkbox" />
                            Include est. incentivess of $7,500 and 5-Year gas savings of $6,000 <br /><br /><b><u>Edit Savings</u></b>
                        </span>
                        <div>
                            <button>Feature Details</button>
                        </div>
                    </div>
                    <div id="carColor">
                        <div id="ccHead">
                            <span>Included</span>
                            <span>{imageObj.lowRes[changeCarCol].name}</span>
                        </div>
                        <div id="carColorImage">
                            <div id="ccimage1" onClick={() => {
                                setChangeCC(0)
                                addBorder(0)
                            }} style={{ border: border === 0 ? '2px solid black' : 'none' }}>
                                <img src={stealthGrey} alt="" />
                            </div>
                            <div id="ccimage2" onClick={() => {
                                setChangeCC(1)
                                addBorder(1)
                            }} style={{ border: border === 1 ? '2px solid black' : 'none' }}>
                                <img src={pearlWhite} alt="" />
                            </div>
                            <div id="ccimage3" onClick={() => {
                                setChangeCC(2)
                                addBorder(2)
                            }} style={{ border: border === 2 ? '2px solid black' : 'none' }}>
                                <img src={blue} alt="" />
                            </div>
                            <div id="ccimage4" onClick={() => {
                                setChangeCC(3)
                                addBorder(3)
                            }} style={{ border: border === 3 ? '2px solid black' : 'none' }}>
                                <img src={black} alt="" />
                            </div>
                            <div id="ccimage5" onClick={() => {
                                setChangeCC(4)
                                addBorder(4)
                            }} style={{ border: border === 4 ? '2px solid black' : 'none' }}>
                                <img src={red} alt="" />
                            </div>
                            <div id="ccimage6" onClick={() => {
                                setChangeCC(5)
                                addBorder(5)
                            }} style={{ border: border === 5 ? '2px solid black' : 'none' }}>
                                <img src={silver} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="carWheels">
                        <div id="cWHead">
                            <span>Included</span>
                            <span>19'' Gemini Dark Wheels</span>
                        </div>
                        <div id="cWImage">
                            <div id="cwImageMain">
                                <img src={wheel1} alt="" />
                            </div>
                            <div id="cwImageMain">
                                <img src={wheel2} alt="" />
                            </div>
                        </div>
                        <span>All-Season Tires <br />Range (EPA est.) : 337mi</span>
                    </div>
                    <div id="towing">
                        <span>Tow Package</span>
                        <span>Tow Up to 3,500lbs with a class II steel tow bar</span>
                        <div id='towingInput'>
                            <div>
                                <input type='checkbox' />
                                <span>Tow Hitch</span>
                                <span>$1,000</span>
                            </div>
                        </div>
                    </div>
                    <div id="interior">
                        <div id="interiorHead">
                            <span>Included</span>
                            <span>All Black Interior</span>
                        </div>
                        <div id="interiorColor">
                            <div><img src={blackInterior} alt="" /></div>
                            <div><img src={whiteinterior} alt="" /></div>
                        </div>
                        <span>Five Seat Interior</span>
                        <div id="buttonParent">
                            <button>Feature Details</button>
                        </div>
                    </div>
                    <div id="selfDriving">
                        <div id="selfDriveHead">
                            <span>Full Self-Driving (Supervised)</span>
                            <span>Your car will be able to drive itself almost anywhere with minimal driver intervention</span>
                        </div>
                        <div id="selfDriveInput">
                            <div>
                                <input type="checkbox" />
                                <span>Full Self-Driving</span>
                                <span>$8,000</span>
                            </div>
                        </div>
                        <div id="sdVideo">
                            <div id="watchVideo">
                                <div id="vidImg">
                                    <img src={sdVidImage} alt="" />
                                </div>
                                <div id="vidText">
                                    <span>Watch a Video</span>
                                    <span>See Full Self-Driving in Action</span>
                                </div>
                            </div>
                        </div>
                        <div id="watchVidText">
                            <span>
                                Software options are excluded from the federal tax credit price cap
                            </span>
                            <span>
                                Currently enabled features require active driver supervisin and do not make the vehicle autonomours.
                                The activation and use of these features are dependent on development and regulatory approval, which may take longer in some jurisdictions.
                            </span>
                        </div>
                    </div>
                    <div id="charging">
                        <div id="chargingHead">
                            <span>Charging</span>
                            <span>
                                Every Tesla includes access to the largest global Supercharging network
                            </span>
                        </div>
                        <div id="chargeImage">
                            <div id="ciOne">
                                <div id="inp">
                                    <input type="checkbox" />
                                </div>
                                <div id="cBIOImage">
                                    <div>
                                        <img src={charger1} alt="" />
                                    </div>
                                    <div>$420</div>
                                </div>
                                <div id="checkText">
                                    <span>Home Charger</span>
                                    <span>Up to 44 mi range /hr, install required</span>
                                </div>
                            </div>
                            <div id="ciOne">
                                <div id="inp">
                                    <input type="checkbox" />
                                </div>
                                <div id="cBIOImage">
                                    <div>
                                        <img src={charger2} alt="" />
                                    </div>
                                    <div>$250</div>
                                </div>
                                <div id="checkText">
                                    <span>Mobile Charger</span>
                                    <span>Up to 30 mi range /hr, plug into any outlet</span>
                                </div>
                            </div>
                        </div>
                        <div id="chargBut">
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div id="accessories">
                        <span>Accessories</span>
                        <div id='childAcce'>
                            <div>
                                <div><input type="checkbox" /></div>
                                <span>Center Console Trays</span>
                                <span>$35</span>
                            </div>
                            <div>
                                <div><input type="checkbox" /></div>
                                <span>Sunshade</span>
                                <span>$105</span>
                            </div><div>
                                <div><input type="checkbox" /></div>
                                <span>All-Weather interior Liners</span>
                                <span>$225</span>
                            </div><div>
                                <div><input type="checkbox" /></div>
                                <span>Parcel Shelf</span>
                                <span>$85</span>
                            </div>
                        </div>
                        <div><button>Learn More</button></div>
                    </div>
                    <div id="deliveryZip">
                        <span>Enter Delivery ZIP</span>
                        <div>
                            <input type="text" placeholder='Enter Delivery ZIP' />
                            <button>Update</button>
                        </div>
                    </div>
                    <div id="payment">
                        <button>Order with card</button>
                    </div>
                </div>
                <div id="footCar"></div>
            </div>
            <div id="imgFull" className={fullImg ? 'chekers' : 'slideOut'}>
                <span
                    onClick={()=>{
                        setFullImg(prev => prev = false)
                        console.log(fullImg)
                        if(fullImg === false){
                            disFullCar.style.display = 'none'
                            setFullImg(true)
                        }
                    }}
                >X</span>
                <div id="carView">
                    <div className='moveImage'
                        onClick={
                            () => {
                                setIsFading(true); // Start fade-out
                                setTimeout(() => {
                                    setchanImage((prevChanImage) =>
                                        prevChanImage === 0 ? imageObj.lowRes[changeCarCol].img1.length - 1 : prevChanImage - 1
                                    );
                                    setIsFading(false); // Start fade-in
                                }, 500); // Match transition duration (2s)
                            }
                        }
                    >{'<'}</div>
                    <div id="carImages">
                        <img
                            src={checkImgRes === true ? imageObj.highRes[changeCarCol].img1[chanImage] : imageObj.lowRes[changeCarCol].img1[chanImage]}
                            alt=""
                            className={isFading ? 'fading' : ''}
                        />
                    </div>
                    <div className='moveImage'
                        onClick={() => {
                            setIsFading(true); // Start fade-out
                            setTimeout(() => {
                                setchanImage((prevChanImage) => (prevChanImage + 1) % imageObj.lowRes[changeCarCol].img1.length);
                                setIsFading(false); // Start fade-in
                            }, 500); // Match transition duration (2s)
                        }}
                    >{'>'}</div>
                </div>
            </div>
        </div>
    )
}
export default Orderindex;