export const  PagesLink = {
    popular: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=060f347dcc7582a34aa7ccbecd45da16&page=1",
    nowInCinema: `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${date()}&primary_release_date.lte=${date()}&api_key=060f347dcc7582a34aa7ccbecd45da16&page=1`,
    
}

function date() {
    const local =  new Date()
    let year = local.getFullYear()
    let month = local.getMonth()
    let day = local.getDay()
    let result = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    return result
}
