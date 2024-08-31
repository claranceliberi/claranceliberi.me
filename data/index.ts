import type { Book, Experience } from "~/types";


export const books: Book[] = [
  {
    title: 'Sarrounded By Idiots',
    author: 'T. Erikson',
    cover: 'https://res.cloudinary.com/dawr8i20o/image/upload/c_scale,f_webp,w_180/v1725100328/claranceliberi.me/books/sarrounded-by-idiots.webp',
    status: 'READING'
  }
]

export const experiences: Experience[] = [
  {
    company: 'Strettch',
    startDate: 'Jan 2024',
    color: 'GREEN'
  },
  {
    company: 'Rwanda Social Security Board (RSSB)',
    startDate: 'Jan 2024',
    color: 'BLUE'
  },
  {
    company: 'PivotAccess Ltd.',
    startDate: 'May 2023',
    endDate: 'Jan 2024',
    color: 'GREY'
  },
  {
    company: 'BP plc.',
    startDate: 'July 2022',
    endDate: 'March 2023',
    color: 'GREY'
  },
]
