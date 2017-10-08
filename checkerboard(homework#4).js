<script>
const checkerboard = function(num, astx, bacat){
	if(num === 0){
		return '';
	}
	return astx + bacat + checkerboard(num-2, astx, bacat)
};

const board = function(num, length){
	if(num === 0) {
		return '';
	}
	else{
		console.log(checkerboard(length, '*', ' '));
		console.log(checkerboard(length, ' ', '*'));
	}
	return board(num-4, length);
};

board(8, 8);

const result = checkerboard(8, '*', ' ');
console.log(result);
</script>