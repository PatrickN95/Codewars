function save(sizes, hd) {
    var count = 0;
    var items = 0;
    for (i = 0; i < sizes.length; i++) {
        if ((count + sizes[i]) <= hd) {
            count += sizes[i];
            items++;
        }
        else break;


    } return items;
}