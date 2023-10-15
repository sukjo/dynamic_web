/* -------------------------------------------------------------------------- */
/*                           /SILICAPACKET INDEX.JS                           */
/* -------------------------------------------------------------------------- */

import * as React from "react";
import PacketImg from "./PacketImg.js";
import Text from "./Text.js";
import styles from "./SilicaPacket.module.css";

// import type { PacketProps } from './packet-data.js';
// more type checking etc. etc.

export default function SilicaPacket(props) {
  const { packet } = props;

  return (
    <>
      <PacketImg imgSrc={packet.imgSrc} imgAlt={packet.imgAlt} />
      <Text proses={packet.prose} />
    </>
  );
}
