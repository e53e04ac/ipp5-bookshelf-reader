# ipp5-bookshelf-reader

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReader } from 'e53e04ac/ipp5-bookshelf-reader';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-bookshelf-reader"]);
  B0(["e53e04ac/date-time"]);
  B1(["e53e04ac/event-emitter"]);
  B2(["e53e04ac/file-entry"]);
  B3(["e53e04ac/hold"]);
  C0(["@types/node"]);
  C1(["e53e04ac/ipp5-types"]);
  click B0 href "https://github.com/e53e04ac/date-time";
  click B1 href "https://github.com/e53e04ac/event-emitter";
  click B2 href "https://github.com/e53e04ac/file-entry";
  click B3 href "https://github.com/e53e04ac/hold";
  click C1 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-bookshelf-reader";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
  end;
~~~~~
