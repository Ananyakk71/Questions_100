let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}

 // 1.

function className(classObj) {
    return classObj.name;
}
console.log(`Name of class: ${className(classObj)}`);

//2.

function teacher(classObj) {
    return classObj.teacherName;
}
console.log(`Name of teacher: ${teacher(classObj)}`);

//3.

function studentName(classObj) {
    classObj.students.forEach(student => {
        console.log(`Student name: ${student.name}`);
    });
}
studentName(classObj);

//4.
function idOfStudent(classObj) {
    console.log("students id's are:")
    classObj.students.forEach(ID => {
        console.log(ID.id)
    })
}
idOfStudent(classObj);

//5.

function subjectName(classObj) {
    classObj.students.forEach(student => {
        console.log(`Subjects for ${student.name}:`)
        student.marks.forEach(Subject => {
            console.log(Subject.subject);
        })
    })
}
subjectName(classObj)
 
//Question 6.

function marksOfSubject(classObj) {
    classObj.students.forEach(student => {
        console.log(`Marks for ${student.name}:`)
        student.marks.forEach(Mark => {
          console.log(` ${Mark.mark} marks in ${Mark.subject}`)
        })
    })
}

marksOfSubject(classObj);

//Question 7.

function averageMarks(classObj, studentName) {
    let total = 0;
    for (let j=0; j < classObj.students.length; j++){
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            if (classObj.students[j].name === studentName){
                total += classObj.students[j].marks[i].mark;
                avrg = total / classObj.students[j].marks.length;
            }
           
        }
       
    }
    console.log(`Average mark ${studentName} is ${avrg}`);
}
averageMarks(classObj, "Ravi"); 
averageMarks(classObj,'Aju');
averageMarks(classObj, "Binu")

//Question 8

function totalMarks(classObj, studentName) {
    let total = 0;
    for (let j=0; j < classObj.students.length; j++){

        for(let i = 0; i < classObj.students[j].marks.length; i++){
            if (classObj.students[j].name === studentName){
                total += classObj.students[j].marks[i].mark;
            }
        }
       
    }
    console.log(`Total mark of ${studentName} is ${total}`);
}
totalMarks(classObj, "Ravi"); 
totalMarks(classObj,'Aju');
totalMarks(classObj, "Binu")

//Question 9

function subjectMarkAvg(classObj, subjectName){
    let total = 0
    let subjectLength = 0
    for(let j=0; j < classObj.students.length; j++){
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            if(classObj.students[j].marks[i].subject == subjectName){
               total += classObj.students[j].marks[i].mark;
               subjectLength++;
               break;   
            }
        }    
     }
        let avr = total / subjectLength;
        console.log(`The average mark in ${subjectName} is ${avr}`)
    }
subjectMarkAvg(classObj, "English");
subjectMarkAvg(classObj, "Maths");
subjectMarkAvg(classObj, "Physics");
subjectMarkAvg(classObj, "Chemistry");
subjectMarkAvg(classObj, "Computer");

//Question 10

function subjectTotalMark(classObj, subjectName) {
    let total = 0
    for(let j=0; j < classObj.students.length; j++){
        for(let i=0; i < classObj.students[j].marks.length; i++){
            if(classObj.students[j].marks[i].subject == subjectName){
                total += classObj.students[j].marks[i].mark;
                break;
            }
        }

    }
    console.log(`The Total mark in ${subjectName} is ${total}`) 
}
subjectTotalMark(classObj, "English");
subjectTotalMark(classObj, "Maths")
subjectTotalMark(classObj, "Physics");
subjectTotalMark(classObj, "Chemistry");
subjectTotalMark(classObj, "Computer");

//Question 11

function highestMark(classObj, subjectName) {
    topScore = 0
    for(let j=0; j < classObj.students.length; j++){
        for(let i=0; i < classObj.students[j].marks.length; i++){
            if(classObj.students[j].marks[i].subject == subjectName){
                if (classObj.students[j].marks[i].mark >= topScore) {
                    topScore = classObj.students[j].marks[i].mark; 
                    topper = classObj.students[j].name; 
                } 
            }
        }
    }
    console.log(`${topper} scored highestmark in ${subjectName} score: ${topScore}`)
}

