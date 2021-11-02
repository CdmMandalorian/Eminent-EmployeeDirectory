function Sort(props) {
    return (
            <div className="form-group my-3">
                <select onChange={props.handleSortChange} className="form-select form-control" id="select-sort-field">
                    <option value="">Sort By...</option>
                    <option value="firstNameAsc">First Name (Asc.)</option>
                    <option value="firstNameDesc">First Name (Desc.)</option>
                    <option value="lastNameAsc">Last Name (Asc.)</option>
                    <option value="lastNameDesc">Last Name (Desc.)</option>
                </select>
            </div>           
    );
}

export default Sort;