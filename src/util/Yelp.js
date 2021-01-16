const apiKey =  'A4effrXyC38flzj9-tBSefHq5AxUmEZmn4YVI_bPiIe0-G-seW7oLXPprSXznqLICbN5LSEzCybjoGNHqweXNjJ9aoZ88-fKgugvLf9-tRiQ6PXU4rZvw1KEYQ4BYHYx';

const Yelp = {

  async search (term, location, sortBy) {

    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    try {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            url:business.url
          };
        });
      } else { console.log('hello world')}
    }
    catch(e) { console.error(`Hello World ${e}`); }
    ;
  }
}

export default Yelp;


// const apiKey ='A4effrXyC38flzj9-tBSefHq5AxUmEZmn4YVI_bPiIe0-G-seW7oLXPprSXznqLICbN5LSEzCybjoGNHqweXNjJ9aoZ88-fKgugvLf9-tRiQ6PXU4rZvw1KEYQ4BYHYx';
// const Yelp ={
// async search(term, location, sortBy){
//     // console.log(term, location, sortBy)
//     return (
//         await fetch (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:{Authorization: `Bearer ${apiKey}`}})
//     .then(response=>response.json())
//     .then((jsonResponse)=>{
//         if(jsonResponse.businesses){
//             return jsonResponse.businesses.map(business=>{
//                 return {
//                      id:business.id,
//                      imageSrc:business.imageSrc,
//                      name:business.name,
//                      address:business.location.address,
//                      city:business.location.city,
//                      state:business.location.state,
//                      zipCode:business.location.zipcode,
//                      category:business.categories[0].title,
//                      rating:business.review.rating,
//                      reviewCount:business.review_count,
//                      url:business.url
//                     }
//                 }
//             )}else{console.log('hello world')}
//     })
    
//     )
// }

// }

// export default Yelp;

// const apiKey= 'h9rHGemjST_nSv59UvwdhtcLyjib708Sen3U7_7NjD2sidP7uSA_i0d2oNW8D4EUuAwHSN20-jP09upaXvw1KDXffUCTQ6tj5ERwq5v-h34rVy4aoHsZsIME3E_rXnYx';

