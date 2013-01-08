/*jslint plusplus: true, devel: true, nomen: true, vars: true, indent: 4, maxerr: 50 */
/*global window, io, $ */

(function () {
    "use strict";
    
    var socket = io.connect(),
        content = $("#content"),
        currentLine = "";
        
    window.APP = {
        socket: socket
    };
    
    $(window.document).keydown(function (e) {
        if (e.keyCode === 8) {
            currentLine = currentLine.slice(0, -1);
            content.html(currentLine);
        }
    });
  
    $(window.document).keypress(function (e) {
  	
        //var letter = codes["" + e.keyCode];
        var letter = String.fromCharCode(e.keyCode);
  	
        // Handle 'enter'.
        if (e.keyCode === 13) {
        
            console.log("sending console");
            
            // Send...
            socket.emit("console", currentLine, function (output) {
                output = output.replace(/\n/g, "<br />");
                
                console.log(output);
                content.append(output + "<br />");
            });
            
            currentLine = "";
            content.append("<br />");
        
        } else {
            
            if (letter) {
                currentLine += letter;
                content.html(currentLine);
            } else {
                console.log(e.keyCode);
            }
        }
    });
  
}());