import React, { useContext } from 'react';
import './transactions.css';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword })
    return (
        <div className='transaction-card-size'>
            <div className='transaction-card-main'>
                <div className='transaction-card-body'>
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener norefer'>
                        <p className='transaction-para '>from {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener norefer'>
                        <p className='transaction-para'>from {shortenAddress(addressTo)}</p>
                    </a>
                    <p className='transaction-para'>Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className='transaction-para'>Message: {message}</p>
                        </>)}
                </div>
                <img src={gifUrl || url} alt="gif" className='w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover' />

                <div className='transaction-time-wrapper'>
                    <p className='transaction-time'>{timestamp}</p>
                </div>
            </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className='transaction-container gradient-bg-transactions'>
            <div className='transaction-wrapper'>
                {currentAccount ? (
                    <h3 className='transaction-heading'>Latest Transactions</h3>
                ) : (<h3 className='transaction-heading'>Connect your account to see the latest transactions</h3>)}

                <div className='transaction-card-wrapper'>
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transactions
