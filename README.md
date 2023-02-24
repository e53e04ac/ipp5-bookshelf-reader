# ipp5-bookshelf-reader

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReader } from 'ipp5-bookshelf-reader';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["date-time"]);
    B_1(["event-emitter"]);
    B_2(["hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["file-entry"]);
    B_5(["ipp5-types"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/date-time\nb9cae0dd3564bbc079ce8cf45c4eb6b7012726c9"]);
    C_1(["e53e04ac/event-emitter\n1c42c278687d626fd9dbc9da241e899e482bac0d"]);
    C_2(["e53e04ac/hold\nccd6d335b2be61f30045be782b2129d08a53ac67"]);
    C_4(["e53e04ac/file-entry\n31d65a68d97f3f8fd6a45b621b8a3d8245aa1e54"]);
    C_5(["e53e04ac/ipp5-types\nebe99d725f05ad1eabec2b37a2c5737becc56480"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://github.com/e53e04ac/date-time/tree/b9cae0dd3564bbc079ce8cf45c4eb6b7012726c9";
  click C_1 "https://github.com/e53e04ac/event-emitter/tree/1c42c278687d626fd9dbc9da241e899e482bac0d";
  click C_2 "https://github.com/e53e04ac/hold/tree/ccd6d335b2be61f30045be782b2129d08a53ac67";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/31d65a68d97f3f8fd6a45b621b8a3d8245aa1e54";
  click C_5 "https://github.com/e53e04ac/ipp5-types/tree/ebe99d725f05ad1eabec2b37a2c5737becc56480";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-bookshelf-reader";
    E_0(["namespace Ipp5BookshelfReader"]);
    E_1(["type Ipp5BookshelfReader"]);
    E_2(["const Ipp5BookshelfReader"]);
  end;
  M["index.d.ts"]
  subgraph "date-time";
    I_0_0(["DateTime"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  subgraph "ipp5-types";
    I_4_0(["Ipp5DailySummaryData"]);
    I_4_1(["Ipp5MenuData"]);
    I_4_2(["Ipp5MonthlySummaryData"]);
    I_4_3(["Ipp5YearlySummaryData"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  M ----> I_4_0;
  M ----> I_4_1;
  M ----> I_4_2;
  M ----> I_4_3;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-bookshelf-reader";
    E_0(["Ipp5BookshelfReader"]);
  end;
  M["index.mjs"]
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~
