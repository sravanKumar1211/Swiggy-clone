// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function RestaurantDetail() {

//     const{id}=useParams();
//     const [foodItemDetails,setFoodItemDetails]=useState()

//     useEffect(()=>{
//         const API=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
//         async function calling(){
//             let resp=await axios.get(API)
//             console.log(resp)
//             setFoodItemDetails(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.card[4].card.card.itemCards);
//         } 
//         calling()
        
//     },[id])

//   return (
//     <>
//         <h1>List of items avlable at Restaruant</h1>
//         {
//             foodItemDetails.map((foodItem)=>{
//                 return(
//                     <div className='flex w-3/4 mx-auto mb-10 border-b-4 p-4'>
//                         <div className='flex flex-col w-3/4'>
//                         <h1>{foodItem.card.info.name}</h1>
//                         <h1>{foodItem.card.info.defaultPrice/100}</h1>
//                         <h1>{foodItem.card.info.category}</h1>
//                         </div>
//                         <img className='w-52 h-44 rounded-md border shadow-lg border-gray-100'
//                          src={foodItem.card[15].image} alt="" />
//                          <button className='border bg-green-300 h-8 relative top-16 right-5'>Add+</button>
//                     </div>
//                 )
//             })
//         }
//     </>
//   )
// }


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export default function RestaurantDetail() {
//   const { id } = useParams();
//   const [foodItemDetails, setFoodItemDetails] = useState([]);

// useEffect(() => {
//   const API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

//   async function calling() {
//     try {
//       const resp = await axios.get(API);

//       // Find the REGULAR.cards Section
//       const allRegularCards =
//         resp.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//           console.log(allRegularCards)

//       // DEBUG: Optional, for troubleshooting
//       // console.log(JSON.stringify(allRegularCards, null, 2));

//       // Extract itemCards not from every "cards" entry, only those that contain "itemCards"

//       let allItems = [];
//       allRegularCards.forEach((cardObj) => {
//         const items =
//           cardObj?.card?.card?.itemCards ||
//           cardObj?.card?.card?.categories?.flatMap(
//             (cat) => cat?.itemCards || []
//           ) ||
//           [];
//         if (items && items.length > 0) {
//           allItems.push(...items);
//         }
//       });

//       setFoodItemDetails(allItems);
//     } catch (error) {
//       console.error("Error fetching Swiggy data:", error);
//     }
//   }

//   calling();
// }, [id]);



//   return (
//     <>
//       <h1 className="text-2xl font-bold text-center my-8">
//         List of items available at Restaurant 🍕
//       </h1>

//       {foodItemDetails && foodItemDetails.length > 0 ? (
//         foodItemDetails.map((foodItem) => {
//           const info = foodItem.card.info;
//           return (
//             <div
//               key={info.id}
//               className="flex w-3/4 mx-auto mb-10 border-b-4 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-all"
//             >
//               <div className="flex flex-col w-3/4">
//                 <h1 className="text-lg font-semibold text-gray-800">
//                   {info.name}
//                 </h1>
//                 <h1 className="text-md text-green-700 font-medium">
//                   ₹{(info.defaultPrice || info.price) / 100}
//                 </h1>
//                 <h1 className="text-sm text-gray-500">{info.category}</h1>
//               </div>

//               <div className="relative">
//                 <img
//                   className="w-52 h-44 rounded-md border shadow-lg border-gray-100 object-cover"
//                   src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${info.imageId}`}
//                   alt={info.name}
//                 />
//                 <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm shadow-md">
//                   Add+
//                 </button>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="text-gray-500 text-center mt-10">Loading menu...</p>
//       )}
//     </>
//   );
// }



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RestaurantDetail() {
    const {id} = useParams();
    const [foodItemDetails,setFoodItemDetails] = useState([])

    useEffect(()=>{
        const API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        async function calling(){
            let resp = await axios.get(API);
            console.log(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);    
            setFoodItemDetails(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);    
        }
        calling()
    },[id])

  return (
    <div>
        <h1 className='text-center font-bold text-2xl'>List of item's avaialable at restaurant</h1>
        {
            foodItemDetails.map((foodItem)=>{
                return (
                    <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
                        <div className="flex flex-col w-3/4">
                        <h1>{foodItem.card.info.name}</h1>
                        <h1>{foodItem.card.info.defaultPrice/100} /-</h1>
                        <h1>{foodItem.card.info.category}</h1>
                        </div>
                        <img
                        className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                        alt=""
                        />

                        <button
                        className="border bg-green-300 h-8 relative top-16 right-5">
                        Add +
                        </button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default RestaurantDetail