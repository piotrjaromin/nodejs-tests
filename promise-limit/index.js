'use strict';

const Promise = require('bluebird');

const MAX_COUNT = 30;
const INTERVAL = 4000
const CONCURRENCY_LEVEL = 3;

function promiseProducer() {
    let count = 0;
    return () => {
        console.log("producer called ", count);
        if (count >= MAX_COUNT) {
            console.log("end for producer");
            return null
        }

        let tempCount = ++count;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Promise number: " + tempCount);
                return resolve(tempCount);
            }, INTERVAL);
        });
    }
}

function limitPromises(producer, concurrency) {

    let current = 0;
    let resultSet = [];
    let failedSet = [];


    function itterate() {
        console.log("inside itterate()");
        for (; current < concurrency;) {
            console.log("calling producer current is " + current + " concurrency is " + concurrency );
            const prom = producer();
            if (prom != null) {
                current++;
                prom.then(res => handleResult(resultSet, res)).catch(err => handleResult(failedSet, err));
            } else {
                return true;
            }
        }
    }

    function handleResult(set, res) {
        set.push(res); 
        current--; 
        itterate()
    }


    itterate();
}


limitPromises(promiseProducer(), CONCURRENCY_LEVEL);