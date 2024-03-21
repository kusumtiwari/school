function TextInput({ value, onChange, placeholder, pattern }) {
  return (
    <input
      type="text"
      className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-headingColor focus:border-transparent"
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      pattern={pattern}
    />
  );
}

export default TextInput;
