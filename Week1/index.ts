class HatchDevClass{
    private pupils: string []=[]

    constructor(students:string[]){
        this.pupils= students;
    }

    getStudentNames(){
        return this.pupils
    }

    private getTotalNumberOfStudents(){
        return this.pupils.length
    }
}

const excelSheet= ["Ade","Lola", "Bola", "Tola"]
const HC = new HatchDevClass(excelSheet)

console.log(HC['getTotalNumberOfStudents']());// bracket notation exposes the public access modifier due to ts compilation format
//console.log(HC.getTotalNumberOfStudents); //private and only accessible within class HatchDevClass


const ch1=["Arsenal", "Bayern", "Real-marid", "Man-City"];
const disqualifiedTeams:string[]=[]
const disqualifiedTeams2:string[]=[]

//Imperative Programming- shows how it is being filtered
for (let i=0; i<ch1.length; i++){
    const club = ch1[i];
    if (club === "Arsenal" || club === "Man-City"){
        disqualifiedTeams.push(club)
    }
}

console.log(disqualifiedTeams)
//Declarative Programming- Preferable method in OOP; shows method of filtering
ch1.filter((club:string) => {
    if (club === "Arsenal" || club === "Man-City"){
        disqualifiedTeams2.push(club)
    }
})

console.log(disqualifiedTeams2)

