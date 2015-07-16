require('rc-checkbox/assets/index.css');
var React = require('react');
var Checkbox = require('rc-checkbox');

function onChange(e) {
  console.log('checkbox checked:' + (e.target.checked));
}


var Test = React.createClass({
  getInitialState() {
    return {
      disabled: false
    }
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled
    });
  },
  render() {
    return <div style={{margin: 20}}>
      <div>
        <p>
          <label>
            <Checkbox onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; rc-checkbox
          </label>
        &nbsp;&nbsp;

        </p>

        <p>
          <label>
            <input type='checkbox' onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; native
          </label>
        &nbsp;&nbsp;
        </p>
      </div>

      <div>
        <p>
          <label>
            <Checkbox checked={true} onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; rc-checkbox
          </label>
        &nbsp;&nbsp;

        </p>

        <p>
          <label>
            <input type='checkbox' checked={true} onChange={onChange}
              disabled={this.state.disabled}/>

          &nbsp; native
          </label>
        &nbsp;&nbsp;
        </p>
      </div>

      <button onClick={this.toggle}>toggle disabled</button>

    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));
