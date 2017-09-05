import Autosuggest from 'react-autosuggest';


export default class AutoSuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      userNames : this.props.userNames
    };
    this.getSuggestions = this.getSuggestions.bind(this);

  }

  getSuggestions(value){
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.userNames.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  // Use your imagination to render suggestions.
  renderSuggestion(suggestion){
     return (
       <div>
         {suggestion.name}
       </div>
     )
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    var _value = this.getSuggestions(value);
    this.setState({
      suggestions: _value
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'search..',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
