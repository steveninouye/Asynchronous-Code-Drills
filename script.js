/////////// ASYNC: NOW AND LATER /////////////

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

//////////// CALLBACKS /////////////

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

/////////////// PROMISES ///////////////////////

const bool = true;

const orderingChickenSandwich = new Promise((res, rej) => {
    if (bool) {
        const obj = { sandwich: 'chicken', veggies: 'lettuce' };
        res(obj);
    } else {
        const err = new Error('not true');
        rej(new Error(err));
    }
});

const orderFood = () => {
    orderingChickenSandwich
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

orderFood();

////////// CHAINING PROMISES /////////////

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);
    }, 2000);
});
promise
    .then((res, rej) => {
        console.log(res);
        return res * 2;
    })
    .then((res) => {
        console.log(res);
        return res * 4;
    })
    .then((res) => {
        console.log(res);
        return res * 6;
    })
    .then((res) => console.log(res));
