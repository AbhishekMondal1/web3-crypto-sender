import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log({
        provider,
        signer,
        transactionContract
    })
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("")
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' })
    const [isloading, setIsloading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState([])
    const handleChange = (e, name) => {
        console.log(`e ${e.target.value} name ${name}`)
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const getAllTransactions = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const transactionContract = getEthereumContract();
            const availableTransaction = await transactionContract.getAllTransactions();
            const structuredTransactions = availableTransaction.map((transaction) =>({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }))
            console.log(structuredTransactions);
            setTransactions(structuredTransactions);
        } catch (error) {
            console.log(error);
        }
    }
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: "eth_accounts" })
            if (accounts.length) {
                setCurrentAccount(accounts[0])
                getAllTransactions();

            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethrereum object");
        }
    }

    const checkIfTransactionsExists = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transactionCount = await transactionContract.getTransactionCount();

            window.localStorage.setItem("transactionCount", transactionCount)
        } catch (error) {
            console.log(error);
            throw new Error("No ethrereum object");
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: "eth_requestAccounts" })
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethrereum object");
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const { addressTo, amount, keyword, message } = formData;

            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            setIsloading(true);
            console.log(`loading - ${transactionHash.hash}`)
            await transactionHash.wait();
            setIsloading(false);
            console.log(`success - ${transactionHash.hash}`)

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());
            window.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No ethrereum object");
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExists();
    }, [])
    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, isloading }}>
            {children}
        </TransactionContext.Provider>
    )
}