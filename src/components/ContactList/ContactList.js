import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
      <ul className={s.list}>{contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
    </li>
  ))}
 
  </ul>
  )
};

export default ContactList;