function gradeCaluclator(score) {

    // let score  = prompt("Enter a new number").value.trim(); //! Work in browser
    // let score = 77; //! Score Already Declare in Parameter

    if (score === "") {
        console.log(`Enter a correct number`);
        return;
    }

    score = Number(score);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Invalid Marks, Enter a marks between 0 to 100");
    } else {
        let grade;
        let message;

        if (score >= 90) {
            grade = "A";
            message = "Excellent";
        } else if (score >= 80) {
            grade = "B";
            message = "Very Good";
        } else if (score >= 70) {
            grade = "C";
            message = "Good";
        } else if (score >= 60) {
            grade = "D";
            message = "Just Pass";
        } else if (score <= 59) {
            grade = "E";
            message = "Fail"
        }
        console.log(`${message}: Score: ${score}, Grade:${grade}`)
    }
}
console.log(gradeCaluclator(0))