// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

const myFirstName = 'Robert';
const myLastName = 'Hubert';
//createUser
function createUser(firstName, lastName)
{
  let user = 
  {
      firstName:firstName,
      lastName:lastName
  }
  return user;
}

let newUser = createUser(myFirstName, myLastName);

//setAge
function setAge(user, age)
{
    user['age'] = age;
    return user;
}

setAge(newUser, 31);

//incrementAge

function incrementAge(user)
{
    user['age'] += 1;
    return user;
}

incrementAge(newUser);

//fixCar
const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: true
};

function fixCar(car)
{
    car.needsMaintenance = false;
    return car;
}

fixCar(myCar);

//addGrades
const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

function addGrades(student, newGrades)
{
    for(let i=0; i<newGrades.length; i++)
    {
        student.grades.push(newGrades[i]);
    }
    return student;
}

//getDataType

function getDataType(obj, key)
{
    return typeof obj[key];
}

//addTodo
function addTodo(todos, newTodo)
{
    todos.push(newTodo);
    return todos;
}

//addSong
function addSong(playlist, newSong)
{
    playlist.duration += newSong.duration;
    playlist['songs'].push(newSong);

    return playlist;
}

//updateReportCard
function updateReportCard(reportCard, newGrade)
{
    reportCard.grades.push(newGrade);
    reportCard.lowestGrade = Math.min(...reportCard.grades);
    reportCard.highestGrade = Math.max(...reportCard.grades);

    let sum = 0;
    for(let grade of reportCard.grades)
    {
        sum += grade;
    }

    reportCard.averageGrade = sum/(reportCard.grades.length);

    return reportCard;
}










// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
