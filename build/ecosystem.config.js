module.exports = {
    "apps": [{
        "name": "nest-app",
        "script": "dist/main.js",
        "exec_mode": "cluster",
        "instances": 4
    }]
}