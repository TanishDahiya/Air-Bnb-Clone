import React from 'react'
import { Button } from "@material-ui/core";
import Result from "./Result"



function SearchPage() {
    return (
      <div className="searchpage">
        <div className="searchPage__info">
          <p>62 stays · 26 august to 30 august · 2 guest</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
        </div>
      
        <Result className="gg"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
          location="Private room in center of Delhi"
          title="20 mins to Red Fort"
          description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
          star={4.73}
          price="₹3000 / night"
          total="₹5000 total"
        />

        <Result
          img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
          location="Private room in center of Gurgaon"
          title="Luxury studio apartment"
          description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
          star={4.3}
          price="₹4000 / night"
          total="₹ 5000total"
        />

        <Result
          img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
          location="Private room in center of Sonipat"
          title="15 mins to Amrik Sukhdev"
          description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
          star={3.8}
          price="₹800 / night"
          total="₹1000 total"
        />
        <Result
          img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
          location="Private room in center of Rohtak"
          title="30 mins to Inox Cinema"
          description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
          star={4.1}
          price="₹5500 / night"
          total="₹7200 total"
        />
        <Result
          img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
          location="Private room in center of Noida"
          title="Spacious Bedroom"
          description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
          star={5.0}
          price="₹6000 / night"
          total="₹8500 total"
        />
        <Result
          img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
          location="Private room in center of Murthal"
          title="The Blue Room In Murthal"
          description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
          star={4.23}
          price="₹1000 / night"
          total="₹2000 total"
        />
        <Result
          img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
          location="Private room in center of Dwarka"
          title="5 Star Luxury Apartment"
          description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
          star={3.85}
          price="₹1500 / night"
          total="₹6500 total"
        />
        
      </div>
    );
}

export default SearchPage
