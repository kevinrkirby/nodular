module.exports = function(http) {
    http.listen(3000,() => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        console.log('Server has been started at : ' + hours + ':' + minutes);
    });    
};