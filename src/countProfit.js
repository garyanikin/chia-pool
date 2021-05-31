var secsPerDay = 86400; // in seconds
var blockReward = 2; // in XCH
var blockTimeAvg = 18; // in seconds

var blocksPerDay = secsPerDay / blockTimeAvg;
var xchPerDay = blocksPerDay * blockReward; // in XCH

// FROM API
var networkSpace = 17415476579.706; // in GB
var xchPriceUsd = 764.55;

function refreshPlotsData(plotsCount) {
  var plotSize = 108.877420953;
  var usr_plotSize = plotSize * plotsCount; // in GB

  if (usr_plotSize >= 1000000000) {
    var usr_plotSize_formatted = (usr_plotSize / 1000000000).toFixed(2);
    var usr_plotSizeFormatted_formatted = (
      usr_plotSize /
      1.1529215046 /
      1000000000
    ).toFixed(2);
    var usr_plotSize_unit = "EB";
    var usr_plotSize_unit_formatted = "EiB";
  } else if (usr_plotSize >= 1000000) {
    var usr_plotSize_formatted = (usr_plotSize / 1000000).toFixed(2);
    var usr_plotSizeFormatted_formatted = (
      usr_plotSize /
      1.126 /
      1000000
    ).toFixed(2);
    var usr_plotSize_unit = "PB";
    var usr_plotSize_unit_formatted = "PiB";
  } else if (usr_plotSize >= 1000) {
    var usr_plotSize_formatted = (usr_plotSize / 1000).toFixed(2);
    var usr_plotSizeFormatted_formatted = (
      usr_plotSize /
      1.0995116278 /
      1000
    ).toFixed(2);
    var usr_plotSize_unit = "TB";
    var usr_plotSize_unit_formatted = "TiB";
  } else {
    var usr_plotSize_formatted = usr_plotSize.toFixed(2);
    var usr_plotSizeFormatted_formatted = (usr_plotSize / 1.073741824).toFixed(
      2
    );
    var usr_plotSize_unit = "GB";
    var usr_plotSize_unit_formatted = "GiB";
  }

  var usr_networkShare =
    100 - ((networkSpace - usr_plotSize) / networkSpace) * 100;
  var usr_xchPerDay = xchPerDay * (usr_networkShare / 100);

  var sys_timeToWinSeconds = (
    (blockReward * secsPerDay) /
    usr_xchPerDay
  ).toFixed(0);

  if (sys_timeToWinSeconds == 1) {
    var usr_timeToWin = "1 second";
  } else if (sys_timeToWinSeconds < 60) {
    var usr_timeToWin = sys_timeToWinSeconds + " seconds";
  } else if (sys_timeToWinSeconds < 120) {
    var usr_timeToWin = "1 minute";
  } else if (sys_timeToWinSeconds < 3600) {
    var usr_timeToWin = (sys_timeToWinSeconds / 60).toFixed(0) + " minutes";
  } else if (sys_timeToWinSeconds < 7200) {
    var usr_timeToWin = "1 hour";
  } else if (sys_timeToWinSeconds < 86400) {
    var usr_timeToWin = (sys_timeToWinSeconds / 3600).toFixed(0) + " hours";
  } else if (sys_timeToWinSeconds < 172800) {
    var usr_timeToWin = "1 day";
  } else if (sys_timeToWinSeconds < 2592000) {
    var usr_timeToWin = (sys_timeToWinSeconds / 86400).toFixed(0) + " days";
  } else if (sys_timeToWinSeconds < 5184000) {
    var usr_timeToWin = "1 month";
  } else if (sys_timeToWinSeconds < 31104000) {
    var usr_timeToWin = (sys_timeToWinSeconds / 2592000).toFixed(0) + " months";
  } else if (sys_timeToWinSeconds < 62208000) {
    var usr_timeToWin = "1 year";
  } else {
    var usr_timeToWin = (sys_timeToWinSeconds / 31104000).toFixed(0) + " years";
  }

  if (usr_xchPerDay * xchPriceUsd >= 1000000) {
    var usr_xchPerDay_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd) / 1000000).toFixed(2) + "M";
    var usr_xchPerHour_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd) / 1000000 / 24).toFixed(2) + "M";
  } else if (usr_xchPerDay * xchPriceUsd >= 1000) {
    var usr_xchPerDay_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd) / 1000).toFixed(2) + "k";
    var usr_xchPerHour_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd) / 1000 / 24).toFixed(2) + "k";
  } else {
    var usr_xchPerDay_formatted =
      "$" + (usr_xchPerDay * xchPriceUsd).toFixed(2);
    var usr_xchPerHour_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd) / 24).toFixed(2);
  }

  if (usr_xchPerDay * xchPriceUsd * 30 >= 1000000) {
    var usr_xchPerMonth_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd * 30) / 1000000).toFixed(2) + "M";
  } else if (usr_xchPerDay * xchPriceUsd * 30 >= 1000) {
    var usr_xchPerMonth_formatted =
      "$" + ((usr_xchPerDay * xchPriceUsd * 30) / 1000).toFixed(2) + "k";
  } else {
    var usr_xchPerMonth_formatted =
      "$" + (usr_xchPerDay * xchPriceUsd * 30).toFixed(2);
  }

  return {
    xchPerHour: (usr_xchPerDay / 24).toFixed(3),
    xchPerDay: usr_xchPerDay.toFixed(3),
    xchPerMonth: (usr_xchPerDay * 30).toFixed(3),
    usdPerHour: usr_xchPerHour_formatted,
    usdPerDay: usr_xchPerDay_formatted,
    usdPerMonth: usr_xchPerMonth_formatted,
  };
}

export default refreshPlotsData;
