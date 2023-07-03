import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeDescription, changeName } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addCourse({name,description,cost})); 
  }

  return (
    <div className="courseForm panel">
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              onChange={(e) => dispatch(changeName(e.target.value))}
              className="input is-expanded"
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Description</label>
            <textarea 
            onChange={(e) => dispatch(changeDescription(e.target.value))}
            className="input is-expanded" 
            value={description}
            />
          </div>
          <div className="field">
            <label className="label">Price</label>
            <input type="number" 
            onChange={(e) => dispatch(changeCost(parseInt(e.target.value)))}
            className="input is-expanded" 
            value={cost}
            />
          </div>
          <div className="field">
            <button className="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
