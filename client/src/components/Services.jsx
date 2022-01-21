import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'
import './services.css';

const ServiceCard = ({ color, title, icon, subtitle }) => {
    return (
        <div className='servcard white-glassmorphism shadow-xl'>
            <div className={`card-icon ${color}`}>
                {icon}
            </div>
            <div className='card-content'>
                <h3 className='card-heading'>{title}</h3>
                <p className='card-para'>{subtitle}</p>
            </div>
        </div >
    )
}

const Services = () => {
    return (
        <div className='wrapper gradient-bg-services'>
            <div className='wrapper2'>
                <div className='content text-gradient'>
                    <h1>Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div className='cards'>
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security Guranteed"
                    icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of products."
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Best exchange rates."
                    icon={<BiSearchAlt fontSize={21} className='text-white' />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of products."
                />
                <ServiceCard
                    color="bg-[#f84550]"
                    title="Fastest Transactions"
                    icon={<RiHeart2Fill fontSize={21} className='text-white' />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of products."
                />
            </div>
        </div>
    )
}

export default Services
