import React from 'react';
export default class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      items:[]
      
    };
  }

  componentDidMount() {
     fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
      console.log(this.state.items)
    })
    .catch(console.log)
  }
  


  render() {
    
      return (
       <div> 
        {this.state.items.map((item) => (
            <div>
              <table border="1">
                <tbody>
                  <tr>
                    <td>
                      <h5>{item.title}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                         {item.copleted && 
                          <span>
                          Completed
                          </span>
                          }
                          {!item.copleted && 
                          <span>
                          Pending
                          </span>
                          }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
      </div>
      );
    }
}