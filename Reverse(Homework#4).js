<script>
  //We need to create an reserve function(first of all)
const reverse = function(str){
  //we should print the result 
console.log(str[str.length-1]);
  //considering some hypotheses as well
	if(str.length === 1){
		return '';
      //We need to count till the last letter
    }
reverse(str.substring(0, str.length-1))
};
  //Let us reverse abcd
reverse('abcd');
</script>

