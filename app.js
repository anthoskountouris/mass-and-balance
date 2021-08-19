const passengersNum = document.querySelector('#passengers');
const container = document.querySelector('#container');
const kilosNewContainer = document.querySelector('#new');

const button = document.querySelector('button');

const form = document.querySelector('form');
const tank1 = document.querySelector('#tank1');
const tank2 = document.querySelector('#tank2');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

passengersNum.addEventListener('change', (e) => {
    // console.log(container);

    if (container.contains(document.querySelector('#new4'))) {
        document.querySelector('#new2').remove();
        document.querySelector('#new3').remove();
        document.querySelector('#new4').remove();
        // console.log(container);
    } else if (container.contains(document.querySelector('#new3'))) {
        document.querySelector('#new2').remove();
        document.querySelector('#new3').remove();
    } else if (container.contains(document.querySelector('#new2'))) {
        document.querySelector('#new2').remove();
    }


    let value = e.target.value;
    // console.log(parseInt(value));

    for (let i = 1; i < value; i++) {
        const clone = kilosNewContainer.cloneNode(true);
        clone.id = `new${i + 1}`;
        kilosNewContainer.after(clone);
    }

});

const emptyWeight = 830;
console.log(`Empty weight: ${emptyWeight}`);

const maxWeight = 1150;
console.log(`Max weight: ${maxWeight}`);

const availableWeight = maxWeight - emptyWeight;
console.log(`Available weight: ${availableWeight}`);

button.addEventListener('click', (e) => {
    let tank1Value = parseInt(tank1.value);
    let tank2Value = parseInt(tank2.value);
    let totalFuelValue = tank1Value + tank2Value;
    let totalHoursRemaining = totalFuelValue / 5;
    let totalFuelWeightValue = totalFuelValue * 3.03;
    let totalPassengerWeight = 0;
    console.log(`Total hours remaining: ${totalHoursRemaining}`);
    console.log(`Weight of Fuel: ${totalFuelWeightValue}`);

    if (container.contains(document.querySelector('#new4'))) {
        let passenger1 = parseInt(document.querySelector('#new').children[1].children[0].value);
        let passenger2 = parseInt(document.querySelector('#new2').children[1].children[0].value);
        let passenger3 = parseInt(document.querySelector('#new3').children[1].children[0].value);
        let passenger4 = parseInt(document.querySelector('#new4').children[1].children[0].value);

        totalPassengerWeight = passenger1 + passenger2 + passenger3 + passenger4;
        console.log(`The overall passenger weight is: ${totalPassengerWeight}`);

    } else if (container.contains(document.querySelector('#new3'))) {
        let passenger1 = parseInt(document.querySelector('#new').children[1].children[0].value);
        let passenger2 = parseInt(document.querySelector('#new2').children[1].children[0].value);
        let passenger3 = parseInt(document.querySelector('#new3').children[1].children[0].value);

        totalPassengerWeight = passenger1 + passenger2 + passenger3;
        console.log(`The overall passenger weight is: ${totalPassengerWeight}`);

    } else if (container.contains(document.querySelector('#new2'))) {
        let passenger1 = parseInt(document.querySelector('#new').children[1].children[0].value);
        let passenger2 = parseInt(document.querySelector('#new2').children[1].children[0].value);

        totalPassengerWeight = passenger1 + passenger2;
        console.log(`The overall passenger weight is: ${totalPassengerWeight}`);

    } else {
        let passenger1 = parseInt(document.querySelector('#new').children[1].children[0].value);

        totalPassengerWeight = passenger1;
        console.log(`The overall passenger weight is: ${totalPassengerWeight}`);
    }

    let remainingWeight = availableWeight - totalFuelWeightValue - totalPassengerWeight;
    if (remainingWeight < 0) {
        document.write(`
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mass and Balance</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="app.css">
        </head>
        
        <body>

            <div class="container d-flex justify-content-center mt-5">
            <h1 class="text-white">Results</h1>
            </div>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-6">
                        <p id="results" class="text-center text-white"> SORRY THE WEIGHT IS: ${remainingWeight.toPrecision(3)} kg <p>
                    </div>
                </div>
            </div>
        
        </body>
        
        </html>`)

    } else {

        document.write(`

            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Mass and Balance</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
                                <link rel="stylesheet" href="app.css">
            </head>

            <body>
                <div class="container d-flex justify-content-center mt-5">
                    <h1 class="text-white">Results</h1>
                </div>
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-6">
                            <p id="results" class="text-white">TOTAL HOURS REMAINING: ${totalHoursRemaining} hr</p>
                            <p id="results" class="text-white">THE REMAINING WEIGHT IS: ${remainingWeight.toPrecision(3)} kg</p>
                        </div>
                    </div>
                </div>
            </body>
        
            </html> `);
        console.log(`The remaining weight is: ${remainingWeight} `);
    }
});