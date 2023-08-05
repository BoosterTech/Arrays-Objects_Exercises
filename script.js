//1.
{
    const arrayX = [2, 5];
    const arrayY = [3, 7];
    let arrayMerge = [];

    const mergeArrays = (param1, param2) => arrayMerge = [...param1, ...param2];

    console.log("1.   ", mergeArrays(arrayX, arrayY));
}

//2.
{
    const elementsArray = [2, "delfin", null];
    let newArray = [];
    
    const exceptFirst = (param) => newArray = [...param.slice(1, param.length)];
    console.log("2.   ", exceptFirst(elementsArray));
}

//3.
{
    const ArrayToSlice = [1, 3, undefined, true];

    const slicedArray = ArrayToSlice.slice(-2);
    console.log("3.   ", slicedArray);
}

//4.
{
    const indexArray = ["rum", "kawa", "sangria"];

    const indexOf = (param) => param.indexOf("kawa");

    console.log("4.   ", indexOf(indexArray));
}

//5.
{
    const tasksArray = [
        { content: "" },
        { content: "kupic balony w ksztalcie psow" }
    ]

    const nonEmptyTask = ({ content }) => content !== "";
    const findNonEmptyTask = (tasks) => tasks.find(nonEmptyTask);

    console.log("5.   ", findNonEmptyTask(tasksArray));
}

//6.
{
    const numbersArray = [2, 4, 7, 8];

    const oddNumber = (element) => element % 2 === 1;
    console.log("6.   ", numbersArray.findIndex(oddNumber));
}

//7.
{
    const fruitArray = ["banan", "marakuja"];

    const hasStrawberry = (fruits) => fruits.includes("strawberry");
    console.log("7.   ", hasStrawberry(fruitArray));
}

//8.
{
    const people = [
        { name: "Melodia", age: 15 },
        { name: "Kosmo", age: 18 }
    ]

    const findAdult = (param) => param.age > 18;
    console.log("8.   ", people.some(findAdult));
}

//9.
{
    const someArray = ["", "zelazko"];

    const isItString = (parameter) => typeof parameter === 'string' || parameter instanceof String;

    const onlyString = (array) => array.every(isItString);
    console.log("9.   ", onlyString(someArray));
}

//10.
{
    const carsArray = ["BMW", "AUDI", "VW", "MERCEDES", "BENTLEY", "PORSHE"];
    const premiumArray = ["BMW", "AUDI", "MERCEDES", "FIAT",];
    let filterArray = [];

    const isIncluded = (element) => {
        premiumArray.forEach((car, index) => {
            if (element.includes(premiumArray[index])) filterArray.push(car);
        });
    }

    const filterPremium = (param) => param.filter(isIncluded);
    filterPremium(carsArray);
    console.log("10.  ", filterArray);
}

//11.
{
    const carArray = [
        { car: "BMW X5", color: "black" },
        { car: "Peugeot 3008", color: "white" },
    ]

    const getColors = (param) => param.color;
    const map = carArray.map(getColors);

    console.log("11.  ", map);
}

//12.
{
    const sortPeople = [
        { name: "Krzychu", age: 30 },
        { name: "Zdzichu", age: 20 },
    ]

    sortPeople.sort((a, b) => a.age - b.age);
    console.log("12.  ", sortPeople);
}