import { useSelector, useDispatch } from "react-redux";
import { getFilterValue } from "../../redux/phonebook/phonebook-selectors";
import * as actions from "../../redux/phonebook/phonebook-actions";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.changeFilter(e.target.value));
  };
  return (
    <label>
      Filter by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;
