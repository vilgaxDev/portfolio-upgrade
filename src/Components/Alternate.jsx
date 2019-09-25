import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import myInfo from '../Info/PersonalInfo.js';


function renderBar(chart, i) {
  //Creates each bar in a chart
  var classNameStr = "percentage percentage-" + (chart[i+1]); //chart[0] is my name
  return(
    <div>
      <dd className= {classNameStr} ><span className="text" >{chart[i]}</span></dd>

    </div>
  );
}

function createChart(chart) {

  var chartEnclose = [];
  if (chart != "0") {
    for (var i = 0; i < chart.length-1; i++) {
      //Pushes each bar into the total chartEnclose array
      chartEnclose.push(renderBar(chart, i));
      i++
    }

    return (
      //Formatting and outputting the chart
      <div id="chartEnclosure">
        <dl id = "myChardId">
          <dt>{chart[chart.length-1]}</dt>

          {chartEnclose}

        </dl>
      </div>
    );
  }
}


function RenderFiles(props) {
  let files = myInfo.info;
  let groups = myInfo.groupNames;
  const groupStyle = {
    margin: "30px",
    marginLeft:"10px",
    marginTop: "40px",
    color:"#333333",

    textAlign: "left",
    fontFamily: "RalewayBld",
    fontSize: "30px",
  }

  const titleStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    textAlign: "left",
    fontFamily: "RalewayReg",
    fontSize: "25px",
  }

  const subStyle = {
    marginLeft: "10px",
    marginTop: "2px",
    textAlign: "left",
    fontFamily: "RalewayRegIta",
    fontSize: "18px",
  }

  const descStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "40px",
    textAlign: "left",
    fontFamily: "RalewayReg",
    fontSize: "15px",
  }


  //Contains groups and files, ordered by group, file file, group, file, file etc
  var content = [];

  //Iterate and create the groups
  for (var i = 0; i < files.length; i++) {
    content.push(
      <div style = {groupStyle} dangerouslySetInnerHTML={{
        __html: groups[i+1]
      }}></div>
    )

    //Iterate and create the files
    for (var j = 0; j < files[i].length; j++) {

      //Title Text
      content.push(
        <div style = {titleStyle} dangerouslySetInnerHTML = {{
          __html: files[i][j][0]
        }}></div>
      )


      //Subtitle Text
      if (files[i][j][2] == "alternate") {
        content.push(
          <div style = {subStyle} dangerouslySetInnerHTML = {{
            __html: "Getting Started"
          }}></div>
        );
      } else {
        content.push(
          <div style = {subStyle} dangerouslySetInnerHTML = {{
            __html: files[i][j][2]
          }}></div>
        );
      }

      //Description Paragraph Text
      if (files[i][j][2] == "alternate") {
        content.push(
          <div style = {descStyle} dangerouslySetInnerHTML = {{
            __html: files[i][j][1]
          }}></div>
        );
      } else if (files[i][j].length > 7) {
        content.push(createChart(files[i][j][7]));

      } else {
        content.push(
          <div style = {descStyle} dangerouslySetInnerHTML = {{
            __html: files[i][j][3]
          }}></div>
        );
      }

      //Duration and Location Text
      content.push(
        <div style = {descStyle} > Duration: {files[i][j][4]} | Location: {files[i][j][5]}</div>
      );
    }


  }

  //Back Button
  content.push(<p onClick = {props.onClick}>Back</p>)



  return (
    <div>
      {content}
    </div>

  );
}




class Alternate extends Component {
  constructor() {
    super();
  }
  render() {

    var altWidth = "70%"; //altWidth > altRight
    if (this.props.mobile == 1) {
      altWidth = "90%";
    }
    const styles = StyleSheet.create({

      altDisplay: {
        width: altWidth,
        height: "90%",
        background: "white",
        opacity: "0.9",
        color: "#333333",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        overflowY: "scroll",
        '-webkit-overflow-scrolling': "touch",

        marginLeft:"0px",
      },
      backId: {
        textAlign: "center",
        margin: "10px",
        fontFamily: "RalewayReg",
        fontSize: "20px",

      }
    })






    return (
      <div className={css(styles.altDisplay)}>
        <div className={css(styles.backId)}>
          <RenderFiles
            onClick= {() => this.props.onClick(1)}

          />

        </div>
      </div>
    )
  }



}

export default Alternate;
