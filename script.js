var num;

const getNum = () => {
    console.log('Hello World!');
    return 8;
};

num = getNum();

const multBy4 = () => {
    console.log(4 * num);
};

setTimeout(multBy4, 2000);

const getWords = () => {
    console.log('a word');
    setTimeout(() => {
        console.log('another word');
        setTimeout(() => {
            console.log('third word');
            setTimeout(() => {
                console.log('fourth word');
            }, 1000);
        }, 2000);
    }, 3000);
};

getWords();

const countdown = (num, cb) => {
    const timer = setInterval(() => {
        if (num > 0) {
            console.log(num);
            num--;
        } else {
            clearInterval(timer);
            cb();
        }
    }, 1000);
    timer();
};

const logDone = () => console.log('done');

countdown(5, logDone);
