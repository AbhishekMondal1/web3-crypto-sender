import React, { useContext } from 'react'
import './welcome.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';
import { TransactionContext } from '../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.001"
        value={value}
        onChange={() => { handleChange }}
        className='input-text white-glassmorphism'
    />

)

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext)


    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message} = formData;
        e.preventDefault();
        // if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction()
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
                    {!currentAccount && (<button
                        type='button'
                        onClick={connectWallet}
                        className='wallet-button'
                    >
                        <p className='wallet-button-text'>Connect Wallet</p>
                    </button>)}
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
                                    <SiEthereum fontSize={21} color='#fff' />
                                </div>
                                <BsInfoCircle fontSize={17} color='#fff' />
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
                        <Input placeholder="address To" name="addressTo" type='text' handleChange={handleChange} />
                        <Input placeholder="amount (ETH)" name="amount" type='number' handleChange={handleChange} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type='text' handleChange={handleChange} />
                        <Input placeholder="Enter message" name="message" type='text' handleChange={handleChange} />
                        <div className='form-end-line'></div>
                        {false ? (
                            <Loader />
                        ) : (
                            <button type='button'
                                onClick={handleSubmit}
                                className='send-ether-button'
                            >Send Now
                            </button>
                        )}
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
