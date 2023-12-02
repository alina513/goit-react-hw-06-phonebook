import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';


export const Filter = () =>{ 
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);

  const handleFilterChange = event => { return dispatch(updateFilter(event.target.value));
  };

  return(
  <div className={css.filter}>
    <label className={css.label} htmlFor="filter">
      Find contacts by name
    </label>
    <input
      className={css.input}
      type="text"
      name="filter"
      id="filter"
      value={filters}
      onChange={handleFilterChange}
      required
    />
  </div>
);}
