for (let i = 0; i < input.length; i += 4) {
			let op = input[i];
			let num1 = input[i + 1];
			let num2 = input[i + 2];
			let dest = input[i + 3];

			if (op === ADD) {
				input[dest] = input[num1] + input[num2];
			} else if (op === MULTP) {
				input[dest] = input[num1] * input[num2];
			} else if (op === STOP) {
				break;
			}
		}

		return input[0];
	}
