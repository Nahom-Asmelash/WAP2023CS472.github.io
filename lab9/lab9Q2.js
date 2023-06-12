class Student {
    constructor(id) {
      this.studentId = id;
      this.answers = [];
    }
  
    addAnswer(question) {
      this.answers.push(question);
    }
  }
  
  class Question {
    constructor(id, ansr) {
      this.questionId = id;
      this.answer = ansr;
    }
  
    checkAnswer(answer) {
      return this.answer === answer;
    }
  }
  
  class Quiz {
    constructor(questions, students) {
      this.questions = questions;
      this.students = students;
    }
  
    getStudent(sId) {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].studentId === sId) {
          return this.students[i];
        }
      }
      return null;
    }
  
    scoreStudentBySid(sId) {
      let student = this.getStudent(sId);
      let score = 0;
      for (let i = 0; i < this.questions.length; i++) {
        let question = this.questions[i];
        let studentAnswer = student.answers.find((qst) => qst.questionId === question.questionId);
        if (question.checkAnswer(studentAnswer.answer)) {
          score++;
        }
      }
      return score;
    }
  
    getAverageScore() {
      let sum = this.students.reduce((prev, stu) => prev + this.scoreStudentBySid(stu.studentId), 0);
      return sum / this.students.length;
    }
  }
  
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a'));
  student1.addAnswer(new Question(3, 'b'));
  student1.addAnswer(new Question(1, 'b'));
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b'));
  student2.addAnswer(new Question(2, 'a'));
  student2.addAnswer(new Question(1, 'd'));
  const students = [student1, student2];
  const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
  const quiz = new Quiz(questions, students);
  
  let scoreforStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreforStudent10); // Expected Result: 3
  
  let scoreforStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreforStudent11); // Expected Result: 2
  
  let average = quiz.getAverageScore();
  console.log(average); // Expected Result: 2.5
  