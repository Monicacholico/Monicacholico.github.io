(function(){



    function spacifying(string) {
        let array = Array.from(string);
        const stringSpaced = array.map(c => c + ' ') ;
        return stringSpaced.join('');
    }

    const result = spacifying('monicadelcarmen');
    console.log(result);


    function spaceAntApproach(str) {
        const theArray = Array.from(str).map(c => c + '').join(' ');
        return theArray;
    }

    const antResult = spaceAntApproach('como lo sabes, resultara?');
    console.log(antResult)

    function maXChar(str) {
        const obj = {};
        let checkNumb = 0;
        let letter = '';
        for(let char of str) {
            obj[char] = obj[char] + 1 || 1;
        }
        for(let char of str) {
            if (obj[char] > checkNumb) {
                letter = char;
                checkNumb = obj[char];
            }
        }
        return letter;
        // console.log(obj);
    }
    const resultMaxChar = maXChar('what the heck dudeeeeee');
    console.log({resultMaxChar});


    function moreChar(str) {
        const obj = {};
        str.split('').forEach(char => obj[char] + 1 || 1);
        console.log(str.split(''));
    }
    moreChar('companeeeereeeee');

    // function simplyMax(str) {

    //     return Object.keys(str).reduce((prev, next) => str[a] >= str[b] ? a : b );
    // }

    // simplyMax('im th objectooo');


    function isBalanced(str) {
        const theArr = Array.from(str);
        const firstPlace = str[0];
        const lastPlace = str[str.length - 1];
        const isEven = theArr.length % 2 === 0 ? true : false;
        const firstPair = isEven && firstPlace === lastPlace ? true : false;
            if (firstPair === true) {
                let nextLeft = str[firstPair + 1];
                let prevRight = str[firstPair - 1];
                console.log(nextLeft);
                console.log(prevRight);
            }
            return firstPair;
    }


    const myNexResult = isBalanced('monicalm');
    console.log(myNexResult);


    // function isBalancedSolved(str) {
    //     const map = {
    //         '(': ')',
    //         '[': ']',
    //         '{': '}',
    //     };
    //     const closing = Object.values(map);
    //     const stack = [];

    //     for (let char of str) {
    //         if (map[char]) {
    //             stack.push(char);
    //         } else if (closing.includes(char) && char !== map[stack.pop()]) {
    //             return false;
    //         }
    //     }
    //     return !stack.length;
    // }

    // const isBalancedSolvedResult = isBalancedSolved('moniom');
    // console.log(isBalancedSolvedResult);


    //Function that counts number of syllables passing a word with dashes

    function numberSyllables(word) {
        const newWord = word.split('-');
        console.log(newWord.length);
        return newWord.length;
    }

    const solNumSyl = numberSyllables('to-mo-rrow');
    console.log({solNumSyl});


    function getFillings(sandwich) {
        sandwich.pop();
        sandwich.shift();
        return sandwich;
    }

    const arrOfSandwich = [3, 4, 5, 6, 3];
    console.log( getFillings(arrOfSandwich));

    // Calculate the tetrahedral numbers

    const sequelNums = [1,2.3,4,5,6,7,8,9,10];

    function findTetrahedral(arr) {
      let prevVal = 1;
      let currVal;
      let triangNum;
      for(arrEl of arr) {
          let newVal = arrEl+=prevVal;
          console.log({newVal});
          let triangNum = prevVal + newVal;
          currVal = triangNum;
          console.log({newVal});
          console.log({triangNum});
      }
      return currVal;
    }

    console.log(findTetrahedral(sequelNums));

    // Calculate the tetrahedral numbers

    // const sequelNums = [1,2.3,4,5,6,7,8,9,10];

    let array = [1,7,3,6,5,6];
    var pivotIndex = function(nums) {
        // let myObj = {};
        let sumRight = 0;
        let sumLeft = 0;
        for(num of nums) {
            sumRight+=num;
        }
        for(num of nums) {
            sumRight-=num;
            if(sumRight === sumLeft) {
                return nums.indexOf(num);
            }
            sumLeft+=num;
        }
    };



    console.log(pivotIndex(array));


    function pivotIndex1(array) {
        let leftsum = 0;
        let rightsum = 0;
        return array.findIndex( arrEl => {
            rightsum+=arrEl;
            rightsum-=arrEl;
            if(rightsum === leftsum) {
                arrEl;
            }
            leftsum+=arrEl;
        })
    }

    console.log(pivotIndex1(array));

    // Make a function to know how many calories did you eat when eating less than serving size

    function calculateCalories(calories, serving, eaten) {
        let result = (eaten * calories) / serving;
        return result;
    }
    const solv = calculateCalories(160, 5, 4);
    console.log({solv});



    // Recursion

    const myself = {
        name : 'Max',
        friends: [
            {
                name: 'Manuel',
                friends: [
                    {
                        name: 'Chris',
                        friends: [
                            {
                               name: 'Amelia',
                               friends: [
                                   {
                                       name: 'Lazaro',
                                       friends: [
                                           {
                                               name: 'Brian'
                                           }
                                       ]
                                   },
                                   {
                                       name: 'Chuchita'
                                   }
                               ]
                            },
                            {
                                name: 'Petra'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Julia'
            }
        ]
    };

    function getFriendNames(person) {
        const collectedNames = [];

        if(!person.friends) return [];

        for (const friend of person.friends) {
            collectedNames.push(friend.name);
            collectedNames.push(...getFriendNames(friend));
        }

        return collectedNames;
    }

    const theNames = getFriendNames(myself);
    console.log({theNames});

    const ordered = theNames.sort((a,b) => a > b ? 1 : -1);

    console.table(ordered);

// FUNCTION FOR HAS white space PASSWORD

    function stringContains(haystack, needle) {
        return haystack.indexOf(needle) !== -1;
    }


    function hasWthiteSpace(string) {
        return stringContains(string, " ");
    }

    const solutionPassword = hasWthiteSpace('thisismypassword');
    console.log({solutionPassword});








})();


