# ipp5-bookshelf-reader

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReader } from 'e53e04ac/ipp5-bookshelf-reader';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/date-time"]);
    B_1(["e53e04ac/event-emitter"]);
    B_2(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["e53e04ac/file-entry"]);
    B_5(["e53e04ac/ipp5-types"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://github.com/e53e04ac/date-time/tree/4fd63ae52ea7346e85ed0a355f4c4b72c713345a";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_2 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_3 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
  click B_5 "https://github.com/e53e04ac/ipp5-types/tree/ef144d850d518b40703ea085cb940b3ec452bde2";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "event-emitter";
    B_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_1_0(["hold"]);
    B_1_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "date-time";
    B_0_0(["DateTime"]);
  end;
  subgraph "event-emitter";
    B_1_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    B_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_3_0(["Get"]);
    B_3_1(["ValueOrGet"]);
  end;
  subgraph "ipp5-types";
    B_4_0(["Ipp5DailySummaryData"]);
    B_4_1(["Ipp5MenuData"]);
    B_4_2(["Ipp5MonthlySummaryData"]);
    B_4_3(["Ipp5YearlySummaryData"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_3_1 ----> A;
  B_4_0 ----> A;
  B_4_1 ----> A;
  B_4_2 ----> A;
  B_4_3 ----> A;
~~~~~
