export const basic = {
  input: `---
import "../global.css";
---

<div id="test" data-info="value" class="btn"></div>`,
  output: `---
import "../global.css";
---

<div class="btn" data-info="value" id="test"></div>`,
}
