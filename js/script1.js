class Hello extends React.Component {
    render() {
      return React.createElement('h1', null, 'Hello World');
    }
}
  
ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('root')
  );