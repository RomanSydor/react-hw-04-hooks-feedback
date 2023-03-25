const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          data-feedback={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
