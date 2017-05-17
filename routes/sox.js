var express = require('express'),
    router = express.Router(),
    SoxCommand = require('sox-audio'),
    fs = require('fs'),
    inputFile = '/tmp/src.mp3',
    defaultTime = 30;

function convertIntToTimeCode(i) {
    var minutes = Math.floor(i/60),
        seconds = i%60;
    var timecode = (minutes<10) ? "0"+minutes+":" : minutes+":";
    timecode += (seconds<10) ? "0"+seconds : seconds;
    return timecode;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SoX Streaming Server' });
});

/**
 * White Noise
 */
router.get('/whitenoise',function(req, res, next) {
    var cmd = SoxCommand()
                    .input('|play -n synth whitenoise fade 3 30 trim 0 00:30')
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/whitenoise/:time',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth whitenoise trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/whitenoise/:time/:fade',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        f = parseInt(req.params.fade),
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth whitenoise fade '+f+' '+timecode+' trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

/**
 * Pink Noise
 */
router.get('/pinknoise',function(req, res, next) {
    var cmd = SoxCommand()
                    .input('|play -n synth pinknoise fade 3 30 trim 0 00:30')
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/pinknoise/:time',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth pinknoise trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/pinknoise/:time/:fade',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        f = parseInt(req.params.fade),
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth pinknoise fade '+f+' '+timecode+' trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

/**
 * Brown Noise
 */
router.get('/brownnoise',function(req, res, next) {
    var cmd = SoxCommand()
                    .input('|play -n synth brownnoise fade 3 30 trim 0 00:30')
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/brownnoise/:time',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth brownnoise trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/brownnoise/:time/:fade',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        f = parseInt(req.params.fade),
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth brownnoise fade '+f+' '+timecode+' trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

/**
 * Ocean Noise
 */
router.get('/ocean',function(req, res, next) {
    var cmd = SoxCommand()
                    .input('|play -n synth brownnoise synth pinknoise mix synth sine amod 0.3 10 fade 4 30 trim 0 00:30')
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.send(null);
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.send(null);
    });
    cmd.run();
});

router.get('/ocean/:time',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth brownnoise synth pinknoise mix synth sine amod 0.3 10 trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

router.get('/ocean/:time/:fade',function(req, res, next) {
    var t = parseInt(req.params.time) || defaultTime,
        f = parseInt(req.params.fade),
        timecode = convertIntToTimeCode(t);
    var cmd = SoxCommand()
                    .input('|play -n synth brownnoise synth pinknoise mix synth sine amod 0.3 10 fade  '+f+' '+timecode+' trim 0 '+timecode)
                    .output(res)
                    .outputFileType('mp3');
    cmd.on('start', function(commandLine) {
        console.log('Spawned sox with command ' + commandLine);
    });
    cmd.on('error', function(err, stdout, stderr) {
        console.log('Cannot process audio: ' + err.message);
        console.log('Sox Command Stdout: ', stdout);
        console.log('Sox Command Stderr: ', stderr);
        res.end();
    });
    cmd.on('end', function() {
        console.log('Sox command succeeded!');
        res.end();
    });
    cmd.run();
});

module.exports = router;