// Krok 1: Definice třídy Třída (Clazz)
class Clazz {
    constructor(nazev) {
        this.nazev = nazev;
        this.studenti = [];
    }
}

// Krok 2: Definice třídy Student
class Student {
    constructor(jmeno, prijmeni, vek) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.trida = null; // Inicializace tridy na null
    }
}

// Krok 3: Vytvoření instance tridy ClassA a ClassB
const classA = new Clazz('Class A');
const classB = new Clazz('Class B');

// Krok 4: Vytvoření 10 studentů
const students = [
    new Student('Jan', 'Novák', 17),
    new Student('Petr', 'Svoboda', 16),
    new Student('Jana', 'Kovářová', 19),
    new Student('Eva', 'Novotná', 20),
    new Student('Tomáš', 'Pospíšil', 15),
    new Student('Kateřina', 'Malá', 17),
    new Student('Martin', 'Urban', 18),
    new Student('Lucie', 'Dvořáková', 22),
    new Student('David', 'Procházka', 16),
    new Student('Barbora', 'Němcová', 18),
];

// Krok 5: Rozdělení studentů do tříd A a B
students.forEach(student => {
    if (student.vek < 18) {
        classA.studenti.push(student);
        student.trida = classA; // Nastavení třídy studenta na classA
    } else {
        classB.studenti.push(student);
        student.trida = classB; // Nastavení třídy studenta na classB
    }
});

// Krok 6: Výpis studentů do konzole ve formátu Jméno Přimeni Trida
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.jmeno} ${student.prijmeni} ${student.trida.nazev}`);
});

// Krok 7: Výpis studentů do HTML
function renderStudents(clazz, containerId) {
    const container = document.getElementById(containerId);
    const classStudents = clazz.studenti.map((student, index) => {
        return `
            <div class="student">
                <p class="student-info">${index + 1}. ${student.jmeno} ${student.prijmeni}</p>
                <p class="student-info">Class: ${student.trida.nazev}</p>
            </div>
        `;
    }).join('');
    container.innerHTML = classStudents;
}

renderStudents(classA, 'classA-students');
renderStudents(classB, 'classB-students');
