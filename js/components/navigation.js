// Add a shadowDOM customEleemnt for navigation
// Language: javascript
// Path: js/components/navigation.js
// Compare this snippet from js/components/Footer.js:
class Navigation extends HTMLElement {
  constructor() {
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      :host * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Work Sans", Helvetica, sans-serif;
      }
        :host {
          display: block;
          // padding: 1rem;
          // background-color: #f5f5f5;
        }
        :host .navbar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding-block: 1em;

        }

        @media screen and (min-width: 70em) {
          :host .navbar {
            display: flex;
            flex-direction: row;
            gap: .5em;
            align-items: center;
            justify-content: center;
          }
        }

        :host ul.navigation {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          gap: 0.2em;
          justify-content: center;
          align-items: center;
          padding: 0;
          max-inline-size: fit-content;
        }

        :host ul.navigation li {
          --body-small: clamp(1rem, 0.9rem + 0.25vw, 1.25rem);
          font-size: var(--body-small, calc(clamp(1rem, 0.9rem + 0.25vw, 1.25rem)));
          font-weight: 400;
          --mdc-theme-on-background: #201a19;
          color: var(--mdc-theme-on-background);
          cursor: pointer;
          position: relative;
          padding-inline: 0.5em;
          border-radius: 0.25rem;
        }

        :host ul.navigation li:hover {
          display: block;
          --mdc-theme-primary: #9c413d;
          color: var(--mdc-theme-primary, #9c413d);
          text-decoration: none;
          transition: all 0.1s ease-in;
          position: relative;
          --mdc-theme-surface-variant: #f4dddb;
            background: var(--mdc-theme-surface-variant, #f4dddb);
        }
        :host ul.navigation li:hover::after {
          display: block;
          content: "";
          transition: all 0.2s ease-in-out;
          --mdc-theme-primary: #9c413d;
            --mdc-theme-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: var(  --mdc-theme-shadow);
          position: relative;
          bottom: .05em;
          background: var(--mdc-theme-primary);

          max-inline-size: fit-content;
          height: 4px;
          width: 100px;
          text-decoration: none;
        }
        :host search-bar {
          place-items: center;
          position: relative;
          display: flex;
          align-items: baseline;
        }


          .search-bar input {
            border-radius: 1.618em;
            border: 1px solid #ccc;
            font-family: inherit;
            padding-inline-start: 1em;
            padding-block: .5em;
            width: unset;
          }

        @media screen and (max-width: 40em) {
          .search-bar input {
              width: calc(100vw - 4em);
            }
        }

        .search-bar button::placeholder {
          color: #ccc;
        }
        .search-bar button {
          border-radius: 50%;
          border: 0;
          padding: 0;
          cursor: pointer;
          background-color: transparent;
          position: relative;
          left: -2.7em;
          top: 0.1em;
          align-self: baseline;
          color: #ccc;
        }

        .search-bar button:hover {
        --mdc-theme-primary: #9c413d;
        color: var(--mdc-theme-primary, #9c413d);

        }


      </style>
      <slot>
        <div class="navbar">
          <ul class="navigation | body-small">
            <li>Collections</li>
            <li>Holiday & Seasons</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div class="search-bar">
            <input type="text" autocomplete="on" placeholder="Search">
            <button>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
            </button>
          </div>
        </div>
      </slot>
    `;
  }
}

// Register the new element with the browser.
window.customElements.define("navigation-component", Navigation);
