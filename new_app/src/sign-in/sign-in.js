import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';

/**
 * @customElement
 * @polymer
 */
class SignIn extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
       		display: flex;
        	width: 100%;
        	margin-top: 10px;
        }

        paper-card {
        	margin: auto;
        	--paper-card-actions: {
          		display: flex;
          	}
          	--paper-card-header: {
          		display: flex;
          	}
          	--paper-card-header-text: {
          		margin: auto;
          	}
        }

        paper-button {
        	background-color: #4285f4;
          	color: #fff;
          	margin: auto;
        }
      </style>

      <paper-card heading="Enter the magic words!">
      	<div class="card-content">
        	<paper-input always-float-label label="Username" type="text"></paper-input>
        	<paper-input always-float-label label="Password" type="password"></paper-input>
        </div>
      	<div class="card-actions">
        	<paper-button on-tap="signinHandler">Sign In</paper-button>
      	</div>
      </paper-card>

    `;
  }

  signinHandler() {
  	console.log("Sign in button clicked.");
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'chat-app'
      }
    };
  }
}

window.customElements.define('sign-in', SignIn);
