<Script>
//TriangleStars(num)
const lusatu = function(numlusatu){
	if(numlusatu === 0) {
		return '';
	}
	return '*' + lusatu(numlusatu-1);
}; 
const bacat = function(numbacat){
	if (numbacat === 0){ 	
		return '';
	}
	return ' ' + bacat(numbacat-1);
};
const prkeq = function(sp, st){
  if(st <= 0){
   return '';
  }
  console.log(bacat(sp ) + lusatu(st) );
  return prkeq(sp+1, st-2);
}
const trianglelusatu = function(z){
	prkeq(0, 2*z-1);
};	
trianglelusatu(4);

</script>

