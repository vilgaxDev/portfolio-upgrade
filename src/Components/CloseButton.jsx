import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { StyleSheet, css } from 'aphrodite';


function Close(props) {
  //Red closebutton
  return(
    <div className={css(styles.closeIcon)} onClick={props.onClick}></div>
  );

}

function Minimize(props) {
  //Yellow minimize button
  return (
    <div className={css(styles.minIcon)} onClick={props.onClick}></div>
  );

}

function Expand(props) {
  //Green expand button
  return (
    <div className={css(styles.expIcon)} onClick={props.onClick}></div>
  );

}

class CloseButton extends Component {

  trashTrue() {
    if (!this.props.trash) {
      // Each of the three navigaiton buttons returns a different response [0, 1, 2] for identification
      return (
        <div>
          <Close
            trash = {this.props.trash}
            onClick = {() => this.props.onClick(0)}
          />

          <Minimize
            trash = {this.props.trash}
            onClick = {() => this.props.onClick(1)}
          />

          <Expand
            trash = {this.props.trash}
            onClick = {() => this.props.onClick(2)}
          />
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        {this.trashTrue()}


      </div>

    );
  }
}

const styles = StyleSheet.create({
  closeIcon: {
    marginTop: "9px",
    marginLeft: "10px",
    width: "12.5px",
    height:"12.5px",
    backgroundColor:"#FC615D",
    borderRadius: "10px",
    position: "absolute",
    fontFamily: "RalewayReg",
    fontSize: "14px",
    cursor: "pointer",

  },
  minIcon: {
    marginTop: "9px",
    marginLeft: "30px",
    width: "12.5px",
    height:"12.5px",
    backgroundColor:"#FDBD41",
    borderRadius: "10px",
    position: "absolute",
    fontFamily: "RalewayReg",
    fontSize: "14px",
    cursor: "pointer",

  },
  expIcon: {
    marginTop: "9px",
    marginLeft: "50px",
    width: "12.5px",
    height:"12.5px",
    backgroundColor:"#34C749",
    borderRadius: "10px",
    position: "absolute",
    fontFamily: "RalewayReg",
    fontSize: "14px",
    cursor: "pointer",

    // opacity: "3",
  },
}
)





export default CloseButton
