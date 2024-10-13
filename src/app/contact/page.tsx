import React from 'react';
import styles from './contact.module.css'

function contactpage (){
    return <div className={styles.contactContainer} >
         <h1 className={styles.contactHeading}>Contact Us</h1>
        <ul  className={styles.contactList}>  
            <li className={styles.contactItem}  ><h4 >Facebook</h4></li>
            <li  className={styles.contactItem} ><h4  >Instagram</h4></li>
            <li className={styles.contactItem}  ><h4>whatsapp</h4></li>
           
        </ul>
    </div>
}

export default contactpage;