
import { param } from "jquery";
import axiosClient from "./axiosClient";
export const category = { 
     
    
    movie:'movie',
    tv:'tv'
}

export const MovieType = { 
    upcoming:'upcoming',
    popular:'popular',
    top_rated:'top_rated'

}
export const tvType = { 
    upcoming:'upcoming',
    popular:'popular',
    on_the_air:'on_the_air'
    
}
const tmdbApi  = { 
//     getMoviesList:(type, params)=> {
//         const Url = 'movie/' + MovieType[type];
        
//         return axiosClient.get(Url,params);
//     },
//     gettvList:(type, params)=> {
//         const Url = 'movie/' + tvType[type];
//         return axiosClient.get(Url,params);
//     },
//     getvideos:(cate, id)=> {
//         const Url = category[cate] +'/' + id + '/videos';
//         return axiosClient.get(Url,{params:{}});
//     },
//     search:(cate, params)=> {
//         const Url =  'search/' + category[cate];
//         return axiosClient.get(Url,params);
//     },
//     detail:(cate,id,params)=> {
//         const Url = category[cate]+'/'+id;
//         return axiosClient.get(Url,params);
//     },
//     credits:(cate,id,params)=> {
//         const Url = category[cate]+'/'+id+'/credits'
//         return axiosClient.get(Url,{params:{}});
//     },
//     similar:(cate,id,params)=> {
//         const Url = category[cate]+'/'+id+'/similar'
//         return axiosClient.get(Url,{params:{}});
//     }

// }
getMoviesList: (type, params) => {
    const url = 'movie/' + MovieType[type];
    return axiosClient.get(url, params);
},
getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
},
//كابيتل ولا صومل
getVideos: (cate, id) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, {params: {}});
},
search: (cate, params) => {
    const url = 'search/' + category[cate];
    return axiosClient.get(url, params);
},
detail: (cate, id, params) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get(url, params);
},
credits: (cate, id) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, {params: {}});
},
similar: (cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, {params: {}});
},
}
export default tmdbApi;
