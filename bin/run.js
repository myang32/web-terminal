#!/usr/bin/env node

/*jslint plusplus: true, devel: true, nomen: true, node: true, vars: true, indent: 4, maxerr: 50 */

var commander   = require("commander"),
    terminal    = require("../"),
    pkg         = require("../package.json");

if (commander.options.length === 0) {
    commander
    .version(pkg.version)
    .option("-i, --interface <ip>", "Interface (ip) to listen on.")
    .option("-p, --port <port>", "Specifies the TCP port for the HTTP server.")
    .option("-s, --ssl", "Start HTTP server over secure socket layer.")
    .option("-h, --shell <shell>", "Executes commands in the specified command shell. Example: --shell cmd")
    .parse(process.argv);
}

if (commander.shell) {
    process.env.WEB_SHELL = commander.shell;
}

terminal({
    port: commander.port,
    interface: commander.interface,
    ssl: commander.ssl,
});