highestMark(classObj,"English");
highestMark(classObj,"Maths");
highestMark(classObj, "Physics");
highestMark(classObj, "Chemistry");

//Question12.

function lowestMark(classObj, subjectName) {
    let leastScore = Infinity;
    for(let j=0; j < classObj.students.length; j++){
        for(let i=0; i < classObj.students[j].marks.length; i++){
            if(classObj.students[j].marks[i].subject == subjectName){
                if (classObj.students[j].marks[i].mark < leastScore) {
                    leastScore = classObj.students[j].marks[i].mark; 
                    nameOfstudent = classObj.students[j].name; 
                }
            }
        }
    }
    console.log(`${nameOfstudent} scored lowest mark in ${subjectName} score: ${leastScore}`)
}

lowestMark(classObj,"English");
lowestMark(classObj,"Maths");
lowestMark(classObj, "Physics");
lowestMark(classObj, "Chemistry");

//Question 13.

function highestTotalMarks(classObj) {
    for (let j=0; j < classObj.students.length; j++){
        let total = 0;
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            total += classObj.students[j].marks[i].mark;
        }
      if(total > topScore){
          topScore = total; 
        topper = classObj.students[j].name
      }
    }
    console.log(`${topper} has highest total marks. Total mark is ${topScore} `)
}

highestTotalMarks(classObj);

//Question 14.

function lowestTotalMarks(classObj) {
    let leastScore = Infinity;
    for (let j=0; j < classObj.students.length; j++){
        let total = 0;
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            total += classObj.students[j].marks[i].mark;
        }
      if(total < leastScore){
          leastScore = total; 
        topper = classObj.students[j].name
      }
    }
    console.log(`${topper} has lowest total marks. Total mark is ${leastScore} `)
}

lowestTotalMarks(classObj);

//Question 15

function highestAvrgsubject(classObj){
    let total = 0
    let highestAvrg;
    let subjectname;
    let subjectLength = 0
    for(let j=0; j < classObj.students.length; j++){
        for(let i = 0; i < classObj.students[j].marks.length; i++){
               total += classObj.students[j].marks[i].mark;
               subjectLength++;
        }    
     }
     let avr = total / subjectLength;

     if (avr > highestAvrg) {
        highestAvrg = avr;
        subjectname = classObj.students[j].marks[i].subject;
    }
    console.log(`The highest average mark in the subject ${subjectname}`)
 }
 
    highestAvrgsubject(classObj);

    //Question 16.

    function lowestAvrgsubject(classObj){
        let total = 0
        let highestAvrg;
        let subjectname;
        let subjectLength = 0
        for(let j=0; j < classObj.students.length; j++){
            for(let i = 0; i < classObj.students[j].marks.length; i++){
                   total += classObj.students[j].marks[i].mark;
                   subjectLength++;
            }    
         }
         let avr = total / subjectLength;
    
         if (avr < highestAvrg) {
            lowestAvrg = avr;
            subjectname = classObj.students[j].marks[i].subject;
        }
        console.log(`The lowest average mark in the subject ${subjectname}`)
     }
     
        lowestAvrgsubject(classObj);


