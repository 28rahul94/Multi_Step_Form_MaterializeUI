import React ,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


class Success extends Component{

  continue=e=>{
    e.preventDefault();
    //Process Form
    this.props.nextStep()
  }

  back=e=>{
    e.preventDefault();
    this.props.prevStep()
  }

  render()
  {
    return(
      <div>
    <MuiThemeProvider>
      <React.Fragment>

        <AppBar title="Success"/>
        <h1>Thank you for your Submission</h1>
        <p>You will get an email with further instructions</p>
    
      
      
      </React.Fragment>
   </MuiThemeProvider>
    
    </div>
    )
  }
}



export default Success