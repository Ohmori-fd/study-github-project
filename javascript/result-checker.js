function result_checker(i){

    var answer = document.getElementById('answer');
    var elem = document.getElementById('code-result-'+i);

    if (elem.value != answer.value) {
        elem.style.backgroundColor = '#F9444D';
    } else {
        elem.style.backgroundColor = '';
    }
}
