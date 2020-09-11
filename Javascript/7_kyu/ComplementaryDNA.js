function DNAStrand(dna) {
    var dnaArray = Array.from(dna)
    var string = "";
    var x;
    dna.split('').forEach(function(c){
    console.log(c);
        switch (c) {
            case 'A':
                string += 'T';
                break;
            case 'T':
                string += 'A';
                break;
            case 'C':
                string += 'G';
                break;
            case 'G':
                string += 'C';
                break;
        }
    });
    return string;
}