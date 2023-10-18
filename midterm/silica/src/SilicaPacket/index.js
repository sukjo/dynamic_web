/* -------------------------------------------------------------------------- */
/*                           /SILICAPACKET INDEX.JS                           */
/* -------------------------------------------------------------------------- */

import * as React from "react";
import PacketImg from "./PacketImg.js";
import Text from "./Text.js";

// import type { PacketProps } from './packet-data.js';
// more type checking etc. etc.

export default function SilicaPacket(props) {
  const { packet } = props;

  return (
    <>
      <PacketImg packet={packet} />
      <Text caption={packet.caption} />
    </>
  );
}
