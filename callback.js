function erroCallback(callback) {
    setTimeout(() => {
        callback(Error("Deu ruim!"));
    },240);
};

setInterval( () => {
    console.log("ping");
}      
,1000);

setTimeout(() => {
    erroCallback((err, test) => {
        if (err) {
            return console.error(Error('Error in erroAsync: ' + err.message));
        }
    })
},3000);