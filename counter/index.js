let count = 0;

document.getElementById('decreaseBtn').onclick = function() {
    count-=1;
    coloringNumber();
    document.getElementById('countLabel').innerHTML = count;
}
document.getElementById('resetBtn').onclick = function() {
    count=0;
    coloringNumber();
    document.getElementById('countLabel').innerHTML = count;
}
document.getElementById('increaseBtn').onclick = function() {
    count+=1;
    coloringNumber();
    document.getElementById('countLabel').innerHTML = count;
}

function coloringNumber (){
    if (count<0){
        document.getElementById('countLabel').style.color = 'red';
    } else if(count>0) {
        document.getElementById('countLabel').style.color = 'green';
    } else {
        document.getElementById('countLabel').style.color = 'black';
    }
};