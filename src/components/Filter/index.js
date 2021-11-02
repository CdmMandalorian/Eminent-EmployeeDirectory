function Filter(props) {
    return (
        <div>
            <div className="form-group my-3">
                <select onChange={props.handleFilterField} className="form-select form-control" id="select-filter-field">
                    <option value="">Filter By...</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    
                </select>
            </div>

            <div className="form-group">
                <input 
                    onChange={props.handleFilterChange} 
                    type="text" 
                    className="form-control" 
                    id="input-filter-value" 
                    placeholder="Contains..."
                />
            </div>
        </div>            
    );
}

export default Filter;