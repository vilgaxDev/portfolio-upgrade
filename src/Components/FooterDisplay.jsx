import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import Draggable from 'react-draggable'; // The default


class FooterDisplay extends Component {
  render() {
    return(  
      // <Draggable>
          <div id="footer">
            <div id="bottomText">
              <p>Contact me  and we can work together!   <br />Kenbrian Vilgax 2019 ☕</p>
            </div>
          </div>
        // {/* </Draggable> */}
    );
  }
}


export default FooterDisplay;