// Question 17.
 
 function overallAvrgMarks(classObj) {
    let total = 0;
    for (let j=0; j < classObj.students.length; j++){

        for(let i = 0; i < classObj.students[j].marks.length; i++){
                total += classObj.students[j].marks[i].mark;
            
        }
        avrg = total / classObj.students[j].marks.length;
        avrgAll = avrg / classObj.students.length;
        
    }
    console.log(`overall average mark is ${avrgAll}`);
}
overallAvrgMarks(classObj)

 // Question 18

 function overallMarks(classObj) {
    let total = 0;
    for (let j=0; j < classObj.students.length; j++){

        for(let i = 0; i < classObj.students[j].marks.length; i++){
                total += classObj.students[j].marks[i].mark;
        }
        
    }
    console.log(`overall total marks for the class is ${total}`)
 }
 overallMarks(classObj);

 //Question 21.
 let subjectTotal = {};
 for (let j = 0; j < classObj.students.length; j++){
    for (let i = 0; i < classObj.students[j].marks.length; i++){
        let subject = classObj.students[j].marks[i].subject;
        let mark = classObj.students[j].marks[i].mark;

        subjectTotal[subject] = (subjectTotal[subject] || 0) + mark;
    }
}
 function highestTotalMarkSub(classObj) { 

    let highestTotal = 0;
    for (let subject in subjectTotal) {
        if (subjectTotal[subject] > highestTotal) {
            highestTotal = subjectTotal[subject]; 
            highestSubject = subject;
        }
    }
 console.log(`The subject ${highestSubject} with the highest total mark total of ${highestTotal}`);
 }
highestTotalMarkSub(classObj);

//Question 22.

function lowestTotalMarkSub(classObj) {
    let lowestTotal = Infinity;
    for (let subject in subjectTotal) {
        if (subjectTotal[subject] < lowestTotal) {
            lowestTotal = subjectTotal[subject]; 
            lowestSubject = subject;
        }
    }
    console.log(`The subject ${lowestSubject} with the highest total mark total of ${lowestTotal}`);
}

lowestTotalMarkSub(classObj);

//Question 23

function highestAvrgMarkStudent(classObj) {
    let topAvrg = 0;
    for (let j=0; j < classObj.students.length; j++){
        let total = 0;
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            total += classObj.students[j].marks[i].mark;
            avrg = total / classObj.students[j].marks.length;
        }
        if(avrg > topAvrg){
            topAvrg = avrg; 
          topper = classObj.students[j].name
        }
    }
    console.log(`${topper} has highest average mark ${topAvrg}`)
}
highestAvrgMarkStudent(classObj)

// Question 24

function lowestAvrgMarkStudent(classObj) {
    let lowestAvrg = Infinity;
    for (j=0; j < classObj.students.length; j++){
        let total = 0;
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            total += classObj.students[j].marks[i].mark;
            avrg = total / classObj.students[j].marks.length;
        }
        if(avrg < lowestAvrg){
            lowestAvrg = avrg
            topper = classObj.students[j].name
        }
    }
    console.log(`${topper} has lowest average mark ${lowestAvrg}`)
}
lowestAvrgMarkStudent(classObj)

//Question 27  

function scoredAboveMark(classObj, subjectName, value) {
    let count = 0
    classObj.students.forEach(student => {
        student.marks.forEach(Mark => {
          if (Mark.subject === subjectName && Mark.mark > value){
            count++;
          }
        });
    });
    console.log(`Number of students who scored above ${value} in ${subjectName}: ${count}`);
}
scoredAboveMark(classObj, "English", 30);
scoredAboveMark(classObj, "Maths", 25);
scoredAboveMark(classObj, "Physics", 20);
scoredAboveMark(classObj, "Chemistry", 50);
scoredAboveMark(classObj, "Computer",40);

//Question 28

function scoredBelowMark(classObj, subjectName, value) {
    let count = 0
    classObj.students.forEach(student => {
        student.marks.forEach(Mark => {
            if (Mark.subject === subjectName && Mark.mark < value){
                count++;
            }
        });
    });
    console.log(`Number of students who scored below ${value} in ${subjectName}: ${count}`);
}

scoredBelowMark(classObj, "English", 10);
scoredBelowMark(classObj, "Maths", 40);
scoredBelowMark(classObj, "Physics", 40);
scoredBelowMark(classObj, "Chemistry", 50);
scoredBelowMark(classObj, "Computer",35);


//Question 29

function scoredAboveAllSub(classObj,value) {
    let count = 0;
    classObj.students.forEach(student => {
        if(student.marks.every(Mark => Mark.mark > value)){
                count++;
            }
        })
    console.log(`${count} no.of students scored above ${value} marks in all subjects`)
}
scoredAboveAllSub(classObj,30)

