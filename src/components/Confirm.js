import React ,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component{

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
    const{values:{firstName,lastName,email,occupation,city,bio}}=this.props
    return(
      <div>
    <MuiThemeProvider>
      <React.Fragment>

        <AppBar title="Confirm User Data"/>
        <List>

          <ListItem
            primaryText="firstName"
            secondaryText={firstName}
          />

           <ListItem
            primaryText="Last Name"
            secondaryText={lastName}
          />

           <ListItem
            primaryText="Email"
            secondaryText={email}
          />

           <ListItem
            primaryText="Occupation"
            secondaryText={occupation}
          />

           <ListItem
            primaryText="City"
            secondaryText={city}
          />

           <ListItem
            primaryText="Bio"
            secondaryText={bio}
          />
        
        </List>
       

        <br/>

        <RaisedButton
        label="Confirm and Continue"
        primary={true}
        style={styles.button}
        onClick={this.continue}
/>

 <RaisedButton
        label="Back"
        primary={true}
        style={styles.button}
        onClick={this.back}
/>
      
      
      </React.Fragment>
   </MuiThemeProvider>
    
    </div>
    )
  }
}

const styles={

  button:{
    margin:15

  }
}
export default Confirm