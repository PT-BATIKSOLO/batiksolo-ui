var nmasterRoutes = require("./nmaster");
var tokoRoutes = require("./toko");
var gudangPusatRoutes = require("./gudang-pusat");
var laporanRoutes = require("./laporan");
var publicRoutes = require("./public");
var authRoutes = require("./auth");
var finishingRoutes = require("./finishing");
var generalInventoryRoutes = require("./general-inventory");
var batikSoloRoutes = require("./batik-solo-report");
var merchandiserRoutes=require("./merchandiser");

export default [].concat(
  nmasterRoutes,
  publicRoutes,
  gudangPusatRoutes,
  tokoRoutes,
  finishingRoutes,
  laporanRoutes,
  authRoutes,
  generalInventoryRoutes,
  batikSoloRoutes,
  merchandiserRoutes
);
