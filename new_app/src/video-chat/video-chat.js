import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons.js';
/**
 * @customElement
 * @polymer
 */
class VideoChat extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        app-toolbar {
          background-color: #000;
          color: #fff;
          height: 5%;
        }

        #theirVideo {
          height: 80%;
        }

        #myVideo {
          position: absolute;
          right: 20px;
          bottom: 20px;
          width: 200px;
          transform: scaleX(-1);
        }
      </style>
      
      <app-toolbar>
        <div main-title>My ID: [[myId]] </div>
        <div>Their ID: [[theirId]] </div>
        <paper-icon-button on-tap="refreshTheirId" style="color: blue;" icon="refresh"></paper-icon-button>
        <paper-icon-button on-tap="call" style="color: green;" icon="communication:call"></paper-icon-button>
        <paper-icon-button on-tap="callEnd" style="color: red;" icon="communication:call-end"></paper-icon-button>
      </app-toolbar>
      
      <video id="theirVideo" autoplay></video>
      <br/>
      <video id="myVideo" muted="true" autoplay></video>
    `;
  }

  refreshTheirId() {
    console.log("Refresh called!");
  }

  call() {
    console.log("Call called!");
  }

  callEnd() {
    console.log("Call end called!");
  }

  setUpMyVideo() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    const boundSetStream = this.setStream.bind(this);
    navigator.getUserMedia(
      {audio: true, video: true}, 
      function(stream) {
        boundSetStream(stream);
      }, 
      function(){ console.log("Error getting local stream."); });
  }

  setStream(stream) {
    this.$.myVideo.srcObject = stream;
  }

  static get properties() {
    return {
      myId: {
        type: String,
        value: "abc"
      },
      theirId: {
        type: String,
        value: "xyz"
      }
    };
  }
}

window.customElements.define('video-chat', VideoChat);
