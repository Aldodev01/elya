import React from "react";
import "./VideoFooter.css";
import disc from "../assets/disc.png";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@Aldodevv</h3>
        <p>hihi, nih buat Ria</p>

        <div className="videoFooterTicker">
          <span className="material-icons">graphic_eq</span>

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Aldo - netnet teronet</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img src={disc} alt="" className="videoFooterDisc" />
    </div>
  );
}

export default VideoFooter;
