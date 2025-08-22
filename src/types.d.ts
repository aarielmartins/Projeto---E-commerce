//ESSE É UM ARQUIVO DE DEFINIÇÕES DE TIPO ESPECÍFICO DO TYPESCRIPT
declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

//JA EXISTE UMA CLASSE COM O NOME GAME
//UMA CLASSE TEM MAIS RECURSOS QUE UM TIPO
//COMO O SISTEMA É APENAS PARA LEITURA É MELHOR USAR O TIPO
//ESSE TIPO SE REFERE A API QUE IREMOS USAR, OS ATRIBUTOS SÃO IGUAIS
declare type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