//Question 30

function scoredBelowAllSub(classObj,value) {
    let count = 0;
    classObj.students.forEach(student => {
       if(student.marks.every(Mark => Mark.mark < value)){
                count++;
            }
    })
    console.log(`${count} no.of students scored below ${value} marks in all subjects`)
}
scoredBelowAllSub(classObj,40)

//Question 31

function scoredAboveMarkPercent(classObj, subjectName, value) {
    let count = 0
    classObj.students.forEach(student => {
        student.marks.forEach(Mark => {
          if (Mark.subject === subjectName && Mark.mark > value){
            count++;
            percetange= (count / classObj.students.length) * 100
          }
        });
    });
    console.log(`Percentage of students who scored above ${value} in ${subjectName}: ${percetange}%`);
}
scoredAboveMarkPercent(classObj, "English", 30);
scoredAboveMarkPercent(classObj, "Maths", 25);
scoredAboveMarkPercent(classObj, "Physics", 20);
scoredAboveMarkPercent(classObj, "Chemistry", 50);
scoredAboveMarkPercent(classObj, "Computer",40);

//Question 32

function scoredBelowMarkPercent(classObj, subjectName, value) {
    let count = 0
    classObj.students.forEach(student => {
        student.marks.forEach(Mark => {
          if (Mark.subject === subjectName && Mark.mark < value){
            count++;
            percetange= (count / classObj.students.length) * 100
          }
        });
    });
    console.log(`Percentage of students who scored below ${value} in ${subjectName}: ${percetange}%`);
}
scoredBelowMarkPercent(classObj, "English", 30);
scoredBelowMarkPercent(classObj, "Maths", 25);
scoredBelowMarkPercent(classObj, "Physics", 20);
scoredBelowMarkPercent(classObj, "Chemistry", 50);
scoredBelowMarkPercent(classObj, "Computer",40);

//Question 33

function scoredAboveAllSubPercent(classObj,value) {
    let count = 0;
    classObj.students.forEach(student => {
        if(student.marks.every(Mark => Mark.mark > value)){
                count++;
             percetange =(count / classObj.students.length) * 100
            }
        })
    console.log(`${percetange}% no.of students scored above ${value} marks in all subjects`)
}
scoredAboveAllSubPercent(classObj,30)

//Question 34

function scoredBelowAllSubPercent(classObj,value) {
    let count = 0;
    classObj.students.forEach(student => {
       if(student.marks.every(Mark => Mark.mark < value)){
                count++;
                percetange =(count / classObj.students.length) * 100
            }
    })
    console.log(`${percetange}% no.of students scored below ${value} marks in all subjects`)
}
scoredBelowAllSubPercent(classObj,50)

//Question 35 - incomplete

function highestPercentageOfMarks(classObj) {
    let topPercentage = 0;
    for (let j=0; j < classObj.students.length; j++){
        let total = 0;
        for(let i = 0; i < classObj.students[j].marks.length; i++){
            total += classObj.students[j].marks[i].mark;
        }
        let percetange = (total/(classObj.students[j].marks.length * 50)) * 100
        if(percetange > topPercentage){
            topPercentage = percetange; 
          topper = classObj.students[j].name
        }
    }
    console.log(`${topper} has highest percentage mark ${topPercentage}%`)
}
highestPercentageOfMarks(classObj)

//Question 36

function lowestPecentageOfMarks(classObj) {
    let leastPercentage = Infinity
    for(let j=0; j < classObj.students.length; j++){
        let total = 0;
        for(i=0; i < classObj.students[j].marks.length; i++){
            total += classObj.students[j].marks[i].mark;
        }
        let percentage = (total / (classObj.students[j].marks.length * 50))*100
        if(percentage < leastPercentage){
            leastPercentage = percentage;
            nameOfstudent = classObj.students[j].name
        }
    }

    console.log(`${nameOfstudent} has lowest percentage mark ${leastPercentage}%`)
}
lowestPecentageOfMarks(classObj);

// Question 37
