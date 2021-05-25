function checkgpa() {
    var obtainedMarks= document.getElementById("obtainedMarks").value;
    if (obtainedMarks >= 80 && obtainedMarks <= 100) {
       result.innerHTML = "5.00"
       result.style.color = "green";
    } else if (obtainedMarks >= 70 && obtainedMarks < 80) {
       result.innerHTML = "4.00"
       result.style.color = "green";
    } else if (obtainedMarks >= 60 && obtainedMarks < 70) {
       result.innerHTML = "3.50"
       result.style.color = "yellow";
    } else if (obtainedMarks >= 50 && obtainedMarks < 60) {
       result.innerHTML = "3.00"
       result.style.color = "yellow";
    } else if (obtainedMarks >= 40 && obtainedMarks < 50) {
       result.innerHTML = "2.00"
       result.style.color = "orange";
    } else if (obtainedMarks >= 33 && obtainedMarks < 40) {
       result.innerHTML = "1.00"
       result.style.color = "red";
    } else if (obtainedMarks < 33) {
       result.innerHTML = "0.00"
       result.style.color = "red";
    } else {
       alert('Number must be between 0 to 100')
    }
 }