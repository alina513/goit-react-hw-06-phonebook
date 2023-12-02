import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const Contact = ({value}) => { 
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(value));
  };
  return(
  <li className={css.item}>
    {value.contact.name}:{value.contact.number}
    <button
      className={css.button}
      type="button"
      onClick={handleDelete}
    >
      Delete
    </button>
  </li>
);}



