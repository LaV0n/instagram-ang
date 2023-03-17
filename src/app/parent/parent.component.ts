import { Component } from '@angular/core'

interface WeekGrade {
  id: number
  gradeItem: number
}

interface Lessons {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  lessons: Lessons[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 2,
        },
      ],
    },
    {
      id: 1,
      title: 'Biology',
      weekGrades: [
        {
          id: 0,
          gradeItem: 2,
        },
        {
          id: 1,
          gradeItem: 2,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
  ]

  getGrade(grade: string) {
    //this.grades.push(grade)
  }
}
