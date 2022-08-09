<template>
<NuxtLayout>
    <div class="justify-center pb-20">
      <div>
        <h2 class="text-4xl font-bold mt-4">Articles</h2>
        <p class="text-color-sec my-4">I write articles about concepts I've learnt in Software Development. These are the articles <br> I've written so far. </p>
      </div>
      
      
      <ul class="pl-8">
        <template v-for="year in years" :key="year">
          <div class="relative pointer-events-none h-20">
            <span class="text-[7.5rem] absolute bg-transparent opacity-10 -left-[2rem] -top-[1.5rem] font-bold"> {{year}} </span>
          </div>
          <li> <MoleculesArticle v-for="article in data[year]" :key="article.path" :blog="article" /> </li>
        </template>
      </ul>
    </div>
</NuxtLayout>
</template>

<script lang="ts" setup>
import { group } from 'console';
import { BlogInformation } from '~~/types';

definePageMeta({
  title: 'Ntwari Clarance Liberiste | Articles',  
})

type groupByYears = Record<number,BlogInformation []>;

const query = queryContent('/blog')

const {data}  = await useAsyncData<groupByYears>('blogs',async () => {
  const _data = await query.find()
  const fetchedData :BlogInformation[] = []

  // filter important data
  _data.map(d => {
    fetchedData.push({title:d.title,date:d.date,duration:d.duration, description: d.description,path:d._path})
  })

  // group by years
  const groupedYears = groupByYears(fetchedData)



  //sort articles in every years
  return sortArticlesByDate(groupedYears)
})



function groupByYears(articles: BlogInformation[]){
  const years: groupByYears = {}

  articles.map(article => {
    const year = new Date(article.date).getFullYear();
    if(!years[year])
      years[year] = []
    years[year].push(article)
  })

  return years
}


function sortArticlesByDate(articles:groupByYears){
  const years : groupByYears = {}

  for(const [key,value] of Object.entries(articles)){
    years[key] =  value.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  return years;
}

const da = await query.find();
console.log(da[0])

const years = Object.keys(data.value).sort((a,b) => +b - +a)
</script>