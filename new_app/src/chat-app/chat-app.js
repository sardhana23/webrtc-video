import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/font-roboto/roboto.js';
import '@polymer/iron-icons/iron-icons.js';
import '../sign-in/sign-in.js'
import '../video-chat/video-chat.js'

/**
 * @customElement
 * @polymer
 */
class ChatApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-family: Roboto, Noto, sans-serif;
        }

        app-toolbar {
          background-color: #4285f4;
          color: #fff;
          margin-bottom: 2px;
        }
      </style>
      <app-toolbar>
        <div main-title>Soma's super secret chat</div>
        <paper-icon-button icon="input" on-tap="logoutHandler"></paper-icon-button>
      </app-toolbar>

      <iron-pages selected="[[pageNumber]]">
        <sign-in></sign-in>
        <video-chat></video-chat>
      </iron-pages>
    `;
  }

  logoutHandler() {
    this.pageNumber = (this.pageNumber + 1) % 2;
    console.log(this.pageNumber);
  }

  static get properties() {
    return {
      pageNumber: {
        type: Number,
        value: 1
      }
    };
  }
}

window.customElements.define('chat-app', ChatApp);
