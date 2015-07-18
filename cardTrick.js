// 1.) user picks a number within 1-27
// 2.) then from a deck with 27 cards user picks a card (the program will "read users mind to guess")

// 3.) dealer deals the cards in three pots (TOP pot, MIDDLE pot, DOWN pot) - each pot have 9 cards (3x9 = 27)
// 4.) users picks a pot with the card
// 5.) based on the result from cardtric27(userSelectedNumber) the pots are put together in order

// 6.) repeat steps 3-5 TWO more Times (recursive)
// 7.) show all cards to user - card with index userSelectedNumber will be users card
function cardTrick27(userSelectedNumber) {

	var result = (function() {
		var baseThree = userSelectedNumber.toString(3);
		var result = {
			firstHand: baseThree[0],
			secondHand: baseThree[1],
			lastHnad: baseThree[2]
		};
		function resultTranslator (result) {
			for (var prop in result){
				if (result.hasOwnProperty(prop)) {
					handFixer(prop);	
				}
			}
			function handFixer (hand) {
				if (result[hand] === '0') {
					result[hand]= 'TOP';
				} else if (result[hand] === '1') {
					result[hand] = 'MIDDLE';
				} else if(result[hand] === '2'){
					result[hand] = 'DOWN';
				} else {
					result[hand] = 'TOP';
				}
			}
			function toString(result) {
				return '1.' + result.firstHand + ' \n2.' + result.secondHand + ' \n3.' + result.lastHnad + '\n';
			}
			return toString(result);
		}
		result = resultTranslator(result);
		return result;
	}());
	return result;
}

console.log(cardTrick27(8));

