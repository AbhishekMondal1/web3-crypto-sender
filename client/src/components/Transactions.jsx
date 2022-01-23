import React, { useContext } from 'react';
import './transactions.css';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import dummyData from '../utils/dummyData';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
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

                    <div className='transaction-time-wrapper'>
                        <p className='transaction-time'>{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext);

    return (
        <div className='transaction-container gradient-bg-transactions'>
            <div className='transaction-wrapper'>
                {currentAccount ? (
                    <h3 className='transaction-heading'>Latest Transactions</h3>
                ) : (<h3 className='transaction-heading'>Connect your account to see the latest transactions</h3>)}

                <div className='transaction-card-wrapper'>
                    {dummyData.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
                {/* Latest Transactions*/}
                { /*Connect  your account to see your latest transactions.*/}

            </div>
        </div>
    )
}

export default Transactions
