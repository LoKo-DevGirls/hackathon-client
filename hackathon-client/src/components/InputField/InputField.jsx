export const InputField = (props) => {
    const { error, handleChange, label, name, pattern } = props;

    return (
        <div className={styles.InputField}>
            <label htmlFor={name}>{label}</label>
            <input
                required
                name={name}
                pattern={pattern}
                placeholder={label}
                type="text"
                onChange={(e) => handleChange(e)}
            />
            <span className={styles.error}>{error}</span>
        </div>
    );
};
