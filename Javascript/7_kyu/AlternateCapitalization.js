function capitalize(s){
    var string1="";
    var string2="";
    for (let i = 0; i < s.length; i++) {
        var indexCharacter = s[i];
        if(i%2==0||i==0){
        string1+=indexCharacter.toUpperCase();
        string2+=indexCharacter.toLowerCase();
        }
        else{
        string1+=indexCharacter.toLowerCase();
        string2+=indexCharacter.toUpperCase();
        }        
    }
    return [string1, string2];
  };