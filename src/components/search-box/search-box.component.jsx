import "./search-box.styles.css";

export const SearchBox = ({ className, placeholder, onSearchChangeHandler }) => (
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
    />
);
