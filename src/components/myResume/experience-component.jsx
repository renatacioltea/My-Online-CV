import React from "react";

class ExperienceComponent extends React.Component {

  // we use the constructor because we will work with an initial state
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  // We need a function that handles changing the value of isOpen to false or true. We make methods used in event handlers, using arrow function, to be able to acces "this" without using Bind.
 
  toggleIsOpen = () => {
    const isOpen = this.state.isOpen;

    // The way React notices when we change a state is due to the fact that we call the setState function. It sets the value of state and then calls the render function to update
    
    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    
    const title = this.props.title;
    const content = this.props.content;

    // onClick event handler allows us to call toggleIsOpen method 
  
		const classValue = this.state.isOpen === true ? "experience-component isOpen" : "experience-component"
		
    return (
      <div className={classValue}>
        <div className="title" onClick={this.toggleIsOpen}>
          <h4>{title}</h4>
          <span className="open-button">
            <span className="arrow-down"></span>
          </span>
        </div>
        {this.state.isOpen === true ? <div>{content} </div> :null }
      </div>
    );
  }
}

export default ExperienceComponent;
