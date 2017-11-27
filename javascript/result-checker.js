function result_checker(i){

    var answer = document.getElementById('answer');
    var elem = document.getElementById('code-result-'+i);

    //reset
    elem.style.backgroundColor = '';

    if (elem.value != answer.value) {
        //error
        elem.style.backgroundColor = '#F9444D';
    } else {
        //good
        elem.style.backgroundColor = '#81D8D0';
    }
}
