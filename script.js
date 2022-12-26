const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

function test1() {
    console.log(database.filter(function(person) {
        return person.isMarried === true;
    }
        )
    )
}

function test2() {
    console.log(
        database.sort(
            function (a,b) {
               return a.age-b.age;
            }
        )
    )
}

function test3() {
    console.log(database.reduce(
        function (accum, person, index, array) {
            accum = accum + person.age;
            if(index === array.length-1){
                return accum/array.length
            }
            return accum;
        }, 0
    ))
}

function test4() {
    console.log(database.reduce(
        function (accum, person) {
            if(accum[person.country]){
                accum[person.country]++;
            } else {
                accum[person.country] = 1;
            }
            return accum;
        }, {}
        )
    )
}

function test5() {
    let count = 0;
    console.log(
        database.sort(function (a,b) {
            if ((a.isMarried === false && b.isMarried === true) ||
                (a.isMarried === true && b.isMarried === true && a.name>b.name) ||
                (a.isMarried === false && b.isMarried === false && b.age>a.age)){
                return 1;
            }
            if ((a.isMarried === true && b.isMarried === false) ||
                (a.isMarried === true && b.isMarried === true && a.name<b.name) ||
                (a.isMarried === false && b.isMarried === false && b.age<a.age)){
                return -1;
            }
            if ((a.isMarried === true && b.isMarried === true && a.name===b.name) ||
            (a.isMarried === false && b.isMarried === false && b.age===a.age)){
                return 0;
            }
        }),
        'average age of married person = ' +
        database.reduce(function (accum, person, index, array) {
            if(person.isMarried === true){
                accum = accum + person.age;
                count++;
            }
            if(index === array.length-1){
                return accum/count;
            }
            return accum;
        }, 0)
    )
}

function test6() {
    database.splice(2,1);
    console.log(database);
}







