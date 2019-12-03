var input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0]


var makeItHappen = (input) => { 
    
    for(let i=0; i < input.length; i += 4) {
        let instruction = input[i]
        let int1 = input[i + 1]
        let int2 = input[i + 2]
        let destination = input[i + 3]
        // let magic = 0;

        if (instruction === 1) {
            input[destination] = input[int1] + input[int2]
        } else if (instruction === 2) {
            input[destination] = input[int1] * input[int2]
        } else if (instruction === 99) {
            break
        }
    }
    return input[0]
}

console.log(makeItHappen(input))

// 797870 not correct, too small
// 1258670 not correct, too small
// 3562672 correct!
 
//Each of the two input values will be between 0 and 99, inclusive.
  for (let noun = 0; noun < 100; noun++){
    for (let verb = 0; verb < 100; verb++){
      var Input = [1,noun,verb,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0]

      makeItHappen(Input);
      if(Input[0] == 19690720){
        console.log (100 * noun + verb);
        break;
      }
    }
  }

  // 8250 correct!