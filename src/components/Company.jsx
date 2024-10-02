import React from 'react'
import { Company1, Company2, Company3, Company4, Company5, Company6 } from '../assets/images/icon'

export const Company = () => {
  return (
    <section className='py-[140px]'>
    <div className='containers'>
    <div>
    <h2 className='text-[32px] font-bold leading-[41px] mb-[40px] text-[#244D4D] text-center'>Trusted by 20,000+ companies</h2>
    <div className='md:flex w-[100%] flex items-center justify-between'>
    <a target='_blank' href='https://www.mastercard.us/en-us.html'>
    <Company1/>
    </a>
    <a target='_blank' href='https://ru.airbnb.com/?_set_bev_on_new_domain=1727541193_EANTNlNDIzMjQ2MT'>
    <Company2/>
    </a>
    <a target='_blank' href='https://www.uber.com/'>
    <Company3/>
    </a>
    <a target='_blank' href='https://www.paypal.com/uz/home'>
    <Company4/>
    </a>
    <a target='_blank' href='https://usa.visa.com/'>
    <Company5/>
    </a>
    <a target='_blank' href='https://stripe.com/'>
    <Company6/>
    </a>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Company
