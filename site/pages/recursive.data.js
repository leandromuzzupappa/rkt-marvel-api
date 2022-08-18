import { html } from "lit";
export { html };

export const layout = (data) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Marvel-Comics</title>
    </head>
    <body>
      ${data.content()}
    </body>
  </html>
`;

export const components = {
  "header-element":
    "#components/header-element/header-element.js::HeaderElement",
};
