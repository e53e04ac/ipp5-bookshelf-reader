# ipp5-bookshelf-reader

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReader } from 'e53e04ac/ipp5-bookshelf-reader';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-bookshelf-reader"]);
  subgraph "dependencies";
    B_0(["e53e04ac/date-time"]);
    B_1(["e53e04ac/event-emitter"]);
    B_2(["e53e04ac/file-entry"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/ipp5-types"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://github.com/e53e04ac/date-time/tree/3bc7edc1e247d2179c47b97bdefa4c6ade450f33";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_2 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_3 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/ipp5-types/tree/cb79884ba1349d4abde21ff64705578d8240dc31";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-bookshelf-reader"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "event-emitter"
    D0(["EventEmitter"]);
  end;
  subgraph "hold"
    D1(["hold"]);
    D2(["unwrap"]);
    D5(["Get"]);
    D6(["ValueOrGet"]);
  end;
  subgraph "date-time"
    D3(["DateTime"]);
  end;
  subgraph "file-entry"
    D4(["FileEntry"]);
  end;
  subgraph "ipp5-types"
    D7(["Ipp5DailySummaryData"]);
    D8(["Ipp5MenuData"]);
    D9(["Ipp5MonthlySummaryData"]);
    D10(["Ipp5YearlySummaryData"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C1;
  D0 --import--> C1;
  D4 --import--> C1;
  D5 --import--> C1;
  D6 --import--> C1;
  D7 --import--> C1;
  D8 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
~~~~~
