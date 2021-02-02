function promiseError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Error('Deu ruim!'));
        });
    });
};

setInterval(() => {
    console.log('ping');
},1000);

setTimeout(async () => {
    try {
        await promiseError();
    } catch(err) {
        console.error(err);
    }
},2000);

process.on('unhandledPromiseRejection', (error) => {
    console.log('unhandled promise');
    console.log(error);

    process.exit(1);
});

process.on('uncaughtExeption', (error) => {
    console.log('uncaught exeption');
    console.log(error);

    process.exit(1);
});

//throw Error('teste');