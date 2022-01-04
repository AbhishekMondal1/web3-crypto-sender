import React from 'react'
import './welcome.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const Input = ({placeholder, name, type, value, handleChange}) =>(
    <input 
    placeholder={placeholder}
    type={type}
    step="0.001"
    value={value}
    onChange={()=>{handleChange}}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism'    
    />
    
)

const Welcome = () => {

    const connectWallet = () => {

    }

    const handleSubmit = () =>{

    }

    return (
        <div className='welcome-screen-wrapper'>
            <div className='welcome-screen-body'>
                <div className='top-body'>
                    <h1 className='tag-line text-gradient'>
                        Send Crypto <br /> across the world
                    </h1>
                    <p className='tag-line-bottom'>
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>
                    <button
                        type='button'
                        onClick={connectWallet}
                        className='wallet-button'
                    >
                        <p className='wallet-button-text'>Connect Wallet</p>
                    </button>
                    <div className='features-grid'>
                        <div className={`feature-top-left common-style`}>Reliability</div>
                        <div className='common-style'> Security</div>
                        <div className={`feature-top-right common-style`}>Ethereum</div>
                        <div className={`feature-bottom-left common-style`}>Web 3.0</div>
                        <div className='common-style'> Low fees</div>
                        <div className={`feature-bottom-right common-style`}>Blockchain</div>
                    </div>
                </div>
                <div className='send-ether-body'>
                    <div className='ether-card-wrapper eth-card white-glassmorphism'>
                        <div className='ether-card-body'>
                            <div className='ether-card-icons-wrapper'>
                                <div className='ethereum-icon'>
                                    <SiEthereum fontSize={21} color='#fff'/>
                                </div>
                                <BsInfoCircle fontSize={17} color='#fff'/>
                            </div>
                            <div>
                                <p className='eth-address'>
                                    0xab7fb2...
                                </p>
                                <p className='eth-address-text'>
                                    Address
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div className='eth-form blue-glassmorphism'>
                        <Input placeholder="address To" name="addressTo" type='text' handleChange={()=>{}} />
                        <Input placeholder="amount (ETH)" name="amount" type='number' handleChange={()=>{}} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type='text' handleChange={()=>{}} />
                        <Input placeholder="Enter message" name="message" type='text' handleChange={()=>{}} />
                        <div className='form-end-line'></div>
                        {false ? (
                            <Loader/>
                        ): (
                            <button type='button'
                            onClick={handleSubmit}
                            className='send-ether-button'
                            >Send Now
                            </button>
                        )}
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
