import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

import { fadeIn, fadeOut } from 'react-animations';
import { StyleSheet, css } from 'aphrodite/no-important';

import '../css/HtmlStyle.css';

function Files(props) {

  const imageStyle = {
    zIndex:"200",
    position: "absolute",
    float: "left",
    margin: "0",
    marginLeft: "6px",
    padding: "12px",
    maxWidth: "30px",
    /*height: 30px;*/
    opacity: "1.0",
    marginTop: "6px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.image})`
  }
  const styles = StyleSheet.create({

    fadeIn: {
      animationName: fadeIn,
      animationDuration: '0.3s'
    },
    //
    // separator: {
    //   '-webkit-box-shadow':"inset 2px 0px 1px -2px #333",
    //   '-moz-box-shadow':"inset 2px 0px 1px -2px #333",
    //   'box-shadow':"inset 2px 0px 1px -2px #333",
    // }

  })

  var newText = props.text;
  if (props.text.length > 22) {
    newText = props.text.substring(0, 18) + " ...";
  }

  if (props.indexed == 0) {
    return (

      <div className  = "fileStyle2" style = {{color:"#333333",}} onClick={props.onClick} key = {"1"}>
          <div style={imageStyle} ></div>
          {/*  An image is displayed to the left of the text*/}
          <div  className={css(styles.separator)}  >

            {/* The backgroundColor is in a separate div than the text */}
            <div className= "fileStyle" style = {{color:"#333333",backgroundColor: "#FFFFFF"}} ></div>
          </div>

          <div id="filesDiv">
            <p>{newText}</p>
          </div>
        </div>

    );
  } else {
    return (
      <div key = {props.animate} className={css(styles.fadeIn)} >

        <div className = "fileStyle2" style = {{color:"#FFFFFF",}} onClick={props.onClick} key = {"1"}>
          <div style={imageStyle} ></div>
          <div key = {props.animate} className={css(styles.separator)} >
            {/*  Normally the fadein animation goes above, but that causes issues with firefox*/}


            <div className = "fileStyle" style = {{color:"#FFFFFF",backgroundColor: "#116CD6"}} ></div>
          </div>

          <div id="filesDiv">
            <p>{newText}</p>
          </div>
        </div>
        </div>

    );

    // fileStyle = {
    //   // zIndex:"0",
    //
    //   position: "absolute",
    //   height: "36px",
    //   width: "auto",
    //   color: "#FFFFFF",
    //   backgroundColor: "#116CD6",
    // }
    // fileStyle2 = {
    //   height: "36px",
    //   width: "auto",
    //   color: "#FFFFFF",
    // }
  }


}

class FilesBar extends Component {

  renderFile(i) {
    var indexReturn = 0;
    if (i == this.props.fileIndex) {
      indexReturn = 1;
    }
    return (
      <Files
        indexed={indexReturn}
        text={this.props.filesText[i][0]}
        image={this.props.filesImage[i]}
        onClick= {() => this.props.onClick(i)}
        animate = {this.props.animate}
      />);
    }

    numberFilesToRender() {
      //Renders everything in Files, such as Readme, About FinderMe etc
      //combinedRenders array is used so only one return statement is necessary
      var combinedRenders =[];
      for (var i = 0; i < (this.props.filesText).length; i++) {
        combinedRenders.push(this.renderFile(i));

      }
      return (
        <div>
          {combinedRenders}
        </div>
      );


    }

    render() {

      return (
        <div>
          {/* {this.renderFile(0)} */}

          {/* {this.renderFile(1)} */}
          {this.numberFilesToRender()}
        </div>
      );
    }

  }

  export default FilesBar;
