var comm = new Icecomm('7tUHoLJ9OPIs3SdvJucSjNSeVTdM0a66hxmwFiXJnbcScXUG')

comm.on('local', function(options) {
  localVideo.src = options.stream;
});

comm.on('connected', function(options) {
    document.body.appendChild(options.getVideo());
});

comm.on('disconnect', function(options) {
    document.getElementById(options.callerID).remove();
});

comm.connect('soma2307')
