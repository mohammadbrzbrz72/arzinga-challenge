import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between py-5 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <Image src="/arzinja.svg" alt="arzinja logo" width={27.5} height={48} />
        <Typography variant="h4" component="span" style={{ fontWeight: 700 }}>
          Arzinja
        </Typography>
      </div>
      <div>
        <AccountCircle style={{ width: 45, height: 45, color: "#00d9a8" }} />
      </div>
    </div>
  );
}
