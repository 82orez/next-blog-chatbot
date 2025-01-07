const removeImports = require("next-remove-imports")();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default removeImports(nextConfig);
