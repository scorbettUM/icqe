import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator'
import {style, textStyle, inputContainer, inputStyle} from './LocalStyles/AskStyles'
import {TransitionComponent} from '../Helpers/TransitionHoc'

const Ask = (props) => {
  return(
    <div style={inputContainer}>
      <div style={textStyle}>
        <p>Ask your javascript coding question below...</p>
      </div>
      <div style={inputContainer}>
        <form onSubmit={(event) => props.submitQuestion(event)}>
        {
          props.status !== 'ready' ?
          <MuiThemeProvider>
            <RefreshIndicator
              size={30}
              left={30}
              top={0}
              loadingColor="#3498DB"
              status="loading"
              style={style.refresh}
            />
          </MuiThemeProvider> :
          <MuiThemeProvider>
            <RefreshIndicator
                  percentage={100}
                  size={30}
                  left={30}
                  top={0}
                  loadingColor="#AED6F1" // Overridden by percentage={100}
                  status="loading"
                  style={style.refresh}
                />
          </MuiThemeProvider>

        }
          <input style={inputStyle} onChange={(event) => props.onTextChange(event)}/>
        </form>
      </div>
    </div>
  )
}

export default TransitionComponent(Ask)
