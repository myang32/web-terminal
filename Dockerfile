FROM stefanscherer/node-windows:6-onbuild

CMD ["node", "bin/run.js", "--port", "8088", "--shell", "cmd"]
