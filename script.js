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

function avrgMarks(classObj, studentName) {
    let student = 0;
    for (let i = 0; i < classObj.students.length; i++) {
        if (classObj.students[i].name === studentName) {
            student = classObj.students[i];
            break;
        }
    }

    if (student) {
        let total = 0;
        for (let i = 0; i < student.marks.length; i++) {
         total += student.marks[i].mark;
        }
        let avrg = total / student.marks.length;
        console.log(`Average mark of ${student.name} is ${avrg}`);
    } else {
        console.log(`not found.`);
    }
}

avrgMarks(classObj, "Ravi"); 
avrgMarks(classObj, "Aju");

//Question 8

function totalMarks(classObj, studentName) {
    let student = 0;
    for (let i = 0; i < classObj.students.length; i++) {
        if (classObj.students[i].name === studentName) {
            student = classObj.students[i];
            break;
        }
    }
    if (student) {
        let total = 0;
        for (let i = 0; i < student.marks.length; i++) {
         total += student.marks[i].mark;
        }
        console.log(`Total mark of ${student.name} is ${total}`);
    } else {
       
    }
}
totalMarks(classObj, "Ravi"); 
totalMarks(classObj,'Aju');

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
subjectTotalMark(classObj, "English")
subjectTotalMark(classObj, "Physics");

//Question 11


