import React ,{useEffect ,useState} from 'react'
import { getContact } from '../../helpers/contact'

const CompanyContact = () => {
    
    const [contact, setContact] = useState({
        email: '',
        phoneNumber: '',
        address: ''
      })
    
      useEffect(() => {
       getContact().then((data) => {
         setContact({
           email :  data?.email,
           phoneNumber: data?.phoneNumber,
           address: data?.address
         });
       });
      }, [])
    
    return (
        <div>
            
            <p href='tel:6472891070' className='px-2 py-1'>
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>{contact?.phoneNumber}</p>
              </p>
              <p
                href='mailto:info@argussecurityservices.ca'
                className='px-2 py-1'>
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>{contact?.email}</p>
              </p>
              {/* <img src={phone_logo} alt="Phone Logo" /> */}
              <p>
                {contact?.address}
              </p>

        </div>
    )
}

export default CompanyContact;
