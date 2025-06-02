function AddTodo() {
  return (
    <div className="row align-items-center">
      <div className="col-6">
        <input type="text" className="form-control" placeholder="Enter Todo here" />
      </div>
      <div className="col-4">
        <input type="date" className="form-control" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
