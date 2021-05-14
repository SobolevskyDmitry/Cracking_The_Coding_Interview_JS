function stringRotation(s1, s2) {
 if(!s1 || !s2 || s1.length !== s2.length) {
     return false;
 }

 return (s1 + s1).indexOf(s2) !== -1 
}

stringRotation('waterbottle', 'erbottlewat')
