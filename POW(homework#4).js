<script>
//Let us create what our prof want.
const pow = function(base, n){
  if(n === 0){
    return 1; 
    //The example of Recursion
  }
  return (base * pow(base, n-1));
};
const result = pow(5, 3);
console.log(result);
</script>