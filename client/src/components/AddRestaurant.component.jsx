import React from 'react';

export const AddRestaurant = () => {
  return(
    <div className="mb-4">
      <form>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Location"/>
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disbled>Price Range</option>
              <option value="$"></option>
              <option value="$$"></option>
              <option value="$$$"></option>
              <option value="$$$$"></option>
              <option value="$$$$$"></option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}
